// requires D3 v7+
const ComparablesChart = (() => {
  let _chartInitialized = false,
      _modelData,
      _depreciationData,
      _comparablesData,
      _chartCurrencyAbbr,
      timestampParse = d3.timeParse('/Date(%Q%Z)/');

  // define/scope some UI vars
  let $svg,
      $chart,
      $line1,
      $line2,
      $line3,
      $circles1,
      $circles2,
      $circles3,
      $xAxis,
      $yAxis,
      $xAxisGrid,
      $yAxisGrid,
      $gridRect,
      $xAxisRect;

  let blueLight = '#F3F8FD',
      blueMedium = '#7dd3fc',
      greyLight = '#e5e7eb',
      greyMedium = '#9ca3af',
      amberMedium = '#FBBF24',
      redMedium = '#F87171',
      strokeOpacity = '0.8',
      dotStartOpacity = '0',
      dotEndOpacity = '0.95';


  // define/scope some dimension vars
  let el,
      chartFiltersWrapper,
      filtersPanel,
      chartControls,
      controlsWrapper,
      wrapperStyles,
      width,
      height,
      isXL,
      isFullScreen,
      margin = {top: 1, right: 51, bottom: 40, left: 1},
      breakpoints = {xl: 1280},
      bandWidth,
      animationDuration = 250,
      lineStrokeWidth = 3;

  // d3 vars
  let yTickResolution = 50000,
      xTickResolution = 3,
      timeParser = d3.timeParse("%Y-%m-%dT%H:%M:%S"),
      fullDateFormat = d3.timeFormat("%Y-%m-%d"),
      xScale,
      yScale,
      xAxisFn,
      yAxisFn,
      xAxisGridFn,
      yAxisGridFn,
      xAxisTicks,
      yAxisTicks,
      advertisedLine,
      resaleLine,
      wholesaleLine;

  const resizeEvent = new Event('chartResize');
  const chartResizer = new ResizeObserver(entries => {
    for (let entry of entries) {
      entry.target.dispatchEvent(resizeEvent);
    };
  });

  let lineDashing = '8, 6',
      lineDashLength = lineDashing.split(/[\s,]/)
        .map((a) => parseFloat(a) || 0)
        .reduce((a, b) => a + b );

  ////////////////////////////////
  // PUBLIC
  const init = (element, data, animate=true) => {
    if(element === null){
      console.log('CHART: ELEMENT CANNOT BE NULL');
      return false;
    }

    // emptyElement(element);
    // if(_chartInitialized) return false;

    console.log('CHART: init');

    _chartInitialized = true;
    setData(data);

    el = element;
    chartFiltersWrapper = document.getElementById('chartFiltersWrapper');
    filtersPanel = document.getElementById('filtersPanel');
    controlsWrapper = document.getElementById('chartControlsWrapper');

    width = chartFiltersWrapper.offsetWidth - margin.left - margin.right;
    height = el.offsetHeight - margin.top - margin.bottom;

    isFullScreen = chartFiltersWrapper.classList.contains('full-screen');
    isXL = (document.body.clientWidth >= breakpoints.xl);
    if(isFullScreen){
      wrapperStyles = window.getComputedStyle(wrapper);
      width = (width - filtersPanel.offsetWidth - (parseInt(wrapperStyles.paddingLeft) + parseInt(wrapperStyles.paddingRight)));
    } else if(isXL){
      wrapperStyles = window.getComputedStyle(controlsWrapper);
      width = (width - filtersPanel.offsetWidth - parseInt(wrapperStyles.marginLeft));
    }

    setScales();
    setLines();

    $svg = d3.select(el).append('svg')
      .attr('width', width + (margin.left+margin.right))
      .attr('height', height + (margin.top+margin.bottom))
      .style('overflow', 'hidden');

    $chart = $svg.append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    drawGrid();
    drawYAxis();
    drawXAxis();
    drawLines(animate);
    drawScatterPlot(animate);

    // listeners
    chartFiltersWrapper.addEventListener('chartResize', (e) => {
      if(!_chartInitialized) return false;
      resizeChart();
    }, false);

    chartResizer.observe(chartFiltersWrapper);
  };

  const update = (data) => {
    if(!_chartInitialized) return false;
    console.log('CHART: update');
    $line1.remove();
    $line2.remove();
    $line3.remove();

    $chart.selectAll('circle').remove();

    setData(data);
    setScales();
    updateYAxis();
    updateXAxis();
    updateGrid();
    drawLines(true);
    drawScatterPlot(true);
  };

  //////////////////////////////
  // PRIVATE
  function setData(data){
    let curveData = data.depreciationCurveData;
    _depreciationData = curveData.publishedValues.map((d) => {
      return {
        publishedProductValueId: Number(d.publishedProductValueId),
        issueId: Number(d.issueId),
        issueName: d.issueName,
        publishedDate: timeParser(d.publishedDate),
        wholesale: Number(d.wholesale),
        resaleCash: Number(d.resaleCash),
        advertised: Number(d.advertised),
      };
    })
    .sort((a, b) => {
      return a.publishedDate - b.publishedDate;
    });

    let forecastData = {
      publishedProductValueId: 0,
      issueId: 0,
      issueName: curveData.threeMonthForecast.issueName,
      publishedDate: d3.timeMonth.offset(_depreciationData[_depreciationData.length-1].publishedDate,3),
      wholesale: Number(curveData.threeMonthForecast.wholesale),
      resaleCash: Number(curveData.threeMonthForecast.resaleCash),
      advertised: Number(curveData.threeMonthForecast.advertised),
    };

    _depreciationData.push(forecastData);
    _modelData = curveData.productSpecs;

    data.comparables.forEach((d) => {
      let string = d.listDate || d.soldDate;
      d.timestamp = timestampParse(string).getTime();
    });

    // _comparablesData = {
      // advertised: groupArrayBy(data.comparables.filter(d => d.comparableType === 'ACTIVE_LISTING'), 'timestamp'),
      // auction: groupArrayBy(data.comparables.filter(d => d.comparableType === 'AUCTION_REPORT'), 'timestamp'),
      // sold: groupArrayBy(data.comparables.filter(d => d.comparableType === 'SOLD_REPORT'), 'timestamp'),
    // };

    _comparablesData = data.comparables;
  };

  function setScales(){
    console.log('CHART: set scales');
    let maxAdvertised = d3.max(_depreciationData, (d) => d.advertised),
        maxResale = d3.max(_depreciationData, (d) => d.resaleCash),
        maxWholesale = d3.max(_depreciationData, (d) => d.wholesale),
        minAdvertised = d3.min(_depreciationData, (d) => d.advertised),
        minResale = d3.min(_depreciationData, (d) => d.resaleCash),
        minWholesale = d3.min(_depreciationData, (d) => d.wholesale);

    let yMax = d3.max([
          d3.max(_comparablesData.map(d => typeof(d.soldPrice) === 'undefined' ? d.listPrice : d.soldPrice)),
          d3.max([maxAdvertised,maxResale,maxWholesale])
        ]),
        yMin = d3.min([
          d3.min(_comparablesData.map(d => typeof(d.soldPrice) === 'undefined' ? d.listPrice : d.soldPrice)),
          d3.min([maxAdvertised,maxResale,maxWholesale])
        ]),
        yMaxTick = (yMax+yTickResolution)-(yMax%yTickResolution),
        yMinTick = (yMin-yTickResolution)-(yMin%yTickResolution);
        // yMinTick = 0;

    yScale = d3.scaleLinear()
      .range([height, 0])
      .domain([yMinTick, yMaxTick]);

    xScale = d3.scaleTime()
      .range([0, width])
      .domain(d3.extent(_depreciationData, (d) => d.publishedDate));

    yAxisTicks = d3.range(yMinTick,(yMaxTick+yTickResolution),yTickResolution)
    xAxisTicks = d3.timeMonths(xScale.domain()[0], xScale.domain()[1], 3);
    xAxisTicks.push(xScale.domain()[1]);
  };

  function updateScales(){
    console.log('CHART: update scales');
    xScale.range([0, width]);
    yScale.range([height, 0]);
    xAxisGridFn.tickSize(-height);
    yAxisGridFn.tickSize(-width);
  };

  function drawGrid(){
    console.log('CHART: draw grid');
    // grid rectangle
    bandWidth = width/(xScale.ticks().length-1);
    $gridRect = $chart.append('rect')
     .attr('x', width - (bandWidth*3) - 2)
     .attr('y', 0)
     .attr('height', height)
     .attr('width',  (bandWidth*3) + 2)
     .attr('fill', blueLight);

    // grid lines
    xAxisGridFn = d3.axisBottom(xScale).tickSize(-height).tickFormat('').tickValues(xAxisTicks);
    yAxisGridFn = d3.axisRight(yScale).tickSize(-width).tickFormat('').tickValues(yAxisTicks);
    $xAxisGrid = $chart.append('g')
      .attr('transform', `translate(${0}, ${height})`)
      .attr('class', 'x axis-grid');
    $yAxisGrid = $chart.append('g')
      .attr('transform', `translate(${width}, ${0})`)
      .attr('class', 'y axis-grid');

    $xAxisGrid.call(xAxisGridFn);
    $yAxisGrid.call(yAxisGridFn);
    $xAxisGrid.selectAll('line')
        .attr('stroke', greyLight);
    $yAxisGrid.selectAll('line')
        .attr('stroke', greyLight);
    $xAxisGrid.selectAll('.domain')
        .style('display', 'none');
    $yAxisGrid.selectAll('.domain')
        .style('display', 'none');
  };

  function drawXAxis(){
    console.log('CHART: draw X axis');
    xAxisFn = d3.axisBottom(xScale)
      .tickValues(xAxisTicks)
      .tickSize(0)
      .tickFormat(d => monthAsSeason(Number(fullDateFormat(d).split('-')[1])));

    $xAxis = $chart.append('g')
      .attr('transform', `translate(${0}, ${height})`)
      .attr('class', 'x axis')

    $xAxisRect = $xAxis.append('rect')
      .attr('width', width+margin.right)
      .attr('height', margin.bottom)
      .attr('fill', 'white')

    $xAxis.call(xAxisFn)
      .selectAll('.tick')
        .call(formatXTicks);

    $xAxis.selectAll('.domain')
          .attr('stroke', greyMedium);
  };

  function drawYAxis(){
    console.log('CHART: draw Y axis');
    yAxisFn = d3.axisRight(yScale)
      .tickValues(yAxisTicks)
      .tickFormat(n => `${_modelData.baseCurrency[0]}$${d3.format("~s")(n)}`)
      .tickSize(0);

    $yAxis = $chart.append('g')
      .attr('transform', `translate(${width}, ${0})`)
      .attr('class', 'y axis');

    $yAxis.call(yAxisFn);

    $yAxis.selectAll('.tick')
      .call(formatYTicks);

    $yAxis.selectAll('.domain')
      .attr('stroke', greyMedium);
  };

  function updateGrid(dur=animationDuration){
    console.log('CHART: update grid');
    // grid rectangle
    xAxisGridFn.scale(xScale).tickSize(-height).tickValues(xAxisTicks);
    yAxisGridFn.scale(yScale).tickSize(-width).tickValues(yAxisTicks);
    bandWidth = width/(xScale.ticks().length-1);

    $gridRect.transition()
      .ease(d3.easeLinear)
      .duration(dur)
      .attr('x', width - (bandWidth*3) - 2)
      .attr('y', 0)
      .attr('height', height)
      .attr('width',  (bandWidth*3) + 2);

    // grid lines
    $xAxisGrid.transition()
      .attr('transform', `translate(${0},${height})`)
      .ease(d3.easeLinear)
      .duration(dur)
      .call(xAxisGridFn);

    $yAxisGrid.transition()
      .attr('transform', `translate(${width},${0})`)
      .ease(d3.easeLinear)
      .duration(dur)
      .call(yAxisGridFn);

    $xAxisGrid.selectAll('line')
        .attr('stroke', greyLight);
    $yAxisGrid.selectAll('line')
        .attr('stroke', greyLight);
  };

  function updateXAxis(){
    console.log('CHART: update X axis');
    xAxisFn.scale(xScale).tickValues(xAxisTicks)
    $xAxis.call(xAxisFn)
      .selectAll('.tick')
      .call(formatXTicks);
  };

  function updateYAxis(dur=animationDuration){
    console.log('CHART: update Y axis');
    yAxisFn.scale(yScale)
      .tickValues(yAxisTicks);

    console.log('CHART: resize Y axis');
    $yAxis.transition()
      .attr('transform', `translate(${width},${0})`)
      .ease(d3.easeLinear)
      .duration(dur)
      .call(yAxisFn)
      .selectAll('.tick')
      .call(formatYTicks);
  };

  function resizeXAxis(dur=animationDuration){
    console.log('CHART: resize X axis');
    $xAxis.transition()
        .ease(d3.easeLinear)
        .duration(dur)
          .attr('transform', `translate(${0},${height})`);

    $xAxis.selectAll('.tick')
      .transition()
        .ease(d3.easeLinear)
        .duration(dur)
        .attr('transform', d => `translate(${xScale(d)},${0})`);

    $xAxisRect.transition()
      .ease(d3.easeLinear)
      .duration(dur)
      .attr('width', width+margin.right)
      .attr('height', margin.bottom);

    $xAxis.selectAll('.domain').transition()
      .ease(d3.easeLinear)
      .duration(dur)
      .attr('d', `M0.5,0.5H${width}`);
  };

  function setLines(){
    advertisedLine = d3.line()
      .x(d => xScale(d.publishedDate))
      .y(d => yScale(d.advertised))
      .curve(d3.curveBasis);
    resaleLine = d3.line()
      .x(d => xScale(d.publishedDate))
      .y(d => yScale(d.resaleCash))
      .curve(d3.curveBasis);
    wholesaleLine = d3.line()
      .x(d => xScale(d.publishedDate))
      .y(d => yScale(d.wholesale))
      .curve(d3.curveBasis);
  };

  function drawLines(animate=true) {
    console.log('CHART: draw lines. Animate:', animate);
    let lineStrokeTransition = d3.transition()
        .ease(d3.easeSin)
        .duration(animationDuration);
    $line1 = $chart.append('path')
      .datum(_depreciationData)
      .attr('class', 'line advertised')
      .attr('fill', 'none')
      .attr('opacity', strokeOpacity)
      .attr('stroke', amberMedium)
      .attr('stroke-width', lineStrokeWidth)
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('d', advertisedLine);

    $line2 = $chart.append('path')
      .datum(_depreciationData)
      .attr('class', 'line resale')
      .attr('fill', 'none')
      .attr('opacity', strokeOpacity)
      .attr('stroke', redMedium)
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('stroke-width', lineStrokeWidth)
      .attr('d', resaleLine);

    $line3 = $chart.append('path')
      .datum(_depreciationData)
      .attr('class', 'line advertised')
      .attr('fill', 'none')
      .attr('opacity', strokeOpacity)
      .attr('stroke', blueMedium)
      .attr('stroke-linejoin', 'round')
      .attr('stroke-linecap', 'round')
      .attr('stroke-width', lineStrokeWidth)
      .attr('d', wholesaleLine);

    // animate it!
    let line1Length = $line1.node().getTotalLength(),
        line1DashCount = Math.ceil( line1Length / lineDashLength ),
        line1NewDashes = new Array(line1DashCount).join( lineDashing + ' ' ),
        line1DashArray = `${line1NewDashes} 0, ${line1Length}`;

    let line2Length = $line2.node().getTotalLength();

    let line3Length = $line3.node().getTotalLength(),
        line3DashCount = Math.ceil( line3Length / lineDashLength ),
        line3NewDashes = new Array(line3DashCount).join( lineDashing + ' ' ),
        line3DashArray = `${line3NewDashes} 0, ${line3Length}`;

    if(animate){
      $line1.attr('stroke-dashoffset', line1Length)
        .attr('stroke-dasharray', line1DashArray)
        .transition(lineStrokeTransition)
          .attr('stroke-dashoffset', 0);

      $line2
        .attr('stroke-dashoffset', line2Length)
        .attr('stroke-dasharray', line2Length)
          .transition(lineStrokeTransition)
            .attr('stroke-dashoffset', 0);

      $line3.attr('stroke-dashoffset', line3Length)
          .attr('stroke-dasharray', line3DashArray)
          .transition(lineStrokeTransition)
            .attr('stroke-dashoffset', 0);

      // post animation reset dash array
      setTimeout(() => {
        $line1.attr('stroke-dasharray', lineDashing);
        $line2.attr('stroke-dasharray', 0);
        $line3.attr('stroke-dasharray', lineDashing);
      }, animationDuration);
    } else {
      $line1.attr('stroke-dasharray', line1DashArray)
        .attr('stroke-dashoffset', 0);

      $line3.attr('stroke-dasharray', line3DashArray)
        .attr('stroke-dashoffset', 0);
    }



    ////////// example event
    // $circle.on('click', (e) => {
    //   let value = d3.select(e.target).data()[0];
    //   el.dispatchEvent(new CustomEvent('chartEvent', {
    //     detail: {
    //       data: value,
    //     },
    //   }));
    // });
  };

  function drawScatterPlot(animate){
    let date;
    $chart.selectAll('.plot-advertised').remove();
    $chart.selectAll('.plot-auction').remove();
    $chart.selectAll('.plot-sold').remove();

    $chart.selectAll(`.plot-advertised`)
      .data(_comparablesData.filter(d => d.comparableType === 'ACTIVE_LISTING'))
      .enter().append('circle')
      .attr('class', `plot-advertised`)
      .attr('r', 8)
      .attr('cx', d => xScale(new Date(d.timestamp)))
      .attr('cy', d => yScale(typeof(d.soldPrice) === 'undefined' ? d.listPrice : d.soldPrice))
      .attr('fill', 'rgb(251 191 36)')
      .style('opacity', dotStartOpacity);

    $chart.selectAll(`.plot-auction`)
      .data(_comparablesData.filter(d => d.comparableType === 'AUCTION_REPORT'))
      .enter().append('rect')
      .attr('class', `plot-auction`)
      .attr('width', 10)
      .attr('height', 10)
      .attr('x', d => xScale(new Date(d.timestamp)))
      .attr('y', d => yScale(typeof(d.soldPrice) === 'undefined' ? d.listPrice : d.soldPrice))
      .attr('stroke', 'rgb(125 211 252)')
      .attr('stroke-width', 3)
      .attr('fill', 'white')
      .style('opacity', dotStartOpacity);

    $chart.selectAll(`.plot-sold`)
      .data(_comparablesData.filter(d => d.comparableType === 'SOLD_REPORT'))
      .enter().append('rect')
      .attr('class', `plot-sold`)
      .attr('width', 13)
      .attr('height', 13)
      .attr('transform', d => `translate(${xScale(new Date(d.timestamp)) + 6}, ${yScale(typeof(d.soldPrice) === 'undefined' ? d.listPrice : d.soldPrice)}) rotate(45)`)
      .attr('fill', 'rgb(248 113 113)')
      .style('opacity', dotStartOpacity);

    if(animate){
      $chart.selectAll('.plot-advertised')
        .transition()
          .delay(animationDuration)
          .duration(animationDuration)
          .ease(d3.easeLinear)
            .style('opacity', dotEndOpacity);
      $chart.selectAll('.plot-auction')
        .transition()
          .delay(animationDuration)
          .duration(animationDuration)
          .ease(d3.easeLinear)
            .style('opacity', dotEndOpacity);
      $chart.selectAll('.plot-sold')
        .transition()
          .delay(animationDuration)
          .duration(animationDuration)
          .ease(d3.easeLinear)
            .style('opacity', dotEndOpacity);
    } else {
      $chart.selectAll('.plot-advertised')
        .style('opacity', 1);
      $chart.selectAll('.plot-auction')
        .style('opacity', 1);
      $chart.selectAll('.plot-sold')
        .style('opacity', 1);
    }
  };

  function updateLines(dur=animationDuration){
    console.log('CHART: update lines');

    // update the line functions with the new scales
    advertisedLine
      .x(d => xScale(d.publishedDate))
      .y(d => yScale(d.advertised));
    resaleLine
      .x(d => xScale(d.publishedDate))
      .y(d => yScale(d.resaleCash));
    wholesaleLine
      .x(d => xScale(d.publishedDate))
      .y(d => yScale(d.wholesale));

    $line1.transition()
      .duration(dur)
      .ease(d3.easeLinear)
        .attr('d', advertisedLine);

    $line2.transition()
      .duration(dur)
      .ease(d3.easeLinear)
        .attr('d', resaleLine);

    $line3.transition()
      .duration(dur)
      .ease(d3.easeLinear)
        .attr('d', wholesaleLine);
  };

  function resizeChart() {
    if(!_chartInitialized) return false;

    let newWidth = chartFiltersWrapper.offsetWidth - margin.left - margin.right,
        newHeight = el.offsetHeight - margin.top - margin.bottom;

    isFullScreen = chartFiltersWrapper.classList.contains('full-screen');
    isXL = (document.body.clientWidth >= breakpoints.xl);
    
    if(isFullScreen){
      wrapperStyles = window.getComputedStyle(chartFiltersWrapper);
      // console.log(wrapperStyles);
      newWidth = (newWidth - filtersPanel.offsetWidth - (parseInt(wrapperStyles.paddingLeft) + parseInt(wrapperStyles.paddingRight)));

      chartControls = document.getElementById('chartControls');
      chartControlsStyles = window.getComputedStyle(chartControls);
      console.log('Controls Top Margin is ' + parseInt(chartControlsStyles.marginTop));
      chartControlsTotalHeight = (chartControls.offsetHeight + parseInt(chartControlsStyles.marginTop) + parseInt(chartControlsStyles.marginBottom));
  
      newHeight = (window.innerHeight - parseInt(wrapperStyles.paddingTop) - parseInt(wrapperStyles.paddingBottom) - chartControlsTotalHeight - margin.top - margin.bottom);

      console.log('Bottom Padding is ' + parseInt(wrapperStyles.paddingBottom));
      // console.log('Window height is ' + window.innerHeight);
      // console.log('Bottom marrgin height is ' + margin.bottom);
      console.log('Chart controls height is ' + chartControlsTotalHeight);
      // console.log('Calculated newHeight should be ' + newHeight);
      // console.log(el.id);


    } else if(isXL){
      // The default, non-full-screen resizing, which checks for special layout at XL breakpoint
      wrapperStyles = window.getComputedStyle(controlsWrapper);
      newWidth = (newWidth - filtersPanel.offsetWidth - parseInt(wrapperStyles.marginLeft));
    }

    // Height math needed for when mobile resize doesn't cause change in width
    if((Math.abs(newWidth - width) > 5) || (Math.abs(newHeight - height) > 5)){
    // if(Math.abs(newWidth - width) > 5){

      width = d3.max([newWidth, 0]);
      height = d3.max([newHeight, 0]);

      if(width === 0 || height === 0) return;
      console.log('CHART: resize chart!');

      // update the SVG
      $svg.attr('width', width + (margin.left+margin.right))
        .attr('height', height + (margin.top+margin.bottom));

      updateScales();
      updateYAxis();
      resizeXAxis();
      updateGrid();
      updateLines();
      drawScatterPlot(true);
    }
  };

  // UTILITIES
  function formatYTicks($ticks){
    $ticks.each(function(t,i) {
      let $tick = d3.select(this);
      $tick.select('text').attr('dx', 4);

      if(i === 0){
        $tick.select('text').attr('dy', -2);
      }

      if(i === ($ticks.size()-1)){
        $tick.select('text').attr('dy', 8);
      }
    });
  };

  function formatXTicks($ticks){
    $ticks.each(function(t,i) {
      let $tick = d3.select(this),
          $text = $tick.select('text'),
          y_m_d = fullDateFormat($tick.data()[0]).split('-'),
          season, year;

      $text.text('')
        .attr('x', (i === 0 ? 16 : 2))
        .attr('y', 12);

      if(i === $ticks.size() - 1){
        season = '3 MO.';
        year = 'FORECAST';
      } else {
        season = monthAsSeason(Number(y_m_d[1]));
        year = y_m_d[0];
      }

      let $tSpans = $text.selectAll('tspan')
        .data([season,year])
        .enter().append('tspan')
        .text(d => d)
        .attr('dy', (d, i) => {
          if(i > 0) return 16;
        });

      $tSpans.attr('x', function() {
        return d3.select(d3.select(this).node().parentNode).attr('x');
      });

      // format the "3 MO. FORECAST" tick
      if(i === $ticks.size() - 1) {
        $tSpans.each(function(ts, ii){
          let $tSpan = d3.select(this);
          if(ii === 0){
            // bring the "3 MO." back half the width of the bottom node,
            // then forward half its own node width
            let offset = -($tSpan.node().nextSibling.getBBox().width/2) +
                          ($tSpan.node().getBBox().width/2);

            $tSpan.attr('dx', offset);
          }
        })
      }
    });
  };

  function monthAsSeason(month){
    if([12,1,2].includes(month)){
      return 'WIN';
    } else if([3,4,5].includes(month)){
      return 'SPR';
    } else if([6,7,8].includes(month)){
      return 'SUM';
    } else if([9,10,11].includes(month)){
      return 'FALL';
    } else {
      return '-';
    }
  };

  // UTILITIES
  function emptyElement(el){
    let children = Array.prototype.slice.call(el.childNodes);
    children.forEach(function(child){
      el.removeChild(child);
    })
  };

  function groupArrayBy(array, key){
      return array.reduce((objectsByKeyValue, obj) => {
        let value = obj[key];
        objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
        return objectsByKeyValue;
      },{}
    );
  };

  return {
    init: init,
    update: update,
  };
})();

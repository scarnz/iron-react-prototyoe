const helloWorldChart = (() => {
  let _chartInitialized = false,
      _chartData;

  // define/scope some UI vars
  let $svg,
      $chart,
      $circle;

  // define/scope some dimension vars
  let width,
      height,
      minWidth = 200,
      minheight = 200,
      margin = {top: 0, right: 0, bottom: 0, left: 0},
      animationDuration = 1000;

  //////////////////////////////////
  // PUBLIC
  const init = (el, data) => {
    if(el === null){
      console.log('CHART: ELEMENT CANNOT BE NULL');
      return false;
    }

    console.log('CHART: init with data', data);

    _chartInitialized = true;
    _chartData = data;

    width = d3.max([minWidth, el.offsetWidth]);
    height = d3.max([minheight, el.offsetHeight]);

    draw(el);
  };

  const update = (data) => {
    if(!_chartInitialized) return false;
    console.log('CHART: update with new data', data);
    _chartData = data;

    $circle.data([_chartData])
      .transition()
        .duration(animationDuration/2)
        .attr('r', d => Number(d));
  };

  //////////////////////////////////
  // PRIVATE
  function draw(el) {
    console.log('CHART: draw');
    $svg = d3.select(el).append('svg')
      .attr('width', width + (margin.left+margin.right))
      .attr('height', height + (margin.top+margin.bottom));

    $chart = $svg.append('g');
    $chart.attr('transform', `translate(${margin.left}, ${margin.top})`);

    $circle = $chart.selectAll('circle')
      .data([_chartData])
      .enter().append('circle');

    $circle.attr('cx', '50%')
      .attr('cy', '50%')
      .style('fill', 'red')
      .style('cursor', 'pointer')
      .attr('r', d => Number(d));

    $circle.on('click', (e) => {
      let value = d3.select(e.target).data()[0];
      el.dispatchEvent(new CustomEvent('chartEvent', {
        detail: {
          data: value,
        },
      }));
    });
  };

  return {
    init: init,
    update: update,
  };
})();

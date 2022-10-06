import React from 'react'; // get the React object from the react module
import {useEffect, useState} from 'react';
import ChartControls from './ChartControls';
import ChartInnerLegend from './ChartInnerLegend';
import FullScreenButton from './FullScreenButton';

class ChartControlsWrapper extends React.Component {
  constructor(){
    super();
  };

  componentDidMount() {
    console.log('mount')
    drawChart();
  };

  componentDidUpdate(){
    console.log('update')
    updateChart(window.depreciationData2);
  };

  render() {
    return (
      <>
        {/* Chart + Control Panel Wrapper   */}
        <div id="chartControlsWrapper" className="relative w-full flex flex-col xl:ml-3 py-0 xxxpx-2 sm:px-0 md:px-0">


          <ChartControls />

          {/* Chart Height Wrapper */}
          <div id="heightWrapper" className="relative h-80 md:h-96 xl:h-108 mb-6">
            
            <ChartInnerLegend />
            <FullScreenButton />
         
            {/* Chart Itself */}
            <div id="comparablesChart" className="w-full"></div>
          </div>
        </div>
        {/* /End chart area */}
      </>
    )
  }
};

function drawChart(){

  let data = [window.depreciationData,window.depreciationData2];

  // This represents the react component element.
  let element = document.getElementById('comparablesChart');
  // // Initialize the chart. This is how the chart will be
  // // rendered on the page/element with it's initial data set.
  ComparablesChart.init(element, data[0]);

  // This is how we'll transmit data from click events within
  // the chart, back to the react component. Each event will
  // have a custom name, prefixed with 'chartEvent', i.e.
  // 'chartEvent-exportToggle', for when we use the cards in
  // the chart as toggles for what entries to add/remove from
  // data export.
  // Getting data from these events requires using the 'detail'
  // property of the event object.
  element.addEventListener("chartEvent", (event) => {
    console.log('CHART EVENT RECEIVED:', event.detail);
    // do stuff
  });

  let updateLink = document.getElementById('chartUpdateLink');
  if(updateLink){
    updateLink.addEventListener('click', (e) => {

      let currData = Number(e.target.getAttribute('data-dataset')),
          newDataIndex = currData === 0 ? 1 : 0;

      e.target.setAttribute('data-dataset', newDataIndex);
      ComparablesChart.update(data[newDataIndex]);

      e.preventDefault()
    });
  }
}

function updateChart(data){
  ComparablesChart.update(data);
}

export default ChartControlsWrapper;

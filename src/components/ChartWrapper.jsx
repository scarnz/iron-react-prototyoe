import {useEffect, useState} from 'react';
import ChartControls from './ChartControls';

export default function ChartWrapper() {

  useEffect(() => {
    let data = [window.depreciationData, window.depreciationData2];

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
  });

  return (
    <>
      {/* Chart + Control Panel Wrapper   */}
      <div id="chartControlsWrapper" className="relative w-full flex flex-col xl:ml-3 py-0 px-2 sm:px-0 md:px-0">


        <ChartControls />

        {/* Chart Height Wrapper */}
        <div id="heightWrapper" className="relative h-80 md:h-96 xl:h-108 mb-6">
          {/* Inner Legend */}

          <aside className="hidden sm:flex absolute -3/4 top-1 left-3 rounded bg-milk-75">
            <div className="bsolute sm:static flex flex-0 items-center h-8 w-22 sm:mt-0 mr-2 g-red-300">
              <span className="ml-0 text-xs text-gray-600 font-medium leading-tight whitespace-nowrap">Guide Values</span>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 max-w-2xl w-full gap-x-4 px-2">
          
              <div className="flex flex-col flex-col-reverse md:flex-row h-8 items-center">
                <div className="w-16 md:w-12 h-px m-1 border-b-[3px] border-dashed border-sky-300"></div>
                <span className="md:ml-1 text-xs text-bold text-gray-700 leading-tight">Wholesale</span>
              </div>

              <div className="flex flex-col flex-col-reverse md:flex-row h-8 items-center">
                <div className="w-16 md:w-12 h-px m-1 border-b-[3px] border-red-400"></div>
                <span className="md:ml-1 text-xs text-bold text-gray-700 leading-tight whitespace-nowrap">Resale Cash</span>
              </div>

              <div className="flex flex-col flex-col-reverse md:flex-row h-8 items-center">
                <div className="w-16 md:w-12 h-px m-1 border-b-[3px] border-dashed border-amber-400"></div>
                <span className="md:ml-1 text-xs text-bold text-gray-700 leading-tight">Advertised</span>
              </div>

            </div>              
          </aside>
          {/* Chart Itself */}
          <div id="comparablesChart" className="w-full"></div>
        </div>
      </div>
      {/* /End chart area */}
    </>
  )
};
import {useEffect, useState} from 'react';
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
        <aside className="relative w-full flex items-start mt-9 sm:mt-0 mb-1 sm:pr-10 g-amber-400">
          <div className="absolute sm:relative flex flex-0 items-center h-9 -22 -mt-8 sm:mt-0 mr-4 g:mr-6 ml-3">
            <span className="text-xs text-gray-600 font-medium leading-tight sm:whitespace-nowrap">Sold Reports & Listings</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:max-w-2xl w-full gap-x-2 gap-y-2 mb-2">
            
            <div className="flex flex-1 flex-row justify-start items-center order border-slate-200 bg-gray-50 hover:bg-gray-100 rounded shadow">
              <label htmlFor="my-sold-1" className="flex items-center w-full py-2 pl-2 pr-3 space-x-2 text-xs text-gray-700 cursor-pointer">
                <input id="my-sold-1" aria-describedby="my-sold-description" name="my-sold" type="checkbox" className="focus:ring-blue-500 rounded h-5 w-5 text-blue-600 border-gray-300 cursor-pointer"/>

                <div className="text-blue-600 -mt-px">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                  </svg>

                </div>
                <span className="lg:ml-1 text-xs text-bold leading-tight select-none whitespace-nowrap">My Sold</span>
              </label>
            </div>
            
            <div className="flex flex-1 flex-row justify-start items-center order border-slate-200 bg-gray-50 hover:bg-gray-100 rounded shadow">
              <label htmlFor="auction-1" className="flex items-center w-full py-2 pl-2 pr-3 space-x-2 text-xs text-gray-700 cursor-pointer">
                <input id="auction-1" aria-describedby="auction-description" name="auction" type="checkbox" className="focus:ring-blue-500 rounded h-5 w-5 text-blue-600 border-gray-300 cursor-pointer"/>

                <div className="w-[13px] h-[13px] mx-1 border-[3px] border-sky-300"></div>
                <span className="lg:ml-1 text-xs text-bold leading-tight select-none">Auction</span>
              </label>
            </div>

            <div className="flex flex-1 flex-row justify-start items-center order border-slate-200 bg-gray-50 hover:bg-gray-100 rounded shadow">
              <label htmlFor="sold-1" className="flex items-center w-full py-2 pl-2 pr-3 space-x-3 text-xs text-gray-700 cursor-pointer">
                <input id="sold-1" aria-describedby="sold-description" name="sold" type="checkbox" className="focus:ring-blue-500 rounded h-5 w-5 text-blue-600 border-gray-300 cursor-pointer"/>

                <div className="w-3 h-3 mx-1 border-[3px] border-red-400 rotate-45 bg-red-400"></div>
                <span className="lg:ml-1 text-xs text-bold leading-tight select-none">Sold</span>
              </label>
            </div>

            <div className="flex flex-1 flex-row justify-start items-center order border-slate-200 bg-gray-50 hover:bg-gray-100 rounded shadow">
              <label htmlFor="advertised-1" className="flex items-center w-full py-2 pl-2 pr-3 space-x-2 text-xs text-gray-700 cursor-pointer">
                <input id="advertised-1" aria-describedby="advertised-description" name="advertised" type="checkbox" className="focus:ring-blue-500 rounded h-5 w-5 text-blue-600 border-gray-300 cursor-pointer"/>
              
                <div className="w-4 h-4 mx-1 rounded-full border-amber-400 bg-amber-400"></div>
                <span className="lg:ml-1 text-xs text-bold leading-tight select-none">Advertised</span>
              </label>
            </div>

          </div>
        </aside>


        {/* Chart Height Wrapper */}
        <div id="heightWrapper" className="relative h-80 md:h-96 xl:h-108 mb-6 bg-red-100">
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
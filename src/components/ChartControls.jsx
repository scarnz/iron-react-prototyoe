import React from 'react';
import {useEffect, useState} from 'react';
import FullScreenButton from './FullScreenButton';


class ChartControls extends React.Component {
  constructor(props){
    super(props);
  };

	render() {

    return (
      <aside id="ChartControls" className="relative w-full flex items-end md:items-center justify-start mt-11 sm:mt-0 mb-3">
        <div className="absolute top-0 sm:static flex xxxflex-0 items-center h-9 -22 -mt-11 sm:mt-0 mr-2 md:mr-3 ml-1 sm:ml-3 xxxbg-red-100">
          <span className="text-sm sm:text-xs text-gray-600 font-medium xxxtext-center leading-tight md:whitespace-nowrap">Reports & Listings</span>
        </div>

        <div className="grid grid-cols-2 sm:flex sm:grid-cols-4 lg:max-w-2xl w-full gap-x-3 gap-y-2 sm:pr-2 sm:mr-2 sm:border-r lg:border-r-0 xl:border-r 2xl:border-r-0 border-gray-300">
        
          <div className="flex flex-1 flex-row justify-start items-center border xxxborder-slate-200 border-gray-300 xxxbg-gray-50 hover:bg-gray-100 rounded-full overflow-hidden">
            <label htmlFor="my-sold-1" className="flex items-center w-full py-2 pl-2 pr-3 space-x-2 text-xs text-gray-700 cursor-pointer">
              <input id="my-sold-1" aria-describedby="my-sold-description" name="my-sold" type="checkbox" className="focus:ring-blue-500 rounded-full h-5 w-5 text-blue-600 border-gray-300 cursor-pointer"/>

              <div className="text-blue-600 -mt-px">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>

              </div>
              <span className="lg:ml-1 text-xs text-bold leading-tight select-none whitespace-nowrap">My Sold</span>
            </label>
          </div>
          
          <div className="flex flex-1 flex-row justify-start items-center border xxxborder-slate-200 border-gray-300 xxxbg-gray-50 hover:bg-gray-100 rounded-full overflow-hidden">
            <label htmlFor="auction-1" className="flex items-center w-full py-2 pl-2 pr-3 space-x-2 text-xs text-gray-700 cursor-pointer">
              <input id="auction-1" aria-describedby="auction-description" name="auction" type="checkbox" className="focus:ring-blue-500 rounded-full h-5 w-5 text-blue-600 border-gray-300 cursor-pointer"/>

              <div className="w-[13px] h-[13px] mx-1 flex-shrink-0 border-[3px] border-sky-300"></div>
              <span className="lg:ml-1 text-xs text-bold leading-tight select-none">Auction</span>
            </label>
          </div>

          <div className="flex flex-1 flex-row justify-start items-center border xxxborder-slate-200 border-gray-300 xxxbg-gray-50 hover:bg-gray-100 rounded-full overflow-hidden">
            <label htmlFor="sold-1" className="flex items-center w-full py-2 pl-2 pr-3 space-x-3 text-xs text-gray-700 cursor-pointer">
              <input id="sold-1" aria-describedby="sold-description" name="sold" type="checkbox" className="focus:ring-blue-500 rounded-full h-5 w-5 text-blue-600 border-gray-300 cursor-pointer"/>

              <div className="w-3 h-3 mx-1 border-[3px] border-red-400 rotate-45 bg-red-400"></div>
              <span className="lg:ml-1 text-xs text-bold leading-tight select-none">Sold</span>
            </label>
          </div>

          <div className="flex flex-1 flex-row justify-start items-center border xxxborder-slate-200 border-gray-300 xxxbg-gray-50 hover:bg-gray-100 rounded-full overflow-hidden">
            <label htmlFor="advertised-1" className="flex items-center w-full py-2 pl-2 pr-3 space-x-2 text-xs text-gray-700 cursor-pointer">
              <input id="advertised-1" aria-describedby="advertised-description" name="advertised" type="checkbox" className="focus:ring-blue-500 rounded-full h-5 w-5 text-blue-600 border-gray-300 cursor-pointer"/>
            
              <div className="w-4 h-4 mx-1 flex-shrink-0 rounded-full border-amber-400 bg-amber-400"></div>
              <span className="lg:ml-1 text-xs text-bold leading-tight select-none">
                <span className="hidden md:inline-block">Advertised</span>
                <span className="inline-block md:hidden">Advert</span>
              </span>
            </label>
          </div>
        </div>

        <FullScreenButton
          fullScreen={this.props.fullScreen}
          toggleFullscreen={this.props.toggleFullscreen}
        />

      </aside>
    );
	}
}

export default ChartControls;

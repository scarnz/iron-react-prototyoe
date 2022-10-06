import { ArrowsPointingOutIcon } from '@heroicons/react/20/solid';
import { ArrowsPointingInIcon } from '@heroicons/react/20/solid';


import React from 'react';

const FullScreenButton = () => {
  
  	return (
    <button 
	    id="fullScreenToggle" 
	    data-fullscreen="false" 
	    className="position absolute top-[4px] right-[68px] w-9 h-9 md:h-9 ml-auto flex flex-shrink-0 flex-row justify-center items-center border border-slate-200 bg-gray-50 hover:bg-gray-100 rounded hadow"
	    >
      
      <ArrowsPointingOutIcon className="h-5 w-5 text-gray-500"/>
      
      {/*When active, use:
      <ArrowsPointingInIcon className="h-5 w-5 text-gray-500"/>*/}

    </button>  

	);
}

export default FullScreenButton;


// Specs for the full screen function:

// In order to toggle full screen of the chart, these steps:

// 1. On fullscreen button click, toggle data-fullscreen to "true". (Or some equivalent way to keep track of it.) (BA)

// 2. On the a chart wrapper (which one TBD), have an event listener for that data-attribute 
// that changes classNames on the wrapper component. One set of class names when active/true, one set when inactive/false.
// (Checkout the classNameCruncher function in ChartValuesTabs.jsx for a similar example.) (BA)

// 3. Have a listener in the Chart Function so that the chart knows whether it should be in full screen mode. (BA)

// 4. Have one set of sizing and resizing functions for normal mode, and one set for fullscreen mode. (SA)


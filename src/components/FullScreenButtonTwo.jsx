import { ArrowsPointingOutIcon } from '@heroicons/react/20/solid';
import { ArrowsPointingInIcon } from '@heroicons/react/20/solid';


import React from 'react';

class FullScreenButtonTwo extends React.Component {

  render(){

    return (
      <button
        id="fullScreenToggleTwo"
        data-fullscreen="false"
        className="absolute flex-0 sm:static -top-12 right-0 w-10 h-10 ml-auto flex flex-shrink-0 justify-center items-center border xxxborder-slate-200 border-gray-300 bg-white outline:ring-blue-500 focus:ring-blue-500 hover:bg-gray-50 rounded-full"
        >

          {/*When FullScreen active, use:
          <ArrowsPointingInIcon className="h-5 w-5 text-gray-500"/>*/}

          <ArrowsPointingOutIcon className="h-4 w-4 text-gray-500"/>

      </button>
    );
  }
}

export default FullScreenButtonTwo;


// Specs for the full screen function:

// In order to toggle full screen of the chart, these steps:

// 1. On fullscreen button click, toggle data-fullscreen to "true". (Or some equivalent way to keep track of it.) (BA)

// 2. On the a chart wrapper (which one TBD), have an event listener for that data-attribute 
// that changes classNames on the wrapper component. One set of class names when active/true, one set when inactive/false.
// (Checkout the classNameCruncher function in ChartValuesTabs.jsx for a similar example.) (BA)

// 3. Have a listener in the Chart Function so that the chart knows whether it should be in full screen mode. (BA)

// 4. Have one set of sizing and resizing functions for normal mode, and one set for fullscreen mode. (SA)


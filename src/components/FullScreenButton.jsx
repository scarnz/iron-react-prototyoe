import { ArrowsPointingOutIcon } from '@heroicons/react/20/solid';
import { ArrowsPointingInIcon } from '@heroicons/react/20/solid';


import React from 'react';

class FullScreenButton extends React.Component {
  constructor(props){
    super(props);
  };

  render(){
    let icon;
    if(this.props.fullScreen){
      icon = <ArrowsPointingInIcon className="h-5 w-5 text-gray-500"/>;
    } else {
      icon = <ArrowsPointingOutIcon className="h-4 w-4 text-gray-500"/>;
    }

    return (
      <button
        id="fullScreenButton"
        data-fullscreen="false"
        className="absolute sm:static right-0 top-[1.125rem] ml-auto flex-0 w-12 sm:w-10 md:w-12 h-12 sm:h-10 md:h-12 flex flex-shrink-0 justify-center items-center border border-gray-300 bg-white outline:ring-blue-500 focus:ring-blue-500 hover:bg-gray-50 rounded-full"
        onClick={this.props.toggleFullscreen}
      >

        {icon}


      </button>
    );
  }
}

export default FullScreenButton;

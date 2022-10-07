import React from 'react';
import ChartControlsWrapper from './ChartControlsWrapper';
import Filters from './Filters';

class ChartFiltersWrapper extends React.Component {
  render(){
    return (
      <>
        {/*Toggle classes for full screen effect
          absolute
          z-50
        */}
        <div id="chartFiltersWrapper" className="relative bg-white flex flex-col xl:flex-row xl:flex-row-reverse xl:justify-end mx-2 sm:mx-0 mt-[13px]">

  {/*      <div id="chartFiltersWrapper" className="w-full h-full fixed z-40 top-0 pt-2 pr-4 left-0 bottom-0  bg-white flex flex-col xl:flex-row xl:flex-row-reverse xl:justify-end w-full mt-[13px]">
  */}

          <ChartControlsWrapper animate={this.props.animate}/>
          <Filters />

        </div>
        {/* End Chart Filters Wrapper */}

      </>
    );
  }
};

export default ChartFiltersWrapper;

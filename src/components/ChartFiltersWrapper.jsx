import React from 'react';
import ChartControlsWrapper from './ChartControlsWrapper';
import Filters from './Filters';


class ChartFiltersWrapper extends React.Component {


  render(){
    return (
      <>
        <div 
          id="chartFiltersWrapper" 
          className="elative bg-white flex flex-col xl:flex-row xl:flex-row-reverse xl:justify-end mx-2 sm:mx-0 mt-[13px]"

          // Use these classNames:
          // className={classNameCruncher(
          //             this.state.fullScreen
          //               ? 'full-screen'
          //               : '',
          //                 'relative bg-white flex flex-col xl:flex-row xl:flex-row-reverse xl:justify-end mx-2 sm:mx-0 mt-[13px]'
          //           )}


        >

          <ChartControlsWrapper animate={this.props.animate}/>
          <Filters />

        </div>
        {/* End Chart Filters Wrapper */}

      </>
    );
  }
};

export default ChartFiltersWrapper;

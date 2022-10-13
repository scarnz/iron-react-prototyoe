import React from 'react';
import ChartControlsWrapper from './ChartControlsWrapper';
import Filters from './Filters';


class ChartFiltersWrapper extends React.Component {
  constructor(props){
    super(props);
  };

  render(){
    return (
      <div
        id="chartFiltersWrapper"
        className={
          this.props.classNameCruncher(this.props.fullScreen ?
            'full-screen'
            : '',
            'relative bg-white flex flex-col xl:flex-row xl:flex-row-reverse xl:justify-end mx-2 sm:mx-0'
          )
        }
      >

        <ChartControlsWrapper
          animate={this.props.animate}
          fullScreen={this.props.fullScreen}
          toggleFullscreen={this.props.toggleFullscreen}
        />

        <Filters />
      </div>
    );
  }
};

export default ChartFiltersWrapper;

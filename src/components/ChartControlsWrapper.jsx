import React from 'react';
import {useEffect, useState} from 'react';
import ChartControls from './ChartControls';
import ChartInnerLegend from './ChartInnerLegend';
import FullScreenButton from './FullScreenButton';

function classNameCruncher(...classes) {
  return classes.filter(Boolean).join(' ');
}

class ChartControlsWrapper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fullScreen: false,
    };
  };

  componentDidMount() {
    console.log('mount', this.state)
    drawChart(this.props.animate);
  };

  componentDidUpdate(){
    console.log('update', this.state);
    console.log('fullScreen:', this.state.fullScreen)
    // updateChart(window.depreciationData2);
  };

  toggleFullscreen = () => {
    this.setState({
      fullScreen: !this.state.fullScreen
    });
  };

  render() {
    return (
      <>
        {/* Chart + Control Panel Wrapper   */}
        <div
            id="chartControlsWrapper"
            className={classNameCruncher(
                        this.state.fullScreen
                          ? 'full-screen fixed left-0 top-0 pt-3 px-2 z-[1000]'
                          : 'relative xl:ml-3',
                        'bg-white w-full h-full flex flex-col'
                        // The final line of classNames are included for both states. Note for that to work, there can't be any square braces [] around the strings. *Shrugs*
                      )}
        >

          <ChartControls />

          {/* Chart Height Wrapper */}
          <div id="heightWrapper" className="relative h-80 md:h-96 xl:h-108 mb-6">
            
            <ChartInnerLegend />
            <FullScreenButton toggleFullscreen={this.toggleFullscreen}/>
         
            {/* Chart Itself */}
            <div id="comparablesChart" className="w-full"></div>
          </div>
        </div>
        {/* /End chart area */}
      </>
    )
  }
};

function drawChart(animate){

  let data = [window.depreciationData,window.depreciationData2];

  // This represents the react component element.
  let element = document.getElementById('comparablesChart');
  // // Initialize the chart. This is how the chart will be
  // // rendered on the page/element with it's initial data set.
  ComparablesChart.init(element, data[0], animate);

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

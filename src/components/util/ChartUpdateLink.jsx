import React from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/solid';

class ChartUpdateLink extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dataSet: 0,
    }
    this.toggleDataSet = this.toggleDataSet.bind(this);
  }

  componentDidUpdate(){
    let data = [window.depreciationData,window.depreciationData2];
    ComparablesChart.update(data[this.state.dataSet]);
  }

  toggleDataSet = (shouldAnimate) => {
    this.setState({
      dataSet: this.state.dataSet === 0 ? 1 : 0,
    });
  }

  render(){
  	return(

      <button
        href="#"
        id="chartUpdateLink"
        data-dataset="0"
        className="flex justify-center items-center w-8 h-8 bg-red-900 rounded-full"
        onClick={this.toggleDataSet}
      >
        <div className="text-gray-200 w-4 h-4">
          <ArrowPathIcon />
        </div>
      </button>

    );
  }
}

export default ChartUpdateLink;

import React from 'react';
import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import ChartFiltersWrapper from "./ChartFiltersWrapper";
import ValuesTableWrapper from "./ValuesTableWrapper";

const allTheTabsInfo = [
  { name: 'Chart' },
  { name: 'Values Table', count: '6' },
];

function classNameCruncher(...classes) {
  return classes.filter(Boolean).join(' ');
}

class ChartValuesTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: true,
      fullScreen: false,
    };
    this.setAnimate = this.setAnimate.bind(this);
  }

  componentDidUpdate(){
    console.log('fullScreen:', this.state.fullScreen)
  };

  setAnimate = (shouldAnimate) => {
    this.setState({
      animate: shouldAnimate,
    });
  }

  toggleFullscreen = () => {
    this.setState({
      fullScreen: !this.state.fullScreen
    });
  };

  render(){
    return (
      <Tab.Group
        manual={true}
        defaultIndex={0}
        onChange={(index) => {
          console.log('Changed selected tab to:', index);
          this.setAnimate(false)
        }}
      >
        <aside id="comparablesChartValuesTabs" className="flex w-full border-b-[3px] border-blue-900">

          <Tab.List className="flex w-full mx-2 sm:mx-0 space-x-3">
            {allTheTabsInfo.map((myTab) => (

              <Tab as={Fragment} >
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <a
                    // key={myTab.name}
                    className={classNameCruncher(
                      selected
                        ? 'bg-blue-900 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-700',
                      'group outline-0 focus:ring-[3px] ring-inset cursor-pointer whitespace-nowrap rounded-t-md flex w-1/2 sm:w-40 lg:w-48 xl:w-[221px] justify-center pt-4 pb-3 px-1 md:px-1 lg:px-2 xl:px-4 font-medium text-sm md:text-xs lg:text-base'
                    )}
                  >
                    {myTab.name}
                    {myTab.count ? (
                      <span
                        className={classNameCruncher(
                          selected
                            ? 'bg-blue-800 text-white'
                            : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300 group-hover:text-gray-700',
                          'hidden md:flex justify-center items-center ml-3 px-3 rounded-full text-xs font-medium'
                        )}
                      >
                        {myTab.count}
                      </span>
                    ) : null}
                  </a>

                )}
              </Tab>
            ))}

          </Tab.List>
        </aside>

        <Tab.Panels>

          <Tab.Panel>
            <ChartFiltersWrapper
              classNameCruncher={classNameCruncher}
              animate={this.state.animate}
              fullScreen={this.state.fullScreen}
              toggleFullscreen={this.toggleFullscreen}
            />

          </Tab.Panel>

          <Tab.Panel>
            <ValuesTableWrapper />
          </Tab.Panel>

        </Tab.Panels>
      </Tab.Group>
    );
  };
};

export default ChartValuesTabs;

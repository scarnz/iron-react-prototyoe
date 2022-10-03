
import ChartWrapper from './ChartWrapper';
import Filters from './Filters';

export default function ChartFiltersWrapper() {
  return (
    <>
      {/*Toggle classes for full screen effect
        absolute
        z-50
      */}
      <div id="chartFiltersWrapper" data-tab-content="1" className="relative top-0 left-0 bottom-0 w-full h-full bg-white flex flex-col xl:flex-row xl:flex-row-reverse xl:justify-end w-full mt-[13px]">

{/*      <div id="chartFiltersWrapper" className="w-full h-full fixed z-40 top-0 pt-2 pr-4 left-0 bottom-0  bg-white flex flex-col xl:flex-row xl:flex-row-reverse xl:justify-end w-full mt-[13px]">
*/}       

        <ChartWrapper/>
        <Filters />

      </div>
      {/* End Chart Filters Wrapper */}

    </>
  );
}
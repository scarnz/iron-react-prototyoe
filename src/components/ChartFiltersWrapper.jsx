
import ChartWrapper from './ChartWrapper'
import Filters from './Filters'

export default function ChartFiltersWrapper() {
  return (
    <>
      {/*

        Full Screen Toggle:
        Add full-screen class to #comparablesChart
        Resizing is handled by full screen conditional resizing functions in chart function

        STYLES:
        Toggle below classes on chartFiltersWrapper for full screen effect
          fixed
          z-40
          p-2
          mt-0

          Note: chartFiltersWrapper only ever gets padding in full screen mode

        Remove height classes on height wrapper? Can we eliminate height wrapper?

      */}

      <div id="chartFiltersWrapper" className="relative top-0 left-0 bottom-0 min-w-[100px] w-full h-full bg-white flex flex-col xl:flex-row xl:flex-row-reverse xl:justify-end mt-[13px]">
      

{/*      <div id="chartFiltersWrapper" className="fixed z-40 p-2 mt-0 top-0 left-0 bottom-0 w-full h-full bg-white flex flex-col xl:flex-row xl:flex-row-reverse xl:justify-end">
*/}       

        <ChartWrapper/>
        <Filters />
      </div>
      {/* End Chart Filters Wrapper */}

    </>
  );
}
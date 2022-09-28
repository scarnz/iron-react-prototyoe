
import ChartWrapper from './ChartWrapper'
// import Filters from './Filters'

export default function ChartFiltersWrapper() {
  return (
    <>
      <div className="chart-filters-wrapper flex flex-col xl:flex-row xl:flex-row-reverse xl:justify-end w-full mt-[13px]">
        <ChartWrapper/>
        {/*<Filters/>*/}
      </div>
      {/* End Chart Filters Wrapper */}

    </>
  );
}
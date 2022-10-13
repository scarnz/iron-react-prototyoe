export default function ChartInnerLegend() {

	return (

    <aside className="hidden sm:flex absolute -3/4 bottom-[3rem] left-2 rounded bg-milk-75 g-gray-100">
      <div className="bsolute sm:static flex flex-0 items-center h-7 w-22 sm:mt-0 mx-2 g-red-300">
        <span className="ml-0 text-xs text-gray-500 font-medium leading-tight whitespace-nowrap">Guide Values</span>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 max-w-2xl w-full gap-x-4 px-2">
        <div className="flex flex-col flex-col-reverse md:flex-row h-7 items-center">
          <div className="w-16 md:w-12 h-px m-1 border-b-[3px] border-dashed border-sky-300"></div>
          <span className="md:ml-1 text-xs text-bold text-gray-500 leading-tight">Wholesale</span>
        </div>

        <div className="flex flex-col flex-col-reverse md:flex-row h-7 items-center">
          <div className="w-16 md:w-12 h-px m-1 border-b-[3px] border-red-400"></div>
          <span className="md:ml-1 text-xs text-bold text-gray-500 leading-tight whitespace-nowrap">Resale Cash</span>
        </div>

        <div className="flex flex-col flex-col-reverse md:flex-row h-7 items-center">
          <div className="w-16 md:w-12 h-px m-1 border-b-[3px] border-dashed border-amber-400"></div>
          <span className="md:ml-1 text-xs text-bold text-gray-500 leading-tight">Advertised</span>
        </div>
      </div>
    </aside>

	);
}




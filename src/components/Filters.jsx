export default function Filters() {
  return (
    <>

      {/* Filters Panel */}
      <aside id="filtersPanel" className="relative xl:w-84 xl:flex-shrink-0 flex flex-col bg-gray-100 border border-slate-200 border-b-slate-100 rounded-md xl:max-w-[221px] xl:pb-2 mb-6">
          
        <div className="flex-col sm:flex sm:flex-row xl:flex-col justify-between sm:items-center xl:items-start px-3 pt-1 sm:pt-0 xl:pt-2">
          <label htmlFor="" className="flex-shrink-0 mb-2 md:mb-0 xl:mb-0 mr-3 text-sm text-gray-700 font-medium">
            <span>Filters (3)</span> 
            {/* <a href="#" data-dataset="0" id="chartUpdateLink" className="text-xs">Refresh</a> */}
          </label>

          <div id="activeFilters" className="flex flex-wrap items-center w-full gap-x-2 gap-y-2 xl:border-b border-gray-200 mt-2 pb-2 xl:pb-3">
            <span className="flex items-center rounded-full bg-gray-200 border border-blue-200 py-1 pl-4 pr-1 text-xs font-medium text-gray-600">
              <span>200 HP</span>
              <button type="button" className="ml-1 inline-flex items-center justify-center h-6 w-6 flex-shrink-0 rounded-full text-gray-400 hover:bg-white hover:text-gray-500">
                <span className="sr-only">Remove this filter</span>
                <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                  <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                </svg>
              </button>
            </span>

            <span className="flex items-center rounded-full bg-gray-200 border border-blue-200 py-1 pl-4 pr-1 text-xs font-medium text-gray-600">
              <span>Lorem Ipsum</span>
              <button type="button" className="ml-1 inline-flex items-center justify-center h-6 w-6 flex-shrink-0 rounded-full text-gray-400 hover:bg-white hover:text-gray-500">
                <span className="sr-only">Remove this filter</span>
                <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                  <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                </svg>
              </button>
            </span>

            <span className="flex items-center rounded-full bg-gray-200 border border-blue-200 py-1 pl-4 pr-1 text-xs font-medium text-gray-600">
              <span>Lorem Ipsum</span>
              <button type="button" className="ml-1 inline-flex items-center justify-center h-6 w-6 flex-shrink-0 rounded-full text-gray-400 hover:bg-white hover:text-gray-500">
                <span className="sr-only">Remove this filter</span>
                <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                  <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                </svg>
              </button>
            </span>
          </div>


          <button type="button" className="absolute top-0 right-0 sm:static inline-flex flex-shrink-0 xl:hidden  ml-auto items-center rounded-md order order-gray-300 g-white px-2 sm:px-2 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <span className="text-xs mr-2 text-gray-700 font-medium tracking-wide">Show/Hide Filters</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 rotate-180">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>

        </div>

        <div className="idden all-filters-wrapper h-full pt-2 px-3 md:border-t md:border-gray-200 xl:border-t-0">
          <div className="flex flex-col md:flex-row xl:flex-col py-1 space-y-3 md:space-y-0 md:space-x-3 xl:space-x-0 xl:space-y-3">

            <div className="single-filter-wrapper basis-full">
              <label htmlFor="combobox" className="block text-xs font-medium text-gray-600">Options</label>
              <div className="relative mt-1">
                <input id="combobox" type="text" placeholder="Enter option" className="w-full rounded order border-slate-200 bg-gray-50 py-2 pl-3 pr-12 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm" role="combobox" aria-controls="options" aria-expanded="false" />
                <button type="button" className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                  {/* Heroicon name: mini/chevron-up-down */}
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              <div className="flex py-2 items-center">
                <input id="option-text-1" aria-describedby="option-text-only-description" name="option-text-only" type="checkbox" className="focus:ring-blue-500 rounded h-5 w-5 text-blue-600 border-gray-300 cursor-pointer" />
                <label htmlFor="option-text-1" className="pl-3 text-xs text-gray-700 cursor-pointer select-none leading-tight whitespace-nowrap">Must have Option Text</label>

              </div>
            </div>

            <div className="single-filter-wrapper basis-full">
              <label htmlFor="combobox" className="block text-xs font-medium text-gray-600">Date Range</label>
              <div className="relative mt-1">
                <input id="combobox" type="text" placeholder="Set date" className="w-full rounded order border-slate-200 bg-gray-50 py-2 pl-3 pr-12 hadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm" role="combobox" aria-controls="options" aria-expanded="false" />
                <button type="button" className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                  {/* Heroicon name: mini/chevron-up-down */}
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="single-filter-wrapper basis-full">
              <label htmlFor="combobox" className="block text-xs font-medium text-gray-600">Size</label>
              <div className="relative mt-1">
                <input id="combobox" type="text" placeholder="Set size" className="w-full rounded order border-slate-200 bg-gray-50 py-2 pl-3 pr-12 hadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm" role="combobox" aria-controls="options" aria-expanded="false" />
                <button type="button" className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                  {/* Heroicon name: mini/chevron-up-down */}
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" />
                  </svg>
                </button>

                <ul className="hidden absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded bg-slate-200 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" id="options" role="listbox">
                  {/*
                    Combobox option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

                    Active: "text-white bg-blue-600", Not Active: "text-gray-900"
                  */}
                  <li className="relative cursor-default select-none py-2 pl-8 pr-4 text-gray-900" id="option-0" role="option" tabIndex="-1">
                    {/* Selected: "font-semibold" */}
                    <span className="block truncate font-semibold">200 HP</span>

                    {/*
                      Checkmark, only display htmlFor selected option.

                      Active: "text-white", Not Active: "text-blue-600"
                    */}
                    <span className="absolute inset-y-0 left-0 flex items-center pl-1.5 text-blue-600">
                      {/* Heroicon name: mini/check */}
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </li>

                  <li className="relative cursor-default select-none py-2 pl-8 pr-4 text-gray-900" id="option-1" role="option" tabIndex="-1">
                    {/* Selected: "font-semibold" */}
                    <span className="block truncate">400 HP</span>

                    {/*
                      Checkmark, only display htmlFor selected option.

                      Active: "text-white", Not Active: "text-blue-600"
                    */}
                    <span className="absolute inset-y-0 left-0 flex items-center pl-1.5 text-blue-600">
                      {/* Heroicon name: mini/check */}
                      {/* <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg> */}
                    </span>
                  </li>
                  {/* More items... */}
                </ul>
              </div>
            </div>


            <div className="single-filter-wrapper basis-full">
              <label htmlFor="location" className="block text-xs font-medium text-gray-700">Region</label>
              <select id="location" name="location" className="mt-1 block w-full rounded bg-gray-50 border-slate-200 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm">
                <option>Select Region</option>
                <option defaultValue>Canada</option>
                <option >US</option>
              </select>
            </div>

            <div className="single-filter-wrapper basis-full">
              <label htmlFor="location" className="block text-xs font-medium text-gray-700">Lorem</label>
              <select id="location" name="location" className="mt-1 block w-full rounded bg-gray-50 border-slate-200 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm">
                <option>Select Lorem</option>
                <option defaultValue>Lorem 1</option>
                <option >Lorem 2</option>
              </select>
            </div>

          </div>
        </div>
      </aside>
      {/* End Filters */}

    </>
  );
} 
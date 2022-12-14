export default function ChartValueTabs() {
  return (
    <>
      <aside className="tab-navigation-wrapper flex w-full border-b-[3px] border-blue-900">

        {/* Dropdown menu on mobile screens */}
        {/* <div className="sm:hidden ml-2 mb-2">
          <label htmlFor="current-tab" className="sr-only">Select a tab</label>
          <select id="current-tab" name="current-tab" className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
            <option defaultValue>Chart</option>
            <option>Values Table</option>
          </select>
        </div> */}

        {/* Tabs at small breakpoint and up */}
        <div className="idden sm: block w-full mx-2 sm:mx-0">
          <nav className="flex space-x-3">
            {/*} Current: "border-blue-900 text-blue-900", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}

            <a href="#" className="flex w-1/2 sm:w-40 lg:w-48 xl:w-[221px] justify-center bg-blue-900 border-blue-900 text-white whitespace-nowrap pt-4 pb-3 px-10 border-b-2 rounded-t-md font-medium text-base" aria-current="page">Chart</a>

            <a href="#" className="flex w-1/2 sm:w-40 lg:w-48 xl:w-[221px] justify-center bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-600 rounded-t-md whitespace-nowrap pt-4 pb-3 px-10 font-medium text-base">Values Table</a>

          </nav>
        </div>
      </aside>
    </>
  );
} 
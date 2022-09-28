export default function ComparablesTabs() {
  return (
    <>
      <aside id="" className="tab-navigation-wrapper flex w-full border-b-[3px] border-blue-900 mb-2">

          {/* Dropdown menu on small screens */}
          <div className="sm:hidden mx-auto mb-2">
            <label htmlFor="current-tab" className="sr-only">Select a tab</label>
            <select id="current-tab" name="current-tab" className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
              <option>Auction</option>
              <option>Sold</option>
              <option>My Sold</option>
              <option>Advertised</option>
              <option defaultValue>My Saved Comparables</option>
            </select>
          </div>

          {/* Tabs at small breakpoint and up */}
          <div className="hidden sm:block w-full">
            <nav className="flex space-x-3 md:space-x-2 lg:space-x-3 max-w-6xl">

              <a href="#" className="flex flex-1 justify-center bg-blue-200 hover:bg-blue-300 text-gray-600 rounded-t-md hover:text-gray-700 whitespace-nowrap pt-4 pb-3 px-3 md:px-2 lg:px-6 xl:px-10 font-medium text-sm md:text-xs lg:text-base">My Sold (1)</a>

              <a href="#" className="flex flex-1 justify-center bg-blue-200 hover:bg-blue-300 text-gray-600 rounded-t-md hover:text-gray-700 whitespace-nowrap pt-4 pb-3 px-3 md:px-2 lg:px-6 xl:px-10 font-medium text-sm md:text-xs lg:text-base">Sold (1)</a>

              <a href="#" className="flex flex-1 justify-center bg-blue-200 hover:bg-blue-300 text-gray-600 rounded-t-md hover:text-gray-700 whitespace-nowrap pt-4 pb-3 px-3 md:px-2 lg:px-6 xl:px-10 font-medium text-sm md:text-xs lg:text-base">Auction (1)</a>

              <a href="#" className="flex flex-1 justify-center bg-blue-200 hover:bg-blue-300 text-gray-600 rounded-t-md hover:text-gray-700 whitespace-nowrap pt-4 pb-3 px-3 md:px-2 lg:px-6 xl:px-10 font-medium text-sm md:text-xs lg:text-base">Advertised (1)</a>

              <a href="#" className="flex flex-1 justify-center bg-blue-900 border-blue-900 text-white whitespace-nowrap pt-4 pb-3 px-3 md:px-2 lg:px-6 xl:px-10 border-b-2 rounded-t-md font-medium text-sm md:text-xs lg:text-base" aria-current="page">My Comparables (4)</a>

            </nav>
          </div>

      </aside>
    </>
  );
}
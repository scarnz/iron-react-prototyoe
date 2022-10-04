import ComparablesViewAsMenu from './ComparablesViewAsMenu';

import ComparablesCardSortMenu from './ComparablesCardSortMenu';

export default function ComparablesCardSelectSort() {
  return (
    <>

      {/* Select and Sort*/}
      <aside id="" className="flex px-3 order-y border-gray-200 items-center mb-2">

        <button type="button" className="flex items-center rounded-md border border-gray-300 bg-white px-2 sm:px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mr-3">
          <span className="text-xs">Select All</span>
        </button>

        <button type="button" className="flex items-center rounded-md border border-gray-300 bg-white px-2 sm:px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <span className="text-xs">Unselect All</span>
        </button>

        <div className="col-start-1 row-start-1 py-4 ml-auto">
          <div className="mx-auto flex max-w-7xl justify-end space-x-3 px-4 sm:px-6 lg:px-8">
            <ComparablesViewAsMenu />
            <ComparablesCardSortMenu />
          </div>
        </div>
      </aside>

    </>
  );
} 

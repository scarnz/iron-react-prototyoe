import { CheckCircleIcon, XMarkIcon, ArrowPathIcon } from '@heroicons/react/20/solid';

import ComparablesViewAsMenu from './ComparablesViewAsMenu';

import ComparablesCardSortMenu from './ComparablesCardSortMenu';

export default function ComparablesCardSelectSort() {
  return (
    <>

      {/* Select and Sort*/}
      <aside id="" className="grid grid-cols-6 grid-rows-2 sm:grid-cols-5 sm:grid-rows-1 md:flex m-3 w-auto gap-3">
        {/*<div className="bg-red-200">div</div>

        <div className="bg-red-200">div</div>

        <div className="bg-red-200">div</div>

        <div className="bg-red-200">div</div>*/}


        <button type="button" className="col-span-3 sm:col-span-1 flex justify-center items-center rounded-full border border-gray-300 bg-white px-2 sm:px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <span className="text-xs">Select All</span>
        </button>

        <button type="button" className="col-span-3 sm:col-span-1 flex justify-center items-center rounded-full border border-gray-300 bg-white px-2 sm:px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <span className="text-xs">Unselect All</span>
        </button>




        <button type="button" className="col-span-2 sm:col-span-1 inline-flex justify-center items-center rounded-full border border-gray-300 bg-white pl-2 pr-4 space-x-2 md:space-x-1 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <ArrowPathIcon className="h-5 w-5 text-gray-400" />
          <span className="text-xs">Refresh</span>
        </button>

        <ComparablesViewAsMenu />
        <ComparablesCardSortMenu />
      </aside>

    </>
  );
} 

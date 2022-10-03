export default function CardSelectSort() {
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
          <div className="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
            <div className="relative inline-block">
              <div className="flex">
                <button type="button" className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                  Sort by
                  {/* Heroicon name: mini/chevron-down */}
                  <svg className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/*
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              */}

              {/*
                Active: "bg-gray-100", Not Active: ""

                Selected: "font-medium text-gray-900", Not Selected: "text-gray-500"
              */}

              <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                <div className="py-1" role="none">
                  <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Listing Type</a>

                  <a href="#" className="font-medium text-gray-900 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Price</a>

                  <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Usage</a>

                  <a href="#" className="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Distance</a>
                </div>
              </div> 
            </div>
          </div>
        </div>

      </aside>

    </>
  );
} 

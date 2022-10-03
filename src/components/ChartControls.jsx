import { ArrowsPointingOutIcon } from '@heroicons/react/20/solid';
import { ArrowsPointingInIcon } from '@heroicons/react/20/solid';

export default function ChartControls() {

	return (

    <aside id="ChartControls" className="relative w-full flex items-center justify-start mt-9 sm:mt-0 mb-3">
      <div className="absolute sm:relative flex flex-0 items-center h-9 -22 -mt-8 sm:mt-0 mr-4 g:mr-6 ml-3">
        <span className="text-xs text-gray-600 font-medium leading-tight sm:whitespace-nowrap">Reports & Listings</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:max-w-2xl w-full gap-x-3 gap-y-2 mr-3">
      
        <div className="flex flex-1 flex-row justify-start items-center border border-slate-200 bg-gray-50 hover:bg-gray-100 rounded hadow">
          <label htmlFor="my-sold-1" className="flex items-center w-full py-2 pl-2 pr-3 space-x-2 text-xs text-gray-700 cursor-pointer">
            <input id="my-sold-1" aria-describedby="my-sold-description" name="my-sold" type="checkbox" className="focus:ring-blue-500 rounded h-5 w-5 text-blue-600 border-gray-300 cursor-pointer"/>

            <div className="text-blue-600 -mt-px">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
              </svg>

            </div>
            <span className="lg:ml-1 text-xs text-bold leading-tight select-none whitespace-nowrap">My Sold</span>
          </label>
        </div>
        
        <div className="flex flex-1 flex-row justify-start items-center border border-slate-200 bg-gray-50 hover:bg-gray-100 rounded hadow">
          <label htmlFor="auction-1" className="flex items-center w-full py-2 pl-2 pr-3 space-x-2 text-xs text-gray-700 cursor-pointer">
            <input id="auction-1" aria-describedby="auction-description" name="auction" type="checkbox" className="focus:ring-blue-500 rounded h-5 w-5 text-blue-600 border-gray-300 cursor-pointer"/>

            <div className="w-[13px] h-[13px] mx-1 border-[3px] border-sky-300"></div>
            <span className="lg:ml-1 text-xs text-bold leading-tight select-none">Auction</span>
          </label>
        </div>

        <div className="flex flex-1 flex-row justify-start items-center border border-slate-200 bg-gray-50 hover:bg-gray-100 rounded hadow">
          <label htmlFor="sold-1" className="flex items-center w-full py-2 pl-2 pr-3 space-x-3 text-xs text-gray-700 cursor-pointer">
            <input id="sold-1" aria-describedby="sold-description" name="sold" type="checkbox" className="focus:ring-blue-500 rounded h-5 w-5 text-blue-600 border-gray-300 cursor-pointer"/>

            <div className="w-3 h-3 mx-1 border-[3px] border-red-400 rotate-45 bg-red-400"></div>
            <span className="lg:ml-1 text-xs text-bold leading-tight select-none">Sold</span>
          </label>
        </div>

        <div className="flex flex-1 flex-row justify-start items-center border border-slate-200 bg-gray-50 hover:bg-gray-100 rounded hadow">
          <label htmlFor="advertised-1" className="flex items-center w-full py-2 pl-2 pr-3 space-x-2 text-xs text-gray-700 cursor-pointer">
            <input id="advertised-1" aria-describedby="advertised-description" name="advertised" type="checkbox" className="focus:ring-blue-500 rounded h-5 w-5 text-blue-600 border-gray-300 cursor-pointer"/>
          
            <div className="w-4 h-4 mx-1 flex-shrink-0 rounded-full border-amber-400 bg-amber-400"></div>
            <span className="lg:ml-1 text-xs text-bold leading-tight select-none">Advertised</span>
          </label>
        </div>
      </div>

      <button id="fullScreenToggle" className="w-9 h-full md:h-9 ml-auto flex flex-shrink-0 flex-row justify-center items-center border border-slate-200 bg-gray-50 hover:bg-gray-100 rounded hadow">
        <ArrowsPointingOutIcon className="h-5 w-5 text-gray-500"/>
        {/*When active, use:
        <ArrowsPointingInIcon className="h-5 w-5 text-gray-500"/>*/}

      </button>  

    </aside>

	)
};
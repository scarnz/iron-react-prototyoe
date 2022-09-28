export default function ComparablesCardContent() {
  return (
    <>
      <div className="w-full flex flex-col px-4 pt-2 mb-3 space-y-1">
        <h3 className="text-gray-900 text-sm font-medium">S670 John Deere Combine</h3>

        <p className="mt-1 font-bold text-gray-800 text-lg">C$230,440</p>

        <div className="flex justify-start">
          <p className="font-bold text-xs text-gray-700">Sep Hrs:</p>
          <p className="pl-2 text-xs">3200</p>
        </div>

        <div className="flex justify-start">
          <p className="font-bold text-xs text-gray-700">Region:</p>
          <p className="pl-2 text-xs">North Central US</p>
        </div>

        <div className="flex justify-start">
          <p className="font-bold text-xs text-gray-700">Date:</p>
          <p className="pl-2 text-xs">Jul 23, 2021</p>
        </div>

        <div className="flex justify-start">
          <div id="item-1-details-wrapper cursor-pointer" className="text-xs relative">
            <p className="block h-4 max-w-max overflow-hidden whitespace-pre-wrap pr-4"><span id="item-1-details" className="font-bold text-xs text-gray-700">Details:</span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita inventore vel, quos qui cupiditate ullam nihil aspernatur optio pariatur explicabo accusantium. Officiis tempore nemo possimus quos odio debitis, beatae dolore.</p>
            
            <button type="button" className="absolute -right-4 -bottom-3 flex items-center justify-center h-7 w-7 flex-shrink-0 rounded-tl-md rounded-br-md text-gray-500 bg-gray-100 hover:bg-gray-200 hover:text-gray-700">
              <span className="sr-only">Show details</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="otate-180 w-5 h-5">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
} 
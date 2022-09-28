export default function EquipSummary() {
  return (
    <>
      {/* Equipment Summary */}
      <section id="equipmentSummary" className="relative flex flex-col pt-6 pb-2 2xl:pb-4 px-2 sm:px-4 md:px-4 lg:px-8 bg-blue-50 2xl:sticky 2xl:top-8 2xl:z-40 l:shadow border-b border-blue-100">
        
        <div className="flex justify-between items-center w-full g-red-100">
          <span className="text-xl sm:text-2xl font-semibold mb-1 text-slate-500">S670 John Deere Combine 2016</span>
          
          <button type="button" className="hidden sm:inline-flex items-center rounded-md px-2 sm:px-2 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <span className="mr-2 text-xs text-right font-medium text-gray-700 tracking-wide">Show Appraisal Details</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="flex justify-start items-center w-full gap-x-2">

          <div className="relative flex flex-col pr-2">
            <p className="text-xs font-medium text-gray-500">Usage</p>
            <p className="truncate text-lg font-medium text-gray-500">
              1310 hrs
            </p>
          </div>

          {/* <div className="hidden sm:block self-stretch relative rounded border border-gray-200 bg-gray-50 px-2 py-[2px] hadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:border-gray-300">
            <a href="#" className="focus:outline-none flex items-end text-gray-400">
              <span className="absolute inset-0" aria-hidden="true"></span>
              <span className="flex flex-col items-end">
                <p className="text-xs font-medium text-gray-500">Trade Notes</p>
                
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mb-[2px] ml-1">
                <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
              </svg>
              </span>

            </a>
          </div> */}


          <div className="relative rounded border border-transparent px-2 py-[2px] focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:border-gray-300 hover:bg-white hover:border-sky-100">
            <a href="#" title="Edit Net Trade-in" className="focus:outline-none flex items-end text-gray-400">
              <span className="absolute inset-0" aria-hidden="true"></span>
              <span className="flex flex-col">
                <p className="text-xs font-medium text-gray-500">Net Trade-in</p>
                <p className="truncate text-lg font-medium text-gray-500">
                  $198,220
                </p>
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mb-1 ml-1">
                <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
              </svg>
            </a>
          </div>

          <div className="relative rounded px-2">
              <span className="flex flex-col">
                <p className="text-xs font-medium text-slate-500">Cash Value</p>
                <p className="truncate text-lg font-medium text-gray-500">
                  $247,760
                </p>
                
              </span>
          </div>


      {/*           <div className="absolute top-1 right-1 flex flex-1 justify-center items-center sm:hidden relative rounded border border-gray-200 bg-gray-50 px-2 py-[2px] hadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:border-gray-300">
            <a href="#" className="focus:outline-none text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
              </svg>
            </a>
          </div> */}

          <button type="button" className="ml-auto hidden sm:inline-flex items-center rounded-md px-2 sm:px-2 py-2 hadow-sm border border-transparent hover:border-gray-300 over:bg-gray-50 over:underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <span className="mr-2 text-xs text-right font-medium text-gray-700 tracking-wide">Show Specs & Options</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>

        </div>

      </section>

    </>
  );
}

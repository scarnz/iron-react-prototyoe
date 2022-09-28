export default function Header() {
  return (
    <>
      <header className="relative flex items-center px-2 sm:px-0 py-4 sm:py-4 lg:py-6">
        <div className="flex items-center justify-center w-10 lg:w-12 h-10 lg:h-12 rounded-full bg-blue-700 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
            <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
          </svg>
        </div>

        <h3 className="mx-4 lg:mx-4 text-xl md:text-2xl lg:text-4xl font-bold leading-6 text-blue-700">Comparables</h3>

        <div className="ml-auto flex">
          <button type="button" className="inline-flex items-center rounded-md order border-red-300 bg-white px-2 sm:px-2 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        <span className="mr-2 text-xs text-right font-medium text-gray-700 tracking-wide">Show Instructions</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
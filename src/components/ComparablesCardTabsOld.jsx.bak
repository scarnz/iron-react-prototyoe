const tabs = [
  { name: 'My Sold', href: '#', count: '1', current: false },
  { name: 'Sold', href: '#', count: '1', current: false },
  { name: 'Auction', href: '#', count: '1', current: false },
  { name: 'Advertised', href: '#', count: '1', current: false },
  { name: 'My Comparables', href: '#', count: '4', current: true }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ComparablesCardTabs() {
  return (
    <aside id="comparablesCardTabs" className="flex w-full border-b-[3px] border-blue-900 mb-2">

      {/* Dropdown menu on mobile screens */}
      <div className="sm:hidden mx-auto mb-2">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>

      {/* Tabs at small breakpoint and up */}
      <div className="hidden sm:block w-full">
        <nav className="flex space-x-3 md:space-x-2 lg:space-x-3 max-w-6xl" aria-label="Tabs">
          {tabs.map((tab) => (
            <a
              key={tab.name}
              href="#"
              className={classNames(
                tab.current
                  ? 'bg-blue-900 border-blue-900 text-white border-b-2 rounded-t-md'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-t-md hover:text-gray-700',
                'group whitespace-nowrap flex flex-1 justify-center pt-4 pb-3 px-1 md:px-1 lg:px-2 xl:px-4 font-medium text-sm md:text-xs lg:text-base'
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              {tab.name}
              {tab.count ? (
                <span
                  className={classNames(
                    tab.current 
                      ? 'bg-blue-800 text-white' 
                      : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300 group-hover:text-gray-700',
                    'hidden md:flex justify-center items-center ml-3 px-3 rounded-full text-xs font-medium'
                  )}
                >
                  {tab.count}
                </span>
              ) : null}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
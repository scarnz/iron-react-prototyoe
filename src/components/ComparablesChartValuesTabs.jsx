import { Fragment } from 'react'

const allTheTabs = [
  { name: 'Chart', href: '#', current: true },
  { name: 'Values Table', href: '#', count: '4', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ComparablesChartValuesTabs() {
  return (
    <aside id="comparablesChartValuesTabs" className="flex w-full border-b-[3px] border-blue-900">

      {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}

      {/* Tabs at small breakpoint and up */}
      <div className="block w-full mx-2 sm:mx-0">
        <nav className="flex space-x-3" aria-label="Tabs">
          {allTheTabs.map((myTab) => (
            <a
              key={myTab.name}
              href="#"
              className={classNames(
                myTab.current
                  ? 'bg-blue-900 border-blue-900 text-white border-b-2 rounded-t-md'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-t-md hover:text-gray-700',
                'group whitespace-nowrap flex w-1/2 sm:w-40 lg:w-48 xl:w-[221px] justify-center pt-4 pb-3 px-1 md:px-1 lg:px-2 xl:px-4 font-medium text-sm md:text-xs lg:text-base'
              )}
              aria-current={myTab.current ? 'page' : undefined}
            >
              {myTab.name}
              {myTab.count ? (
                <span
                  className={classNames(
                    myTab.current 
                      ? 'bg-blue-800 text-white' 
                      : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300 group-hover:text-gray-700',
                    'hidden md:flex justify-center items-center ml-3 px-3 rounded-full text-xs font-medium'
                  )}
                >
                  {myTab.count}
                </span>
              ) : null}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
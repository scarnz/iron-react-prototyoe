// Based on HeadlessUI Tabs component
// See API here: https://headlessui.com/react/tabs#component-api

import { Fragment } from 'react';
import { Tab } from '@headlessui/react';

import ComparablesCardSelectSort from "./ComparablesCardSelectSort";
import ComparablesCardMySold from './ComparablesCardMySold';
import ComparablesCardSold from './ComparablesCardSold';
import ComparablesCardAuction from './ComparablesCardAuction';
import ComparablesCardAdvertised from './ComparablesCardAdvertised';


const allTheTabsInfo = [
  { name: 'My Sold', href: '#', count: '5' },
  { name: 'Auction', href: '#', count: '8' },
  { name: 'Sold', href: '#', count: '26' },
  { name: 'Advertised', href: '#', count: '32' },
  { name: 'My Comparables', href: '#', count: '4' }
]

function classNameCruncher(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ComparablesCardTabs() {
  return (
    <Tab.Group
      manual={true}
      defaultIndex={0}
      onChange={(index) => {
        console.log('Changed selected tab to:', index)
      }}
    >
      <aside id="comparablesCardTabs" className="hidden sm:flex w-full border-b-[3px] border-blue-900">

        <Tab.List className="flex w-full mx-2 sm:mx-0 space-x-3">
          {allTheTabsInfo.map((myTab) => (
            
            <Tab as={Fragment} >
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <a
                  // key={myTab.name}
                  className={classNameCruncher(
                    selected 
                      ? 'bg-blue-900 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-700',
                    'group outline-0 focus:ring-[3px] ring-inset cursor-pointer whitespace-nowrap rounded-t-md flex w-1/2 sm:w-40 lg:w-48 xl:w-[221px] justify-center pt-4 pb-3 px-1 md:px-1 lg:px-2 xl:px-4 font-medium text-sm md:text-xs lg:text-base'
                  )}
                >
                  {myTab.name}
                  {myTab.count ? (
                    <span
                      className={classNameCruncher(
                        selected 
                          ? 'bg-blue-800 text-white' 
                          : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300 group-hover:text-gray-700',
                        'hidden md:flex justify-center items-center ml-3 px-3 rounded-full text-xs font-medium'
                      )}
                    >
                      {myTab.count}
                    </span>
                  ) : null}
                </a>

              )}
            </Tab>
          ))}

        </Tab.List>
      </aside>

			<ComparablesCardSelectSort />

      <Tab.Panels className="tabs-panels">

        <Tab.Panel 
	        as={'ul'}
	        className="grid grid-cols-1 gap-4 list-none sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-3 sm:px-0 mb-24"
	        >
	       
	        {
				    Array.from({length: 5})
				        .map((_, index) => (
			            <ComparablesCardMySold key={index} />
				        )
				    )
					}
        </Tab.Panel>

        <Tab.Panel 
	        as={'ul'}
	        className="grid grid-cols-1 gap-4 list-none sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-3 sm:px-0 mb-24"
	        >
	       
	        {
				    Array.from({length: 8})
				        .map((_, index) => (
			            <ComparablesCardAuction key={index} />
				        )
				    )
					}
        </Tab.Panel>

        <Tab.Panel 
	        as={'ul'}
	        className="grid grid-cols-1 gap-4 list-none sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-3 sm:px-0 mb-24"
	        >
	       
	        {
				    Array.from({length: 26})
				        .map((_, index) => (
			            <ComparablesCardSold key={index} />
				        )
				    )
					}
        </Tab.Panel>

        <Tab.Panel 
	        as={'ul'}
	        className="grid grid-cols-1 gap-4 list-none sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-3 sm:px-0 mb-24"
	        >
	       
	        {
				    Array.from({length: 32})
				        .map((_, index) => (
			            <ComparablesCardAdvertised key={index} />
				        )
				    )
					}
        </Tab.Panel>

        <Tab.Panel 
	        as={'ul'}
	        className="grid grid-cols-1 gap-4 list-none sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-3 sm:px-0 mb-24"
	        >
					<ComparablesCardSold />
					<ComparablesCardAuction />
					<ComparablesCardMySold />
					<ComparablesCardAdvertised />

        </Tab.Panel>



      </Tab.Panels>



    </Tab.Group>
  );
}




























export default function ValuesTableWrapper() {

	return (
		<div className="px-8 sm:px-0 sm:pt-3 pb-8 sm:pb-3 mb-8 border-b-[3px] border-blue-900">
			
			{/*ValuesTable*/}
		  <div className="py-0 sm:py-0 sm:grid sm:grid-cols-5 space-y-8 sm:space-y-0">
		    <dl className="flex flex-col hidden sm:flex">
		      <dt className="flex py-2 pl-6 bg-gray-100 text-sm font-bold text-gray-800 border-r border-b border-gray-400 whitespace-nowrap">
			      Selected Items
		      </dt>

		      <dd className="py-2 pl-6 text-sm font-medium text-gray-500 border-r border-gray-400">High</dd>
		      <dd className="bg-gray-100 py-2 pl-6 text-sm font-medium text-gray-500 border-r border-gray-400">Average</dd>
		      <dd className="py-2 pl-6 text-sm font-medium text-gray-500 border-r border-gray-400">Low</dd>
		    </dl>


		    <dl className="flex flex-col border sm:border-0 rounded sm:rounded-none shadow sm:shadow-none">
		      <dt className="grid grid-cols-2 justify-items-start text-right py-2 pl-6 bg-blue-100 text-sm font-bold border-b border-gray-400 text-gray-800 whitespace-nowrap">
			     <span className="block w-full text-right">My Sold</span> 
			      <span className="bg-white text-gray-600 group-hover:bg-gray-300 group-hover:text-gray-700 hidden md:flex justify-center items-center ml-3 px-3 rounded-full text-xs font-medium">3</span>
		      </dt>

		      <dd className="grid grid-cols-2 py-2 px-6 text-sm font-medium text-gray-500">
			      <span className="sm:hidden font-sans mr-6">High</span>
			      <span className="value font-mono text-right">$200,000</span>
		      </dd>

		      <dd className="grid grid-cols-2 bg-gray-100 py-2 px-6 text-sm font-medium text-gray-500">
			      <span className="sm:hidden font-sans mr-6">Average</span>
			      <span className="value font-mono text-right">$125,000</span>
		      </dd>
		      
		      <dd className="grid grid-cols-2 py-2 px-6 text-sm font-medium text-gray-500">
			      <span className="sm:hidden font-sans mr-6">Low</span>
			      <span className="value font-mono text-right">$50,000</span>
		      </dd>
		    </dl>


		    <dl className="flex flex-col border sm:border-0 rounded sm:rounded-none shadow sm:shadow-none">
		      <dt className="grid grid-cols-2 justify-items-start text-right py-2 pl-6 bg-sky-100 text-sm font-bold border-b border-gray-400 text-gray-800 whitespace-nowrap">
			     <span className="block w-full text-right">Auction</span> 
{/*			      <span className="bg-white text-gray-600 group-hover:bg-gray-300 group-hover:text-gray-700 hidden md:flex justify-center items-center ml-3 px-3 rounded-full text-xs font-medium">1</span>
*/}		      </dt>

		      <dd className="grid grid-cols-2 py-2 px-6 text-sm font-medium text-gray-500">
			      <span className="sm:hidden font-sans mr-6">High</span>
			      <span className="value font-mono text-right">--</span>
		      </dd>
		      <dd className="grid grid-cols-2 bg-gray-100 py-2 px-6 text-sm font-medium text-gray-500">
			      <span className="sm:hidden font-sans mr-6">Average</span>
			      <span className="value font-mono text-right">--</span>
		      </dd>
		      
		      <dd className="grid grid-cols-2 py-2 px-6 text-sm font-medium text-gray-500">
			      <span className="sm:hidden font-sans mr-6">Low</span>
			      <span className="value font-mono text-right">--</span>
		      </dd>
		    </dl>


		    <dl className="flex flex-col border sm:border-0 rounded sm:rounded-none shadow sm:shadow-none">
		      <dt className="grid grid-cols-2 justify-items-start text-right py-2 pl-6 bg-red-100 text-sm font-bold border-b border-gray-400 text-gray-800 whitespace-nowrap">
		      	<span className="block w-full text-right">Sold</span>
{/*			      <span className="bg-white text-gray-600 group-hover:bg-gray-300 group-hover:text-gray-700 hidden md:flex justify-center items-center ml-3 px-3 rounded-full text-xs font-medium">1</span>
*/}		      </dt>

		      <dd className="grid grid-cols-2 py-2 px-6 text-sm font-medium text-gray-500">
			      <span className="sm:hidden font-sans mr-6">High</span>
			      <span className="value font-mono text-right">--</span>
		      </dd>
		      <dd className="grid grid-cols-2 bg-gray-100 py-2 px-6 text-sm font-medium text-gray-500">
			      <span className="sm:hidden font-sans mr-6">Average</span>
			      <span className="value font-mono text-right">--</span>
		      </dd>
		      
		      <dd className="grid grid-cols-2 py-2 px-6 text-sm font-medium text-gray-500">
			      <span className="sm:hidden font-sans mr-6">Low</span>
			      <span className="value font-mono text-right">--</span>
		      </dd>
		    </dl>


		    <dl className="flex flex-col border sm:border-0 rounded sm:rounded-none shadow sm:shadow-none">
		      <dt className="grid grid-cols-2 justify-items-start text-right py-2 pl-6 bg-amber-100 text-sm font-bold border-b border-gray-400 text-gray-800 whitespace-nowrap overflow-x-hidden">
			     <span className="block w-full text-right">Advertised</span> 
			      <span className="bg-white text-gray-600 group-hover:bg-gray-300 group-hover:text-gray-700 hidden md:flex justify-center items-center ml-3 px-3 rounded-full text-xs font-medium">3</span>
		      </dt>

		      <dd className="grid grid-cols-2 py-2 px-6 text-sm font-medium text-gray-500">
			      <span className="sm:hidden font-sans mr-6">High</span>
			      <span className="value font-mono text-right">$312,000</span>
		      </dd>
		      <dd className="grid grid-cols-2 bg-gray-100 py-2 px-6 text-sm font-medium text-gray-500">
			      <span className="sm:hidden font-sans mr-6">Average</span>
			      <span className="value font-mono text-right">$212,000</span>
		      </dd>
		      <dd className="grid grid-cols-2 py-2 px-6 text-sm font-medium text-gray-500">
			      <span className="sm:hidden font-sans mr-6">High</span>
			      <span className="value font-mono text-right">$112,000</span>
		      </dd>
		    </dl>
		  </div>

		</div>
	);
}
export default function ValuesTableWrapper() {

	return (
		<div data-tabs-content="2" className="">
			
			{/*ValuesTable*/}
		  <div className="py-0 sm:py-0 sm:grid sm:grid-cols-4 sm:gap-0">
		    <dl className="flex flex-col hidden sm:flex">
		      <dt className="py-1 pl-4 text-sm font-bold text-gray-800 border-r border-b border-gray-400 whitespace-nowrap">Selected Items</dt>

		      <dd className="py-1 pl-4 text-sm font-medium text-gray-500 border-r border-gray-400">High</dd>
		      <dd className="bg-gray-100 py-1 pl-4 text-sm font-medium text-gray-500 border-r border-gray-400">Average</dd>
		      <dd className="py-1 pl-4 text-sm font-medium text-gray-500 border-r border-gray-400">Low</dd>
		    </dl>

		    <dl className="flex flex-col mb-4">
		      <dt className="py-1 pl-4 text-sm font-bold border-b border-gray-400 text-gray-800 whitespace-nowrap">Auction Reports</dt>

		      <dd className="py-1 pl-4 text-sm font-medium text-gray-500">--</dd>
		      <dd className="bg-gray-100 py-1 pl-4 text-sm font-medium text-gray-500">--</dd>
		      <dd className="py-1 pl-4 text-sm font-medium text-gray-500">--</dd>
		    </dl>

		    <dl className="flex flex-col mb-4">
		      <dt className="py-1 pl-4 text-sm font-bold border-b border-gray-400 text-gray-800 whitespace-nowrap">Sold Reports</dt>

		      <dd className="py-1 pl-4 text-sm font-medium text-gray-500">--</dd>
		      <dd className="bg-gray-100 py-1 pl-4 text-sm font-medium text-gray-500">--</dd>
		      <dd className="py-1 pl-4 text-sm font-medium text-gray-500">--</dd>
		    </dl>
		    <dl className="flex flex-col mb-4">
		      <dt className="py-1 pl-4 text-sm font-bold border-b border-gray-400 text-gray-800 whitespace-nowrap overflow-x-hidden">Advertised Listings (2)</dt>

		      <dd className="py-1 pl-4 text-sm font-medium text-gray-500">$312,000</dd>
		      <dd className="bg-gray-100 py-1 pl-4 text-sm font-medium text-gray-500">$212,000</dd>
		      <dd className="py-1 pl-4 text-sm font-medium text-gray-500">$112,000</dd>
		    </dl>
		  </div>

		</div>
	);
}
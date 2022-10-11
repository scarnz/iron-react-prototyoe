import ComparablesCardContent from './ComparablesCardContent';

export default function ComparablesCardMySold() {
  return (
  <ul role="list" className="divide-y divide-gray-200">
    <li>
      <a href="#" className="block hover:bg-gray-50">
        <div className="flex items-center px-4 py-4 sm:px-6">
          <div className="flex min-w-0 flex-1 items-center">
            <div className="flex-shrink-0">
              <img className="h-12 w-12 rounded" src="./src/img/S670-1.jpeg" alt="" />
            </div>
            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <p className="truncate text-sm font-medium text-indigo-600">S670 John Deere Combine</p>
                <p className="mt-2 flex items-center text-sm text-gray-500">
                  <span className="truncate">Advertised</span>
                </p>
              </div>
              <div className="hidden md:block">
                <div>
                  <p className="text-sm text-gray-900">
                    Listed&nbsp;
                    <time datetime="2020-01-07">January 7, 2020</time>
                  </p>
                  <p className="mt-2 flex items-center text-sm text-gray-500">
                    <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    Included in Export
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </a>
    </li>
  </ul>    
    
  );
} 
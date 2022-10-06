// Used to warn user that no exact comparables were found for a given category of comparables

import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';

export default function ComparablesMatchMsg() {
  return (
    <div className="border border-yellow-300 bg-yellow-50 p-4 mx-3 xxxsm:mx-0 mb-4 rounded-tr-md rounded-br-md rounded-md">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-700">
            No exact match found in this category. Closest matches are shown below.
          </p>
        </div>
      </div>
    </div>
  )
}

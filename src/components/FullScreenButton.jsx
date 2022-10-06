import { ArrowsPointingOutIcon } from '@heroicons/react/20/solid';
import { ArrowsPointingInIcon } from '@heroicons/react/20/solid';

export default function FullScreenButton() {

	return (
    <button id="fullScreenToggle" className="position absolute top-[4px] right-[50px] sm:right-[68px] w-9 h-9 md:h-9 ml-auto flex flex-shrink-0 flex-row justify-center items-center border border-slate-200 bg-gray-50 hover:bg-gray-100 rounded hadow">
      <ArrowsPointingOutIcon className="h-5 w-5 text-gray-500"/>
      {/*When active, use:
      <ArrowsPointingInIcon className="h-5 w-5 text-gray-500"/>*/}

    </button>  

	);
}
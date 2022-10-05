import ComparablesCardContent from './ComparablesCardContent';
// import 'S670-2.jpeg' from '../img/S670-2.jpeg';

export default function ComparablesCardAuction() {
  return (
    <>
      <li className="group col-span-1 relative bg-white rounded-md shadow hover:shadow-md hover:scale-[1.015]">
        <div className="relative flex w-full bg-gray-100">
          
          <div className="flex flex-row w-full justify-between items-center rounded-t-md bg-sky-300 pr-3 hover:mix-blend-multiply">
            <label htmlFor="include-9" className="flex flex-1 justify-between items-center pl-3 pr-2 py-3 cursor-pointer select-none">
              <span className="inline-flex text-xs font-bold text-gray-700">Auction</span>
              <span className="inline-flex text-xs font-medium text-gray-700">Include in Export</span>
            </label>
            <input id="include-9" aria-describedby="include-description" name="include-in-export" type="checkbox" className="focus:ring-blue-500 rounded h-5 w-5 text-blue-600 border-gray-400 cursor-pointer"/>

          </div>

        </div>
        <img className="w-full saturate-50 group-hover:saturate-100 bg-gray-300" src={"./src/img/S670-2.jpeg"} alt="John Deere combine" />

        
        <ComparablesCardContent />

      </li>
    </>
  );
} 
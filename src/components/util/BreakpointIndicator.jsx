export default function BreakpointIndicator() {
  return (
    <>
      {/*Prototyping Breakpoint Indicator*/}
      <div className="w-8 h-8 bg-red-900 rounded-full">
        <div className="relative flex justify-center items-center text-gray-200 w-8 h-8">
          <p className="text-xs font-medium sm:hidden">Ph</p> 
          <p className="text-xs font-medium hidden sm:block md:hidden">SM</p>
          <p className="text-xs font-medium hidden md:block lg:hidden">MD</p>
          <p className="text-xs font-medium hidden lg:block xl:hidden">LG</p>
          <p className="text-xs font-medium hidden xl:block 2xl:hidden">XL</p>
          <p className="text-xs font-medium hidden 2xl:block">2XL</p>
        </div>
      </div>
    </>
  );
}
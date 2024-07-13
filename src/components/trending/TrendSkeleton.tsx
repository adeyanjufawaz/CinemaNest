
function TrendSkeleton() {
  const arr = [1,2,3,4,5,6,7,8,0,0]
  return (
    <div>
      <div className="flex gap-8 lg:gap-8 justify-center items-center flex-wrap ">
        {arr.map(() => (
          <div className="flex flex-col cursor-pointer rounded animate-pulse shadow-slate-950 shadow-md p-1 ">
            <div className="flex justify-start items-start h-[100px] bg-gray-300 w-[100px]  lg:h-[200px]  lg:min-w-[200px] relative "></div>
            <div className="flex flex-col px-3 py-1 justify-between text-sm gap-2 font-medium mt-3 lg:mt-6">
              <div className="h-4 bg-gray-300 w-full rounded-full"></div>
              <div className="flex justify-between">
                <div className="h-4 bg-gray-300 w-[30%] rounded-full"></div>
                <div className="h-4 bg-gray-300 w-[30%] rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
        {/* <div className="flex flex-col cursor-pointer rounded animate-pulse shadow-slate-950 shadow-md p-1 ">
          <div className="flex justify-start items-start h-[100px] bg-gray-400 w-[100px]  lg:h-[200px]  lg:min-w-[200px] relative "></div>
          <div className="flex flex-col px-3 py-1 justify-between text-sm gap-2 font-medium mt-3 lg:mt-6">
            <div className="h-4 bg-gray-300 w-full rounded-full"></div>
            <div className="flex justify-between">
              <div className="h-4 bg-gray-300 w-[30%] rounded-full"></div>
              <div className="h-4 bg-gray-300 w-[30%] rounded-full"></div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default TrendSkeleton;

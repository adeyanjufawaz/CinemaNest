
function MovieDetailsSkeleton() {
 

  return (
    <div className=" flex-col md:flex-row flex justify-center items-center animate-pulse p-6 min-h-[80vh]">
      <div className=" h-80 lg:h-96 w-full bg-slate-400  md:w-[800px] rounded-md "></div>
      <div className="flex flex-col justify-center min-w-56 items-start gap-3 md:gap-8 p-2 md:p-6">
        <div className="h-4 bg-gray-400 w-full rounded-full"></div>

        <div className="h-4 bg-gray-400 w-full rounded-full"></div>

        <ul className="list-disc min-w-52">
          <li className="ml-4">
            <div className="h-4 bg-gray-400 w-full rounded-full"></div>
          </li>
          <li className="ml-4">
            <div className="h-4 bg-gray-400 w-full rounded-full"></div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MovieDetailsSkeleton;

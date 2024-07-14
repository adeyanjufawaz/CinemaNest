import img from "../../img/homeImg2.png";

function TrendMovies() {
  return (
    <div className="flex flex-col cursor-pointer rounded shadow-slate-950 shadow-md p-1 ">
      <div
        className="flex justify-start items-start h-[100px] w-[100px]  lg:h-[200px]  lg:min-w-[200px] relative "
        style={{
          backgroundImage: `url("${img}")`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      ></div>
      <div className="flex flex-col px-3 py-1 justify-between text-lg gap-2 mt-3 lg:mt-5">
        <p className="font-normal">Loremsum</p>
        <div className="flex justify-between font-normal">
          <p>2023</p>
          <p>104m</p>
        </div>
      </div>
    </div>
  );
}

export default TrendMovies;

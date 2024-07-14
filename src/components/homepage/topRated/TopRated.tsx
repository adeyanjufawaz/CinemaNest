import { useEffect, useState } from "react";
import TrendSkeleton from "../popular/PopularSkeleton";
import api from "../../../axios";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function convertYear(date: string) {
  var mydate = new Date(date);

  return mydate.getFullYear();
}

const toTwoSigFig = (data:any) => {
  return data.toFixed(2)
}

function Trending() {
  const [isLoading, setIsloading] = useState(true);
  const [moviesArr, setMoviesArr] = useState([]);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await api.get(
          "top_rated?api_key=36e425727a420a04d97fc43a7892c717"
        );
        // console.log(response?.data?.results);
        setMoviesArr(response?.data?.results);
        setIsloading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);

  return (
    <div className=" min-h-96 my-6 py-6 px-4">
      <h2 className="text-2xl mb-6 font-medium">Top Rated</h2>
      <div className="flex gap-8 lg:gap-8 justify-center items-center flex-wrap ">
        {isLoading ? (
          <TrendSkeleton />
        ) : (
          moviesArr
            .slice(0, 10)
            .map(({ id, title, vote_average, release_date, backdrop_path }) => (
              <Link
                to={`movie/${title}/${id}`}
                key={id}
                className="flex flex-col cursor-pointer rounded w-[140px] lg:w-[200px] max-w-[200px] h-[200px] lg:h-[300px] shadow-slate-950 shadow-md p-1 "
              >
                <div
                  className="flex justify-start items-start h-[100px]  bg-gray-400 lg:h-[200px]  lg:min-w-[200px] relative "
                  style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${backdrop_path}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                  }}
                ></div>
                <div className="flex flex-col px-3 py-1 justify-between text-lg gap-2 mt-3 lg:mt-5">
                  <p className="font-normal truncate">{title}</p>
                  <div className="flex justify-between font-normal">
                    <p>{convertYear(release_date)}</p>
                    <div className="flex items-center">
                      <p>{toTwoSigFig(vote_average)}</p>
                      <FaRegStar className="ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            ))
        )}
      </div>
    </div>
  );
}

export default Trending;

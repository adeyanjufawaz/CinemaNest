import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toTwoSigFig } from "./homepage/topRated/TopRated";
import MovieDetailsSkeleton from "./MovieDetailsSkeleton";

function MovieDetails() {
  const { name } = useParams();
  const [moviesArr, setMoviesArr]: any = useState([]);
  const [isLoading,setIsloading] = useState(true)

  useEffect(() => {
    async function getUser() {
      try {
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=36e425727a420a04d97fc43a7892c717&query=${name}`
        )
          .then((res) => res.json())
          .then((data) => setMoviesArr(data.results.slice(0, 1)));
        setIsloading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, [name]);


  type curType = {
    id: string;
    backdrop_path: string;
    title: string;
    overview: string;
    release_date: string;
    vote_average:string
  };

  const formateDate = (date: any) => {
    // const data = new Date(date)
    // return data.toDateString();

    const dateType = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const dateformat = new Date(date);
    const dateTimeFormat2 = new Intl.DateTimeFormat("en-GB", dateType);
    return dateTimeFormat2.format(dateformat);
  };

  return (
    <>
      {isLoading ? (
        <MovieDetailsSkeleton/>
      ) : (
        <div>
          {moviesArr.map(
            ({
              id,
              backdrop_path,
              title,
              overview,
              release_date,
              vote_average,
            }: curType) => (
              <div key={id} className=" flex-col md:flex-row flex p-6">
                <div
                  className=" h-80 lg:h-96 w-full md:w-[800px] rounded-md "
                  style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${backdrop_path}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    objectFit: "contain",
                  }}
                ></div>
                <div className="flex flex-col justify-center items-start gap-3 md:gap-8 p-2 md:p-6">
                  <h2 className="font-bold  text-3xl">
                    {title} ({release_date.slice(0, 4)})
                  </h2>
                  <p className="text-xl ">Review: {overview}</p>
                  <ul className="list-disc">
                    <li className="ml-4">
                      <h2> {formateDate(release_date)}</h2>
                    </li>
                    <li className="ml-4">
                      <h2>Rating: {toTwoSigFig(vote_average)}</h2>
                    </li>
                  </ul>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </>
  );
}

export default MovieDetails;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { name} = useParams();
  const [moviesArr, setMoviesArr]: any = useState([]);

  useEffect(() => {
    async function getUser() {
      try {
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=36e425727a420a04d97fc43a7892c717&query=${name}`
        )
          .then((res) => res.json())
          .then((data) => setMoviesArr(data.results.slice(0, 1)));
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);

  useEffect(() => {
    console.log(moviesArr);
  }, [moviesArr]);

  type curType = {
    id: string;
    backdrop_path: string;
    title: string;
    overview: string;
  };

  return (
    <div>
      {moviesArr.map(({ id, backdrop_path, title, overview }: curType) => (
        <div key={id}>
          <div
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${backdrop_path}")`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              height: "300px",
              width: "500px",
            }}
          ></div>
          <h2>{title}</h2>
          <p>Review: {overview}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieDetails;

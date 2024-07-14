import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { name,id } = useParams();
  const [moviesArr, setMoviesArr]:any = useState([])
  const [movie,setMovie] = useState({})

  useEffect(() => {
    async function getUser() {
      try {
        fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=36e425727a420a04d97fc43a7892c717&query=${name}`
        )
          .then((res) => res.json())
          .then((data) => setMoviesArr(data.results.slice(0,1)));
        
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, [])
  
  useEffect(() => {
    // const item:any = moviesArr.find(el => el?.id == id)
    // setMovie(item)
    // console.log(item)
    console.log(moviesArr)
  }, [moviesArr])

  return (
    <div>
      {moviesArr.map((movie) => (
        <div key={movie.id}>
          <div
            style={{
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              height: "300px",
              width: "500px",
            }}
          ></div>
          <h2>{movie.title}</h2>
          <p>Review: {movie.overview}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieDetails;

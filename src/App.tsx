import { Route, Routes } from "react-router-dom";
// import Home from "./components/homepage/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/homepage/Footer";
import Home from "./components/homepage/Home";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="movie/:name/:id" element={<MovieDetails/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;

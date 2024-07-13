import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero";
import Trending from "./components/trending/Trending";
import Footer from "./components/Footer";
import Popular from "./components/popular/Popular"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Hero />
      <Trending />
      <Popular />
      <Footer/>
    </div>
  );
}

export default App;

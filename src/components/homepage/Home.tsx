import Hero from "./Hero";
import Popular from "./popular/Popular";
import Trending from "./topRated/TopRated";

export default function Home() {
  return (
    <div>
      <Hero />
      <Trending/>
      <Popular />

    </div>
  );
}

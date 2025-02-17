import { CiSearch } from "react-icons/ci";
import "./Navbar.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [input, setInput] = useState("");
  const [suggestionLists,setSuggestionLists] = useState([])
  const [hideSearch, setHideSearch] = useState(true);

  useEffect(() => {
    const controller = new AbortController()
    if (!input) {
      setHideSearch(true);
    }
    if (input.length > 0) {
      setHideSearch(false);
      async function getUser() {
        try {
          fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=36e425727a420a04d97fc43a7892c717&query=${input}`,{signal: controller.signal}
          )
            .then((res) => res.json())
            .then((data) => setSuggestionLists(data.results));
        } catch (error) {
          console.error(error);
        }
      } 
      getUser();
      return function () {
        controller.abort()
      }
    }
  }, [input]);
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        CinemaNest
      </Link>
      <div className="searchBar">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onClick={() => setHideSearch(false)}
        />
        <CiSearch className="searchIcon" />
        <div
          className="absolute right-[2.5%] top-[110%] w-[95%] bg-white shadow-md shadow-red rounded-md lg:max-h-64 max-h-48 flex flex-col scroll-auto overflow-y-auto gap-2"
          style={hideSearch ? { display: "none" } : { display: "flex" }}
        >
          {suggestionLists.map((list: { id: string; title: string }) => (
            <Link
              to={`movie/${list.title}/${list.id}`}
              key={list.id}
              className="border-b-2 cursor-pointer p-2 rounded"
              onClick={() => {
                setHideSearch(true);
                setInput("");
              }}
            >
              <p>{list.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import { CiSearch } from "react-icons/ci";
import "./Navbar.css";
import { useEffect, useState } from "react";

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
      console.log(input);
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
      <h2 className="logo">CinemaNest</h2>
      <div className="searchBar">
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <CiSearch className="searchIcon" />
        <div
          className="absolute right-[2.5%] top-[110%] w-[95%] bg-white shadow-md shadow-red rounded-md lg:max-h-64 max-h-48 p-2 flex flex-col scroll-auto overflow-y-auto gap-2"
          style={hideSearch ? { display: "none" } : { display: "flex" }}
        >
          {suggestionLists.map((list:{id:string,title:string}) => (
            <h2 key={list.id} className="border-b-4 cursor-pointer p-3 rounded" onClick={()=>{console.log(list)}}>{list.title}</h2>
          ))}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;

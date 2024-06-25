import { useEffect, useState, useMemo } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import Search from "./images/search.png"
import Back from "./images/Back.png"

function App() {
  const API_URL =
    "https://test.create.diagnal.com/data/page1.json";

  const API_SEARCH =
    "https://api.themoviedb.org/3/search/movie?api key=fa1192549721df01a1fb28a7788e6608&query=";

  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState("");
  const [isSearchClick, setSearchClick] = useState(false)

  useEffect(() => {
   fetchData();
  }, []);

  const fetchData = ()=>{
    fetch(API_URL)
    .then((res) => res.json())
    .then((data) =>setMovies(data?.page?.["content-items"].content));
  }

  const SearchClick =()=>{
    var isClick = isSearchClick ? false : true;
    setSearchClick(isClick);
  }

  const handleSearch = (e) => {
    var keyword = e.target.value;
    var searchResult = movies?.filter(movie => movie.name.toLowerCase().indexOf(keyword) > -1);
   
    if(keyword === ""){
      fetchData();
    }else{
      setMovies(searchResult)
    }
    console.log(searchResult, "search");
     };
  return (
    <div className="App">
      <div className="search_nav" >
        <div className="navbar">
          <img src={Back}></img>
          {
            isSearchClick ?  <input type="text" onChange={(e)=> handleSearch(e)}></input> : <span>Romantic Comedy</span>
          }
         
          <img src={Search} onClick={SearchClick}></img>
        </div>
      </div>

      <div className="movies">
        {movies.map((movie) => (
          <MovieCard {...movie} />
        ))}
      </div>
    </div>
  );
}

export default App;

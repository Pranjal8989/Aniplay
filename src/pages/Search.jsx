import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getMovies, getMoviesdata } from "../Api/GetAPIServices"; // Assuming getMoviesdata is your API call function
import { Card } from "../components/UI/Card";

export const Search = () => {
  const [movie, setMovie] = useState([]);

  const location = useLocation(); // Get the current location (URL)

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search); // Get query parameters from URL
    const searchQuery = queryParams.get("search");

    const fetchMovies = async () => {
      const data = await getMoviesdata(searchQuery);
      console.log(searchQuery);
      // Fetch data based on search query
      if (data && data.Search) {
        setMovie(data.Search); // Set the fetched movies to state
      } else {
        setMovie([]); // Clear if no results are found
      }
    };

    fetchMovies(); // Always fetch data when the component mounts or search changes
  }, [location.search]); // Dependency array ensures this effect runs whenever the search query changes

  return (
    <div className="container">
      <ul className="grid grid-four--cols">
        {movie &&
          movie.map((curMovie) => (
            <Card key={curMovie.imdbID} curMovie={curMovie} />
          ))}
      </ul>
    </div>
  );
};

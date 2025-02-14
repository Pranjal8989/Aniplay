import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getMovies, getMoviesdata } from "../Api/GetAPIServices"; // Assuming getMoviesdata is your API call function
import { Card } from "../components/UI/Card";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation(); // Get the current location (URL)

  useEffect(() => {
    // const queryParams = new URLSearchParams(location.search); // Get query parameters from URL
    // const searchQuery = queryParams.get("search");

    const fetchMovies = async () => {
      const data = await getMovies();
      // console.log(data);
      // Fetch data based on search query
      if (data && data.data) {
        setMovies(data.data); // Set the fetched movies to state
      } else {
        setMovies([]); // Clear if no results are found
      }
    };

    fetchMovies(); // Always fetch data when the component mounts or search changes
  }, [location.search]); // Dependency array ensures this effect runs whenever the search query changes
  // console.log(movies);

  return (
    <div className="container">
      <ul className="grid grid-four--cols">
        {movies &&
          movies.map((curMovie) => (
            <Card key={curMovie.mal_id} curMovie={curMovie} />
          ))}
      </ul>
    </div>
  );
};

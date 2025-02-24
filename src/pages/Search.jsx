import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getMoviesdata } from "../Api/GetAPIServices"; // Assuming getMoviesdata is your API call function
import { Card } from "../components/UI/Card";
import { MovieCardLoader } from "../components/layout/Loading";

export const Search = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get("search");

    setLoading(true);
    const fetchMovies = async () => {
      const data = await getMoviesdata(searchQuery);
      console.log(searchQuery);
      // Fetch data based on search query
      if (data && data) {
        setMovie(data);
      } else {
        setMovie([]);
      }

      setLoading(false);
    };

    fetchMovies();
  }, [location.search]);

  if (loading) return <MovieCardLoader />;
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

import { useEffect, useState } from "react";
import { getMovies } from "../Api/GetAPIServices";
import { Card } from "../components/UI/Card";
import { MovieCardLoader } from "../components/layout/Loading";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      console.log(data);
      // Fetch data based on search query
      if (data && data) {
        setMovies(data);
      } else {
        setMovies([]);
      }
      setLoading(false);
    };

    fetchMovies();
  }, []);

  if (loading) return <MovieCardLoader />;

  return (
    <div className="container">
      <ul className="grid grid-four--cols">
        {movies &&
          movies.map((curMovie) => (
            <Card key={curMovie.imdbID} curMovie={curMovie} />
          ))}
      </ul>
    </div>
  );
};

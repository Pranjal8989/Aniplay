import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import movies from "../Api/Movies.json";
import { Card } from "../components/UI/Card";
import { getMovies } from "../Api/GetAPIServices";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [topmovies, setMovies] = useState([]);
  const scrollRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      console.log(data.Search);
      if (data && data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    };

    fetchMovies();
  }, []);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      if (direction === "left") {
        scrollRef.current.scrollLeft -= scrollAmount;
      } else {
        scrollRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <>
      <main>
        <div className="container grid grid-two--row">
          <section className="section-hero">
            <div
              className="slider"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {movies.map((movie) => (
                <div key={movie.id} className="slide">
                  <div className=" grid grid-two--cols">
                    <div className="section-hero--content">
                      <p className="hero-subheading">
                        Explore the Latest in Movie Industries
                      </p>
                      <h1 className="hero-heading">{movie.title}</h1>
                      <p className="hero-para">{movie.description}</p>
                      <div className="grid grid-cols-2 gap-0.5">
                        <p className="hero-para">
                          Release Date:{movie.release_date}
                        </p>
                        <p className="hero-para">Rating: {movie.rating}</p>
                      </div>
                      <div className="hero-btn">
                        <NavLink to="/movie" className="btn">
                          Explore More
                        </NavLink>
                      </div>
                    </div>

                    <div className="section-hero-image">
                      <img src={movie.banner} alt={movie.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <h2 className="hero-heading">Top Movies</h2>
      <div className="hero-container">
        <button
          className="scroll-btn left"
          onClick={() => handleScroll("left")}
        >
          <HiArrowSmLeft />
        </button>

        <div className="movies-wrapper" ref={scrollRef}>
          <ul className="movie-list">
            {topmovies.map((curMovie) => (
              <Card key={curMovie.imdbID} curMovie={curMovie} />
            ))}
          </ul>
        </div>

        <button
          className="scroll-btn right"
          onClick={() => handleScroll("right")}
        >
          <HiArrowSmRight />
        </button>
      </div>
      <h2 className="hero-heading">Top Movies</h2>
      <div className="hero-container">
        <button
          className="scroll-btn left"
          onClick={() => handleScroll("left")}
        >
          <HiArrowSmLeft />
        </button>

        <div className="movies-wrapper" ref={scrollRef}>
          <ul className="movie-list">
            {topmovies.map((curMovie) => (
              <Card key={curMovie.imdbID} curMovie={curMovie} />
            ))}
          </ul>
        </div>

        <button
          className="scroll-btn right"
          onClick={() => handleScroll("right")}
        >
          <HiArrowSmRight />
        </button>
      </div>
    </>
  );
};

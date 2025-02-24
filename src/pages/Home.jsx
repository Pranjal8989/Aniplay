import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import movies from "../Api/Movies.json";
import { Card } from "../components/UI/Card";
import { getAnime, getMovies, getTVSerial } from "../Api/GetAPIServices";
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import { HomeCardLoader } from "../components/layout/Loading";

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [topmovies, setTopMovies] = useState([]);
  const [topTVSerial, setTopTvSerial] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [loadingMovies, setLoadingMovies] = useState(true);
  const [loadingTVSerial, setLoadingTVSerial] = useState(true);
  const [loadingAnime, setLoadingAnime] = useState(true);
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const fetchMovies = async () => {
    setLoadingMovies(true);
    const data = await getMovies();
    setTopMovies(data || []);
    setLoadingMovies(false);
  };

  const fetchTVSerial = async () => {
    setLoadingTVSerial(true);
    const data = await getTVSerial();
    setTopTvSerial(data || []);
    setLoadingTVSerial(false);
  };

  const fetchAnime = async () => {
    setLoadingAnime(true);
    const data = await getAnime();
    setTopAnime(data || []);
    setLoadingAnime(false);
  };

  useEffect(() => {
    fetchTVSerial();
    fetchMovies();
    fetchAnime();
  }, []);
  const handleScroll = (direction, ref) => {
    if (ref.current) {
      const scrollAmount = 300;
      ref.current.scrollLeft +=
        direction === "left" ? -scrollAmount : scrollAmount;
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
                    <div className="section-hero--content ">
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

        <h2 className="hero-heading">Top Movies</h2>
        <div className="hero-container">
          <button
            className="scroll-btn left"
            onClick={() => handleScroll("left", scrollRef1)}
          >
            <HiArrowSmLeft />
          </button>

          <div className="movies-wrapper" ref={scrollRef1}>
            <ul className="movie-list">
              {loadingMovies ? (
                <HomeCardLoader />
              ) : (
                topmovies.map((curMovie) => (
                  <Card key={curMovie.imdbID} curMovie={curMovie} />
                ))
              )}
            </ul>
          </div>

          <button
            className="scroll-btn right"
            onClick={() => handleScroll("right", scrollRef1)}
          >
            <HiArrowSmRight />
          </button>
        </div>
        <h2 className="hero-heading">Top TV serial</h2>
        <div className="hero-container">
          <button
            className="scroll-btn left"
            onClick={() => handleScroll("left", scrollRef2)}
          >
            <HiArrowSmLeft />
          </button>

          <div className="movies-wrapper" ref={scrollRef2}>
            <ul className="movie-list">
              {loadingTVSerial ? (
                <HomeCardLoader />
              ) : (
                topTVSerial.map((curTVserial) => (
                  <Card key={curTVserial.imdbID} curMovie={curTVserial} />
                ))
              )}
            </ul>
          </div>

          <button
            className="scroll-btn right"
            onClick={() => handleScroll("right", scrollRef2)}
          >
            <HiArrowSmRight />
          </button>
        </div>
        <h2 className="hero-heading">Top Anime</h2>
        <div className="hero-container">
          <button
            className="scroll-btn left"
            onClick={() => handleScroll("left", scrollRef3)}
          >
            <HiArrowSmLeft />
          </button>

          <div className="movies-wrapper" ref={scrollRef3}>
            <ul className="movie-list">
              {loadingAnime ? (
                <HomeCardLoader />
              ) : (
                topAnime.map((curAnime) => (
                  <Card key={curAnime.imdbID} curMovie={curAnime} />
                ))
              )}
            </ul>
          </div>

          <button
            className="scroll-btn right"
            onClick={() => handleScroll("right", scrollRef3)}
          >
            <HiArrowSmRight />
          </button>
        </div>
      </main>
    </>
  );
};

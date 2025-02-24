import Top_movies from "./Top_movies.json";
import TVData from "./TVData.json";
import Anime from "./Anime.json";

import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
const API = axios.create({
  baseURL: "https://www.omdbapi.com/",
});
// axios method to get api data with json convert
export const getMovies = async () => {
  try {
    // Use `.map()` to create an array of promises for API requests
    const movieRequests = Top_movies.map((movie) =>
      API.get(`?apikey=${API_KEY}&s=${movie.name}&page=1&type=movie`)
    );

    const responses = await Promise.all(movieRequests);

    // To tak out data from  nested array in resposne
    const TopMovies = responses.map((res) => res.data?.Search || []).flat();

    return TopMovies;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return [];
  }
};

export const getMoviesdata = async (search) => {
  try {
    if (search?.trim()) {
      const searchQuery =
        typeof search === "string" && search.trim() !== ""
          ? `s=${search.trim()}`
          : ``;
      console.log(searchQuery);
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&${searchQuery}&page=1`
      );
      // const data = await response.json();
      return response.data.Search;
    }

    const movieRequests = Top_movies.slice(0, 10).map((movie) =>
      API.get(`?apikey=${API_KEY}&s=${movie.name}&page=1&type=movie`)
    );

    const responses = await Promise.all(movieRequests);

    // To remove the nested array in resposne
    const TopMovies = responses.map((res) => res.data?.Search || []).flat();

    return TopMovies;
  } catch (error) {
    console.error("Error fetching movies data:", error);
    return [];
  }
};

export const getMoviesDetails = ({ params }) => {
  const id = params.movieID;
  try {
    const response = axios.get(
      `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getTVSerial = async () => {
  try {
    // Use `.map()` to create an array of promises for API requests
    const movieRequests = TVData.map((TV) =>
      API.get(`?apikey=${API_KEY}&s=${TV.name}&page=1`)
    );

    const responses = await Promise.all(movieRequests);

    // To tak out data from  nested array in resposne
    const TopTVSerial = responses.map((res) => res.data?.Search || []).flat();

    return TopTVSerial;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return [];
  }
};
export const getAnime = async () => {
  try {
    // Use `.map()` to create an array of promises for API requests
    const movieRequests = Anime.map((AnimeTv) =>
      API.get(`?apikey=${API_KEY}&s=${AnimeTv.name}&page=1`)
    );

    const responses = await Promise.all(movieRequests);

    // To tak out data from  nested array in resposne
    const TopAnime = responses.map((res) => res.data?.Search || []).flat();

    return TopAnime;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return [];
  }
};

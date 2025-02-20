import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
// const API = axios.create({
//   baseURL: "https://www.omdbapi.com/",
// });
// axios method to get api data with json convert
export const getMovies = async () => {
  const response = await axios.get(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=avengers&page=1`
  );
  return response.data;
};

export const getMoviesdata = async (search) => {
  try {
    const searchQuery =
      typeof search === "string" && search.trim() !== ""
        ? `s=${search.trim()}`
        : `s=all`;
    // console.log(searchQuery);

    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${API_KEY}&${searchQuery}&page=1`
    );
    // const data = await response.json();
    return response.data;
  } catch (error) {
    console.error("Error fetching movies data:", error);
  }
};

export const getAnimeDetails = ({ params }) => {
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

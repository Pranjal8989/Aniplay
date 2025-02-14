import axios from "axios";
// const API_KEY = import.meta.env.VITE_API_KEY;
const API = axios.create({
  baseURL: "https://api.jikan.moe/v4/anime",
});
// axios method to get api data with json convert
export const getMovies = async () => {
  const response = await API.get();
  return response.data;
};

export const getMoviesdata = async (search) => {
  try {
    const searchQuery =
      typeof search === "string" && search.trim() !== ""
        ? `q=${search.trim()}`
        : `q=naruto`;
    console.log(searchQuery);

    const response = await API.get(`anime?${searchQuery}`);
    // const data = await response.json();
    return response.data;
  } catch (error) {
    console.error("Error fetching movies data:", error);
  }
};

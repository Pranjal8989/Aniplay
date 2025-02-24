import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Contact } from "./pages/contact";
import { Movies } from "./pages/Movies";
// import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { ErrorPage } from "./pages/ErrorPage";
import { AppLayout } from "./components/layout/AppLayout";
import { MovieDetails } from "./components/UI/MovieDetails";
import { getMoviesDetails } from "./Api/GetAPIServices";
import { Search } from "./pages/Search";
import { About } from "./pages/About";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movies />,
          // loader: getMoviesdata,
        },
        {
          path: "/movie/:movieID", // : use for dynamic url or route
          element: <MovieDetails />,
          loader: getMoviesDetails,
        },
        {
          path: "/contact",
          element: <Contact />,
          // action: contactData,
        },
        {
          path: "/searchmovies",
          element: <Search />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;

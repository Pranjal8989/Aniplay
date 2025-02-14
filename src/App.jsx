import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Contact } from "./pages/contact";
import { Movies } from "./pages/Movies";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { ErrorPage } from "./pages/ErrorPage";
import { AppLayout } from "./components/layout/AppLayout";

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
          path: "/contact",
          element: <Contact />,
          // action: contactData,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;

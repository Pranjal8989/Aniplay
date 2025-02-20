import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MovieCardLoader, MovieDetailsLoader } from "./Loading";

export const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      {isLoading ? (
        navigation.location.pathname.includes("/movie/") ? (
          <MovieDetailsLoader />
        ) : (
          <MovieCardLoader />
        )
      ) : (
        <Outlet />
      )}
      <Footer />
    </>
  );
};

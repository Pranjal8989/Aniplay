export const Loading = () => {
  return (
    <div className="container loader-section">
      <div className="loader"></div>
    </div>
  );
};

export const MovieDetailsLoader = () => {
  return (
    <li className="container hero-movie-container h-[500px] w-full">
      <div className="main-container animate-pulse">
        <figure className="movie">
          <div className="movie__hero">
            <div className="flex items-center justify-center h-[300px] w-full  bg-gray-300 rounded dark:bg-gray-700">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 20"
              >
                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              </svg>
            </div>
          </div>
          <div className="movie__content">
            <div className="movie__title">
              <h1 className="heading__primary">
                <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-60 sm:w-40 mb-4 "></div>
              </h1>
              <div className="flex flex-row gap-8">
                <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-40 sm:w-32 mb-4"></div>
                <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-40 sm:w-32 mb-4"></div>
              </div>
            </div>

            <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-80 sm:w-52 mb-4 mt-10"></div>
            <div className="movie__details">
              <p className="movie__detail h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-60 sm:w-40 mb-4"></p>
              <p className="movie__detail h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-60 sm:w-40 mb-4"></p>
              <p className="movie__detail h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-60 sm:w-40 mb-4"></p>
            </div>

            <div className="h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
          </div>
          <div className="movie__price"></div>
        </figure>
      </div>
    </li>
  );
};

export const MovieCardLoader = () => {
  return (
    <>
      <ul className="container grid grid-four--cols">
        {Array.from({ length: 10 }).map((_, index) => (
          <li className="hero-container" key={index}>
            <div className="main-container animate-pulse">
              <div className="poster-container">
                <div className="flex items-center justify-center h-[350px] w-full  bg-gray-300 rounded dark:bg-gray-700">
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
              </div>
              <div className="ticket-container">
                <div className="ticket__content">
                  <div className="h-16 bg-gray-200  dark:bg-gray-700 w-full "></div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export const HomeCardLoader = () => {
  return (
    <div className="movies-wrapper">
      <ul className="movie-list">
        {Array.from({ length: 10 }).map((_, index) => (
          <li className="card" key={index}>
            <div className="main-container animate-pulse">
              <div className="poster-container">
                <div className="flex items-center justify-center h-[350px] w-full bg-gray-300 rounded dark:bg-gray-700">
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 20"
                  >
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
              </div>
              <div className="ticket-container">
                <div className="ticket__content">
                  <div className="h-16 bg-gray-200 dark:bg-gray-700 w-full"></div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <main>
        <div className="container grid grid-two--row">
          <section className="section-hero">
            <div className="container grid grid-two--cols">
              <div className="section-hero--content">
                <p className="hero-subheading">
                  Explore the Latest in Movie Industries
                </p>
                <h1 className="hero-heading">
                  Unlimited Movie, TVs Shows, & More.
                </h1>
                <p className="hero-para">
                  Discover the Top Best Movies and Dramas with a catchy subtitle
                  like Your Ultimate Guide to Must-Watch Content.
                </p>
                <div className="hero-btn">
                  <NavLink to="/movie" className="btn">
                    Explore Now
                  </NavLink>
                </div>
              </div>
              <div className="section-hero-image">
                <img
                  // src="./assets/images/movies.png"
                  src="./contact.png"
                  alt="movies poster"
                />
              </div>
            </div>
          </section>
          <section className="section-hero">
            <div className="container grid grid-two--cols">
              <div className="section-hero--content">
                <p className="hero-subheading">
                  Explore the Latest in Movie Industries
                </p>
                <h1 className="hero-heading">
                  Unlimited Movie, TVs Shows, & More.
                </h1>
                <p className="hero-para">
                  Discover the Top Best Movies and Dramas with a catchy subtitle
                  like Your Ultimate Guide to Must-Watch Content.
                </p>
                <div className="hero-btn">
                  <NavLink to="/movie" className="btn">
                    Explore Now
                  </NavLink>
                </div>
              </div>
              <div className="section-hero-image">
                <img
                  // src="./assets/images/movies.png"
                  src="./contact.png"
                  alt="movies poster"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

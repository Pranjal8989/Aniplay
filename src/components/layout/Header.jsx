import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); // To navigate to the movie page with search query

  const [isActive, setIsActive] = useState(false);
  const onHandleToggle = () => {
    setIsActive(!isActive);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
    // When search term changes, navigate to the /movie route with search query
    navigate(`/searchmovies?search=${event.target.value}`);
  };

  return (
    <header className="section-navbar">
      <section className="top_txt">
        <div className="head container">
          <NavLink to="/">Movizo</NavLink>

          <nav className={`navbar ${isActive ? "menu-mobile" : "menu-web"}`}>
            <ul>
              <li className="nav-item">
                <input
                  type="text"
                  placeholder=" Search..."
                  value={search}
                  onChange={handleSearch}
                  className="p-5 border border-white rounded-lg text-white bg-gray-800 box-content"
                />
              </li>
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="about" className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="movie" className="nav-link">
                  Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="ham-menu">
            <button onClick={onHandleToggle}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </section>
    </header>
  );
};

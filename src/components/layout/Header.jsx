import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation(); //geting current route location
  const [isActive, setIsActive] = useState(false);
  const onHandleToggle = () => {
    setIsActive(!isActive);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);

    navigate(`/searchmovies?search=${event.target.value}`);
  };

  useEffect(() => {
    if (!location.pathname.startsWith("/searchmovies")) {
      setIsActive(false);
    }
  }, [location.pathname]);

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

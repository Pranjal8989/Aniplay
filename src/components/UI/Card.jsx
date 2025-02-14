/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import "./Card.css";
export const Card = ({ curMovie }) => {
  const { mal_id, images } = curMovie;
  console.log(mal_id);

  return (
    <>
      <li className="hero-container">
        <div className="main-container">
          <div className="poster-container">
            <img src={images.jpg.image_url} className="poster" alt={mal_id} />
          </div>
          <div className="ticket-container">
            <div className="ticket__content">
              <NavLink to={`/movie/${mal_id}`}>
                <button className="ticket__buy-btn">watch now</button>
              </NavLink>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

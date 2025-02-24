import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="section-footer">
      <div className="footer-container container">
        <div className="content_1">
          <img src="./logo/movizologo.png" alt="MovieMania" />

          <p>
            Welcome to MovieMania, <br />
            your ultimate destination for
            <br />
            the latest movies, reviews & trailers!
          </p>
          <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
        </div>

        <div className="content_2">
          <h4>MOVIE CATEGORIES</h4>
          <a href="#">Action</a>
          <a href="#">Comedy</a>
          <a href="#">Horror</a>
          <a href="#">Romantic</a>
        </div>

        <div className="content_3">
          <h4>QUICK LINKS</h4>
          <a href="#">Latest Movies</a>
          <a href="#">Top Rated</a>
          <a href="#">Upcoming Releases</a>
          <a href="#">Movie Reviews</a>
        </div>

        <div className="content_3">
          <h4>SUPPORT</h4>
          <a href="#">Contact Us</a>
          <a href="#">FAQ</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

        <div className="content_4">
          <h4>NEWSLETTER</h4>
          <p>
            Subscribe to get updates on new
            <br />
            movie releases & exclusive content!
          </p>
          <div className="f-mail">
            <MdEmail size={35} />
            <input type="email" placeholder="Your Email" />
          </div>
          <hr />
        </div>
      </div>

      <div className="f-design">
        <div className="f-design-txt">
          <p>Designed & Developed by Pranjal Pandit</p>
        </div>
      </div>
    </footer>
  );
};

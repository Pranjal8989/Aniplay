import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <h1 className="title">🎬 Welcome to Movizo</h1>
          <p className="description">
            Movizo is your one-stop destination for discovering and exploring
            the latest movies, TV shows, and anime. Whether you’re a cinephile
            or a casual viewer, Movizo provides in-depth reviews, ratings,
            trailers, and recommendations to help you find the perfect film for
            your mood.
          </p>
        </div>

        <section className="why-movizo">
          <h2 className="section-title">Why Movizo?</h2>
          <ul className="features-list">
            <li>🎥 Curated movie recommendations tailored to your taste.</li>
            <li>🎬 Community-driven reviews and discussions.</li>
            <li>📅 Latest updates and trends from the film industry.</li>
            <li>⭐ A user-friendly interface for an enhanced experience.</li>
          </ul>
        </section>

        <div className="creator-section">
          <h2 className="section-title">👨‍💻 About the Creator</h2>
          <div className="creator-profile">
            <img
              src="./profile.jpg"
              alt="Pranjal Pandit"
              className="creator-image"
            />
            <div className="creator-info">
              <p>
                Hi! I’m <span className="highlight">Pranjal Pandit</span>, the
                developer and designer behind Movizo. My love for movies and
                technology inspired me to create this platform, making it easier
                for movie lovers to explore and discover films effortlessly.
              </p>
              <p>
                With expertise in full-stack development and API integration, I
                built Movizo to provide a seamless and visually appealing
                experience. I’m always looking to improve and add new
                features—your feedback is invaluable!
              </p>
              <div className="social-links">
                <a
                  href="https://github.com/Pranjal8989"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaGithub className="icon" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/pranjal-pandit-38b193254/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <FaLinkedin className="icon" /> LinkedIn
                </a>
                <a href="mailto:pranjal@example.com" className="social-link">
                  <FaEnvelope className="icon" /> Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

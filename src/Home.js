import React from 'react';
import { Link } from 'react-router-dom';
import tennisImage from './assets/tennis.jpeg';
import emaImage from './assets/ema.jpeg';
import horseImage from './assets/horse.jpeg';

function Home() {
  return (
    <div>
      {/* Top Navigation Bar */}
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tennis">Tennis</Link></li>
            <li><Link to="/academics">Academics</Link></li>
            <li><Link to="/horse-riding">Horse Riding</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="portfolio-wrapper">
          <div className="overlay-text">
            <h1>Welcome To My Portfolio!</h1>
          </div>

          <div className="hero-images">
            <img src={tennisImage} alt="Tennis" />
            <img src={emaImage} alt="Ema" />
            <img src={horseImage} alt="Horse Riding" />
          </div>
        </div>
      </section>

      {/* Social Media Icons */}
      <section className="content">
        <div className="content-item">
          <p>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/in/emabudaite/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;

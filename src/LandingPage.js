import React from 'react';
import './LandingPage.css';
import Img from './Img';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <video id="bg-video" autoPlay muted loop>
        <source src="https://media.istockphoto.com/id/1222308730/video/old-movie-countdown-film-reel.mp4?s=mp4-640x640-is&k=20&c=uX7mg-Fay_LWgsQ2oEpG4jlD4t42LQKwjtNKcWwHpLI=" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <div className="landing-content">
          <h1>Welcome to MovieZone</h1>
          <p>Your one-stop destination for the latest and greatest movies.</p>
          <button className="explore-btn">Explore Now</button>
        </div>
      </div>
  <Img/>
    </div>
  );
};

export default LandingPage;

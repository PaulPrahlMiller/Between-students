import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

const LandingHome = () => {
  const landingPic = require('../../assets/landing-top.jpg');

  return (
    <div class='card bg-dark text-white'>
      <img src={landingPic} class='card-img' alt='...' />
      <div class='card-img-overlay div__overlayCard'>
        <h5 class='card-title mt-5'>
          A world of <br></br> Second-Hand <br></br>Magic!
        </h5>
        <p class='card-text'>
          Modern, simple and minimal impact on our neighborhood and environment.<br></br>
        </p>
        <Link to='/register' class='btn btn-light my-3'>
          Shop now
        </Link>
      </div>
    </div>
  );
};

export default LandingHome;

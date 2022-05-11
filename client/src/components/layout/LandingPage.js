import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './landing.css';

const LandingHome = () => {
  const landingPic = require('../../assets/landing-top.jpg');
  // const sofa = require('../../assets/cover-sofa.png');
  const decorations = require('../../assets/decorations.jpg');
  const stationery = require('../../assets/stationery.jpg');
  const lighting = require('../../assets/lighting.jpg');

  return (
    <div class='container-sm flex-direction-column'>
      <div class='card bg-dark text-white'>
        <img src={landingPic} class='card-img' alt='...' />
        <div class='card-img-overlay div__overlayCard'>
          <h5 class='card-title mt-5 h5__landing'>
            A world of <br></br> Second-Hand <br></br>Magic!
          </h5>
          <p class='card-text p__landing'>
            Modern, simple and minimal impact on our neighborhood and environment.
            <br></br>
          </p>
          <div class='button__landing'>
            <Link to='/' class='btn btn-light my-3 '>
              Shop now
            </Link>
          </div>
        </div>
      </div>
      <div class='row gx-5'>
        <div class='col-md-4 my-5'>
          <Link to={'/search/tables'}>
            <img class='img-fluid' alt='img' src={stationery}></img>
          </Link>
        </div>
        <div class='col-md-4 my-5'>
          <Link to={`/search/lamps`}>
            <img class='img-fluid' alt='img' src={lighting}></img>
          </Link>
        </div>
        <div class='col-md-4 my-5'>
          <Link to={'/search/decorations'}>
            <img class='img-fluid' alt='img' src={decorations}></img>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingHome;

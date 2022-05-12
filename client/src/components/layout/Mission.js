import React from 'react';
import { Link } from 'react-router-dom';
import './mission.css';

const Mission = () => {
  const titlePage = require('../../assets/hkr-students.jpg');
  const chairs = require('../../assets/chairs_outside.jpg');
  const amused = require('../../assets/amused.jpg');
  const surprised = require('../../assets/woman-blue.jpg');

  return (
    <div class='container-sm flex-direction-column'>
      <div class='container-sm'>
        <img class='img-fluid' alt='img' src={titlePage}></img>
      </div>
      <div class='container-sm py-3 text__header'>
        <p class='textEmbed'>OUR MISSION</p>
        <h2>From throwing away to better use.</h2>
        <div class='container-sm text__underHeader flex-direction-row'>
          <p>
            We know how difficult it is to move to a new city to study.<br></br> We also
            know how stressful it is to get rid of things you used <br></br> but no longer
            need after graduation.<br></br> We are here to present you 'Between Students':
            <br></br> A second hand marketplace only for students in Kristianstad
            University.
          </p>
          <img
            class='img-fluid img__leaves'
            alt='img'
            src='https://djc49bfkedftq.cloudfront.net/fit-in/110x110/filters:format(png)/webApp/stickers/sticker_leaves_green.png'
          ></img>
        </div>
      </div>
      <div class='row gx-5 div__wrapperCards'>
        <div class='col-md-3 wrapper__img'>
          <img class='img-fluid img__insideCard' alt='img' src={chairs}></img>
        </div>
        <div class='col-md-9 text__underHeaderTwo'>
          <p>
            Does this photo look familiar to you who live close by Kristianstad
            University? <br></br>When people ditch their stuff out in the open, or beside
            garbage bins,
            <br></br>
            what is going to happen to our nature? <br></br> How does it look like in our
            neighborhood?<br></br>
          </p>
        </div>
      </div>
      <div class='container-sm pt-5 text__header'>
        <p class='textEmbed'>WHAT WE DO</p>
        <h2>A platform developed only for students.</h2>
        <div class='text__underHeader'>
          <p>
            'Between Students' is a trading platform only for students <br></br> who study
            in Kristianstad University.<br></br> On 'Between Students', you can put your
            furniture, books, household items and etc <br></br>on sale whenever you want
            to. At the same time, you can browse and buy items <br></br> on the platform
            from other students.
          </p>
        </div>
      </div>
      <div class='row gx-5 py-3'>
        <div class='col-md-6 text__underHeaderThree'>
          <p>
            By using 'Between Students', you are not only helping to make our collective
            living areas look cleaner, but also are helping to reduce the impact of
            consumption on climate.
          </p>
        </div>
        <div class='col-md-6'>
          <img class='img-fluid' alt='img' src={amused}></img>
        </div>
      </div>
      <div class='row gx-5 py-3 pb-5 flex-direction-column'>
        <div class='col-md-6'>
          <img class='img-fluid' alt='img' src={surprised}></img>
        </div>
        <div class='col-md-6'>
          <div class='row-md-4 text__underHeaderThree'>
            <p>
              We made it super easy and simple for you to start trading on our platform.
              <br />
            </p>
          </div>
          <div class='row-md-2 link__register'>

            <Link to='/register' class='btn btn-dark my-3 hover__link'>

              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;

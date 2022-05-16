import React from 'react';

const TeamPhoto = require('../../src/assets/team-header.png');
const TeamPhoto_Tian = require('../../src/assets/tian1.png');
const TeamPhoto_Zijie = require('../../src/assets/Zijie.jpg');
const TeamPhoto_Paul = require('../../src/assets/paul.jpg');
const TeamPhoto_Frank = require('../../src/assets/Frank.jpg');
const TeamPhoto_Meron = require('../../src/assets/Meron.jpg');

const About = () => {
  return (
    <div className='container'>
      <div>
        <div>{<img src={TeamPhoto} className='coverphoto' alt='..' />}</div>
      </div>

      <div className='row gx-5 py-3'>
        <div className='col-md-3'>
          <img
            className='img-fluid img-thumbnail rounded mx-auto d-block'
            alt='img'
            src={TeamPhoto_Tian}
            height={300}
            width={210}
          ></img>
        </div>
        <div className='col-md-3'>
          <div className='mx-auto'>
            <h4 className='text-center'>Tian Yao</h4>
            <h5 className='text-center'>Full-stack developer</h5>
            <p className='text-center'>
              I am a second year student in Software Development program. I have a burning
              passion for full-stack web development. I am curious, creative and
              fast-learning. I love challenges and the feeling of solving them.
            </p>
          </div>
        </div>

        <div className='col-md-3'>
          <img
            className='img-fluid img-thumbnail rounded mx-auto d-block'
            alt='img'
            src={TeamPhoto_Zijie}
            height={300}
            width={210}
          ></img>
        </div>
        <div className='col-md-3 '>
        <div className='mx-auto'>
          <h4 className='text-center'>Zijie</h4>
            <h5 className='text-center'>QA test analyst</h5>
            <p className='text-center'>
              I studied software engineering and now work as a test automation engineer. I
              like to learn new stuff and keep growing my skills.
            </p>
        </div> 
        </div>
      </div>

      <div className='row gx-5 py-3'>
        <div className='col-md-3'>
          <img
            className='img-fluid img-thumbnail rounded mx-auto d-block'
            alt='img'
            src={TeamPhoto_Meron}
            height={300}
            width={210}
          ></img>
        </div>
        <div className='col-md-3'>
          <h4 className='text-center'>Meron Habtemichael</h4>
          <h5 className='text-center'>Full-stack developer</h5>
          <p className='text-center'>A second year software development student and using the help of MERN stack,
           I can build a full-stack web applications. 
           I like solving client-business problems and in this project, I was mainly the backend guy.</p>
        </div>

        <div className='col-md-3'>
          <img
            className='img-fluid img-thumbnail rounded mx-auto d-block'
            alt='img'
            src={TeamPhoto_Frank}
            height={300}
            width={210}
          ></img>
        </div>
        <div className='col-md-3 '>
          <h4 className='text-center'>Frank Yuan</h4>
          <h5 className='text-center'>Frontend Developer</h5>
          <p className='text-center'>
            I am deeply interested in the Frontend development as well as Backend. In this
            project, I am responsible for the Frontend development of Dashboard that
            programmed by React.
          </p>
        </div>
      </div>

      <div className='row gx-5 py-3'>
        <div className='col-md-3'>
          <img
            className='img-fluid img-thumbnail rounded mx-auto d-block'
            alt='img'
            src={TeamPhoto_Paul}
            height={300}
            width={210}
          ></img>
        </div>
        <div className='col-md-3'>
          <h4 className='text-center'>Paul Miller</h4>
          <h5 className='text-center'>Full-stack developer</h5>
          <p className='text-center'>
            A second year student in Software Development. Passionate about web
            development and always looking to learn new and exciting technologies that
            allow me to create better experiences for users on the web.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

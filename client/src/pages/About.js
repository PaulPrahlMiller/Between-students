import React from 'react';

const TeamPhoto_Tian = require('../../src/assets/Tian.jpg')
const TeamPhoto_Zijie = require('../../src/assets/Zijie.jpg')
const TeamPhoto_Paul = require('../../src/assets/Tian.jpg')
const TeamPhoto_Frank = require('../../src/assets/Frank.jpg')
const TeamPhoto_Meron = require('../../src/assets/Meron.jpg')


const About = () => {
    //return <h1>About Page</h1>;
    return <div className="about">

{/*1 profolio*/}
        <div className="aboutcontainer">
            <div className="aboutphoto1">
            {<img src={TeamPhoto_Tian} className="aboutphoto1"  alt="about_photo" />}          
            </div>
            <div className="abouttext1">
                <h1 className="aboutname"> Tian Yao</h1>
                <h1 className="abouttitle1"> Full-stack developer</h1>
                <p className="aboutintrotext1"> She is studying in Computer Science</p>
            </div>
        </div>

{/*2 profolio*/}
        <div className="aboutcontainer">
            <div className="aboutphoto1">
                {<img src={TeamPhoto_Zijie} className="aboutphoto1" alt="about_photo" />}
            </div>
            <div className="abouttext1">
                <h1 className="aboutname"> Zijie Feng</h1>
                <h1 className="abouttitle1"> Test analyst</h1>
                <p className="aboutintrotext1"> He is working as a QA analyst</p>
            </div>
        </div>
{/*3 profolio*/}
        <div className="aboutcontainer">
            <div className="aboutphoto1">
                {<img src={TeamPhoto_Meron} className="aboutphoto1" alt="about_photo" />}
            </div>
            <div className="abouttext1">
                <h1 className="aboutname"> Meron Habtemichael</h1>
                <h1 className="abouttitle1"> Full-stack developer</h1>
                <p className="aboutintrotext1"> He is a CS student.</p>
            </div>
        </div>

{/*4 profolio*/}
        <div className="aboutcontainer">
            <div className="aboutphoto1">
                {<img src={TeamPhoto_Paul} className="aboutphoto1" alt="about_photo" />}
            </div>
            <div className="abouttext1">
                <h1 className="aboutname"> Full name</h1>
                <h1 className="abouttitle1"> title</h1>
                <p className="aboutintrotext1"> info</p>
            </div>
        </div>

{/*5 profolio*/}
        <div className="aboutcontainer">
            <div className="aboutphoto1">
                {<img src={TeamPhoto_Frank} className="aboutphoto1" alt="about_photo" />}
            </div>
            <div className="abouttext1">
                <h1 className="aboutname">Frank Yuan</h1>
                <h1 className="abouttitle1"> Frontend Developer</h1>
                <p className="aboutintrotext1"> He is a CS student</p>
            </div>
        </div>


    </div>;
};

export default About;

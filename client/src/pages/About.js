import React from 'react';

const TeamPhoto = require('../../src/assets/aboutpageheader.jpg')
const TeamPhoto_Tian = require('../../src/assets/tian1.png')
const TeamPhoto_Zijie = require('../../src/assets/Zijie.jpg')
const TeamPhoto_Paul = require('../../src/assets/tian1.png')
const TeamPhoto_Frank = require('../../src/assets/Frank.jpg')
const TeamPhoto_Meron = require('../../src/assets/Meron.jpg')


const About = () => {
    //return <h1>About Page</h1>;
    return <div className="aboutpagestyle">
        <div class="cover">
            <div className="coverphototext">
                About Us
            </div>
            <div class="coverphoto">
                {<img src={TeamPhoto} className="coverphoto" alt="cover_photo" />}
            </div>
        </div>
        {/*card group*/ }

        <div class="row row-cols-1 row-cols-md-5 g-4">
            {/*Tian Yao*/}
            <div class="col">
                <div class="card">
                    <img src={TeamPhoto_Tian} />
                    <div class="card-body">
                        <h4 class="card-title">Tian Yao</h4>
                        <h5 class="card-text">
                            Full-stack developer
                        </h5>
                        <p class="card-text">
                            She is studying in Computer Science
                        </p>
                    </div>
                </div>
            </div>
            {/*Zijie*/}
            <div class="col">
                <div class="card">
                    <img src={TeamPhoto_Zijie} />
                    <div class="card-body">
                        <h4 class="card-title">Tian Yao</h4>
                        <h5 class="card-text">
                            Full-stack developer
                        </h5>
                        <p class="card-text">
                            She is studying in Computer Science
                        </p>
                    </div>
                </div>
            </div>
            {/*Paul*/}
            <div class="col">
                <div class="card">
                    <img src={TeamPhoto_Paul} />
                    <div class="card-body">
                        <h4 class="card-title">Paul</h4>
                        <h5 class="card-text">
                            Full-stack developer
                        </h5>
                        <p class="card-text">
                            She is studying in Computer Science
                        </p>
                    </div>
                </div>
            </div>
            {/*Meron*/}
            <div class="col">
                <div class="card">
                    <img src={TeamPhoto_Meron} />
                    <div class="card-body">
                        <h4 class="card-title">Meron Habtemichael</h4>
                        <h5 class="card-text">
                            Full-stack developer
                        </h5>
                        <p class="card-text">
                            He is a CS student.
                        </p>
                    </div>
                </div>
            </div>
            {/*Frank*/}
            <div class="col">
                <div class="card">
                    <img src={TeamPhoto_Frank}/>
                    <div class="card-body">
                        <h4 class="card-title">Frank Yuan</h4>
                        <h5 class="card-text">
                            Frontend Developer
                        </h5>
                        <p class="card-text">
                            He is a CS student.
                        </p>
                    </div>
                </div>
            </div>



  

        </div>

    </div>;
};

export default About;

import React from 'react';

const footerPhoto = require('../../assets/footer_photo.jpg');

const facebookIcon = require('../../assets/facebook.jpg');
const instagramIcon = require('../../assets/instagram.jpg');
const twitterIcon = require('../../assets/twitter.jpg');

const Footer = () => {
  return (
    <div className='footer'>
      <img src={footerPhoto} className='footerphoto' alt='footer_photo' />
      <div className='footerphototext'>
        <span>Follow us on social media!</span>
        <br />
        <img src={instagramIcon} className='instagramicon' alt='instagram_icon' />
        <img src={facebookIcon} className='facebookicon' alt='facebook_icon' />
        <img src={twitterIcon} className='twittericon' alt='twitter_icon' />
        <br />
        <span>2022 Student Life</span>
      </div>
    </div>
  );
};

export default Footer;

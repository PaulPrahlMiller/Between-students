import React from 'react';

const coverPhoto = require('../../assets/cover_photo.jpg');

const Header = () => {
  return (
    <div className='cover'>
      <img src={coverPhoto} className='coverphoto' alt='cover_photo' />
      <div className='coverphototext'>
        <span>Between Students</span>
        <br />
      </div>
    </div>
  );
};

export default Header;

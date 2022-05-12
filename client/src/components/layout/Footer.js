<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { MDBFooter, MDBIcon } from 'mdb-react-ui-kit';
=======
﻿import React from 'react';

const footerPhoto = require('../../assets/footer_photo.jpg');

const facebookIcon = require('../../assets/facebook.jpg');
const instagramIcon = require('../../assets/instagram.jpg');
const twitterIcon = require('../../assets/twitter.jpg');
>>>>>>> eb86a391a501c27215fd2f6ac846c897d9b3f90f

const Footer = () => {
  return (
    <MDBFooter className='bg-light text-center text-white'>
      <div className='container p-4 pb-0'>
        <section className='mb-4'>
          <Link
            to={'/facebook'}
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#3b5998' }}
          >
            <MDBIcon fab icon='facebook-f' />
          </Link>
          <Link
            to={'/twitter'}
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#55acee' }}
          >
            <MDBIcon fab icon='twitter' />
          </Link>

          <Link
            to={'/google'}
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#dd4b39' }}
          >
            <MDBIcon fab icon='google' />
          </Link>
          <Link
            to={'/instagram'}
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#ac2bac' }}
          >
            <MDBIcon fab icon='instagram' />
          </Link>

          <Link
            to={'/linkedin'}
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#0082ca' }}
          >
            <MDBIcon fab icon='linkedin-in' />
          </Link>

          <Link
            to={'/github'}
            className='btn btn-primary btn-floating m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </Link>
        </section>
      </div>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <Link to={'/'} className='text-white'>
          BetweenStudents.com
        </Link>
      </div>
    </MDBFooter>
  );
};

export default Footer;

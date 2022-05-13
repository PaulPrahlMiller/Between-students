import React from 'react';
import { Link } from 'react-router-dom';
import { MDBFooter, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter className='bg-light text-center text-white'>
      <div className='container p-4 pb-0'>
        <section className='mb-4'>
          <Link
            to={'/facebook'}
            className='btn btn-primary btn-floating m-1 px-3'
            style={{
              backgroundColor: '#3b5998',
              border: 'none',
              boxShadow: '1px 3px 6px 1px rgba(100,100,100,0.8)'
            }}
          >
            <MDBIcon fab icon='facebook-f' />
          </Link>
          <Link
            to={'/twitter'}
            className='btn btn-primary btn-floating m-1'
            style={{
              backgroundColor: '#55acee',
              border: 'none',
              boxShadow: '1px 3px 6px 1px rgba(100,100,100,0.8)'
            }}
          >
            <MDBIcon fab icon='twitter' />
          </Link>

          <Link
            to={'/google'}
            className='btn btn-primary btn-floating m-1'
            style={{
              backgroundColor: '#dd4b39',
              border: 'none',
              boxShadow: '1px 3px 6px 1px rgba(100,100,100,0.8)'
            }}
          >
            <MDBIcon fab icon='google' />
          </Link>
          <Link
            to={'/instagram'}
            className='btn btn-primary btn-floating m-1'
            style={{
              backgroundColor: '#ac2bac',
              border: 'none',
              boxShadow: '1px 3px 6px 1px rgba(100,100,100,0.8)'
            }}
          >
            <MDBIcon fab icon='instagram' />
          </Link>

          <Link
            to={'/linkedin'}
            className='btn btn-primary btn-floating m-1'
            style={{
              backgroundColor: '#0082ca',
              border: 'none',
              boxShadow: '1px 3px 6px 1px rgba(100,100,100,0.8)'
            }}
          >
            <MDBIcon fab icon='linkedin-in' />
          </Link>

          <Link
            to={'/github'}
            className='btn btn-primary btn-floating m-1'
            style={{
              backgroundColor: '#333333',
              border: 'none',
              boxShadow: '1px 3px 6px 1px rgba(100,100,100,0.8)'
            }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </Link>
        </section>
      </div>
      <div
        className='text-center p-3'
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          border: 'none',
          boxShadow: '1px 3px 6px 1px rgba(100,100,100,0.8)'
        }}
      >
        © 2022 Copyright:
        <Link to={'/'} className='text-white'>
          BetweenStudents.com
        </Link>
      </div>
    </MDBFooter>
  );
};

export default Footer;

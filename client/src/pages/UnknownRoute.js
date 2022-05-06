import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
//import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer';
import './UnknownRoute.css';

const UnknownRoute = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); // This is supposed to be the main Home page.
  };

  return (
    <div className='NotFoundBox'>
      <div className='NotFoundBodyDiv'>
        <h2 className='NotFoundMessage'>- Page not found -</h2>

        <button className='backButton' onClick={handleClick}>
          {' '}
          <span className='backButtonText'>Back to Home Page</span>
        </button>
      </div>
    </div>
  );
};

export default UnknownRoute;

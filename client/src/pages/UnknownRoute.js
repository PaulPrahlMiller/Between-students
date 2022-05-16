import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UnknownRoute.css';
import scrollTop from '../utils/scrollTop';

const UnknownRoute = () => {
  useEffect(() => {
    scrollTop('auto');
  }, []);

  let navigate = useNavigate();

  const handleClick = () => {
    navigate(-1); // Using -1 is equivalent to clicking back in the browser
  };

  return (
    <div className='NotFoundBox'>
      <div className='NotFoundBodyDiv'>
        <h2 className='NotFoundMessage'>- Page not found -</h2>

        <button className='backButton' onClick={handleClick}>
          {' '}
          <span className='backButtonText'>Go back</span>
        </button>
      </div>
    </div>
  );
};

export default UnknownRoute;

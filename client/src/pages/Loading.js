import React from 'react';
import loadingIcon from '../assets/loadingIcon.gif';

const Loading = () => {
  return (
    <div id='loading-page'>
      <img src={loadingIcon} alt='Loading...' />
    </div>
  );
};

export default Loading;

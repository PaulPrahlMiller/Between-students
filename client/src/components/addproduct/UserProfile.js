import React from 'react';
import './Popup.css';

function ViewProfile(props) {
  return props.trigger ? (
    <div className='popup'>
      <div className='popup-inner'>
        <h4>Your email</h4>
        <p>{props.email}</p>
        <button className='close-btn' onClick={() => props.setTrigger(false)}>
          Close
        </button>
      </div>
      {props.children}
    </div>
  ) : (
    ''
  );
}

export default ViewProfile;

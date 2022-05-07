import React from 'react';
import './Popup.css';

function InsightPopup(props) {
  return props.trigger ? (
    <div className='popup'>
      <div className='popup-inner'>
        <h4>Clicks on listings</h4>
        <p>{props.clicks}</p>
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

export default InsightPopup;

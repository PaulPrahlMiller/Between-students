import React from 'react';
import './Popup.css';

function Popup(props) {
  return props.trigger ? (
    <div className='popup'>
      <div className='popup-inner'>
        <p>{props.des}</p>
        {console.log(props.des)}
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

export default Popup;

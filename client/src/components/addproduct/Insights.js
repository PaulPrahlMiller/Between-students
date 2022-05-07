import React, { useState } from 'react';
import './insights.css';
import {
  IoEyeOutline,
  IoShareSocialOutline,
  IoBookmarkOutline,
  IoListOutline
} from 'react-icons/io5';
import InsightPopup from './InsightPopup';

const Insights = () => {
  const [btnClicked, setBtnClicked] = useState(false);
  const [btnClickedTwo, setBtnClickedTwo] = useState(false);
  const [btnClickedThree, setBtnClickedThree] = useState(false);
  const [btnClickedFour, setBtnClickedFour] = useState(false);
  const clicksPopup =
    'This is the number of times people have clciked through to the details page of your listing on Student Hub.';
  const listingShare = 'This is the number of times your Student Hub listing was shared.';
  const listingsaves = 'This is the number of times your Student Hub listing was saved.';
  const listingActive = 'This is the number of your listings on Student Hub.';
  const handleClickone = () => {
    setBtnClicked(true);
  };

  const handleClicktwo = () => {
    setBtnClickedTwo(true);
  };

  const handleClickthree = () => {
    setBtnClickedThree(true);
  };

  const handleClickFour = () => {
    setBtnClickedFour(true);
  };

  return (
    <div class='div__insights'>
      <div class='div__innerRow' onClick={handleClickone}>
        <div class='div__clicks'>
          <div class='div__iconClick'>
            <IoEyeOutline size={20} />
          </div>
          <h3>71</h3>
        </div>
        <span>Clicks on listings</span>
      </div>
      <InsightPopup
        clicks={clicksPopup}
        trigger={btnClicked}
        setTrigger={setBtnClicked}
      />
      <div class='div__innerRow' onClick={handleClicktwo}>
        <div class='div__clicks'>
          <div class='div__iconClick'>
            <IoShareSocialOutline size={20} />
          </div>
          <h3>2</h3>
        </div>
        <span>Listing shares</span>
      </div>
      <InsightPopup
        clicks={listingShare}
        trigger={btnClickedTwo}
        setTrigger={setBtnClickedTwo}
      />
      <div class='div__innerRow' onClick={handleClickthree}>
        <div class='div__clicks'>
          <div class='div__iconClick'>
            <IoBookmarkOutline size={20} />
          </div>
          <h3>71</h3>
        </div>
        <span>Listing saves</span>
      </div>
      <InsightPopup
        clicks={listingsaves}
        trigger={btnClickedThree}
        setTrigger={setBtnClickedThree}
      />
      <div class='div__innerRow' onClick={handleClickFour}>
        <div class='div__clicks'>
          <div class='div__iconClick'>
            <IoListOutline size={20} />
          </div>
          <h3>10</h3>
        </div>
        <span>Active listings</span>
      </div>
      <InsightPopup
        clicks={listingActive}
        trigger={btnClickedFour}
        setTrigger={setBtnClickedFour}
      />
    </div>
  );
};

export default Insights;

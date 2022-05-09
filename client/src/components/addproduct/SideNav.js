import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './UseProducts.module.css';
import './sideNav.css';
import ViewProfile from './UserProfile';
import { VscDashboard, VscAdd } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TiTags, TiUserOutline } from 'react-icons/ti';
import { CgInsights } from 'react-icons/cg';

const SideNavBar = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  const [buttonProfile, setButtonProfile] = useState(false);

  useEffect(() => {
    axios('http://localhost:5000/api/user').then((response) => {
      var user_data = response.data;
      console.log('original data in first useEffect', user_data);
      setProfile(user_data);
      console.log('printing user profile', profile);
    });
  }, []);

  useEffect(() => {
    // console.log('changed profile', profile);
  }, [profile]);

  return (
    <div class='sidenav'>
      <div class='container__sideBarTopBtn'>
        <button
          className={styles.btnItem}
          onClick={() => {
            navigate('/create-item');
          }}
        >
          <VscAdd></VscAdd>
          Create new listing
        </button>
      </div>

      <div className={styles.div__sideNavListing}>
        <TiTags size={20}></TiTags>
        <a
          href='#listing'
          onClick={() => {
            navigate('/user-listing');
          }}
        >
          Your listings
        </a>
      </div>
      <div className={styles.div__sideNavListing}>
        <TiUserOutline size={20}></TiUserOutline>
        <a href='#profile' onClick={() => setButtonProfile(true)}>
          Your profile
        </a>
        {/* <button onClick={setButtonProfile(true)}>Your profile</button> */}
        <ViewProfile
          email={profile.email}
          trigger={buttonProfile}
          setTrigger={setButtonProfile}
        ></ViewProfile>
      </div>
      <div className={styles.div__sideNavListing}>
        <CgInsights size={20}></CgInsights>
        <a
          href='#clients'
          onClick={() => {
            navigate('/insights');
          }}
        >
          Insights
        </a>
      </div>
    </div>
  );
};

export default SideNavBar;

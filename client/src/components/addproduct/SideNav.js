import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import './sideNav.css';
import UseProducts from './UseProducts';
import AddProduct from './AddProduct';
import Insights from './Insights';

const SideNavBar = () => {
  const [profile, setProfile] = useState([]);
  const [verticalActive, setVerticalActive] = useState('tab1');

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

  useEffect(() => {
    axios('/api/user').then((response) => {
      var user_data = response.data;
      // console.log('original data in first useEffect', user_data);
      setProfile(user_data);
    });
  }, []);

  useEffect(() => {}, [profile]);

  return (
    <div>
      <MDBTabs className='mb-3 justify-content-md-center'>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleVerticalClick('tab1')}
            active={verticalActive === 'tab1'}
          >
            Your Listing
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleVerticalClick('tab2')}
            active={verticalActive === 'tab2'}
          >
            Profile
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleVerticalClick('tab3')}
            active={verticalActive === 'tab3'}
          >
            Insights
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleVerticalClick('tab4')}
            active={verticalActive === 'tab4'}
          >
            Sell
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={verticalActive === 'tab1'}>
          <UseProducts></UseProducts>
        </MDBTabsPane>
        <MDBTabsPane show={verticalActive === 'tab2'}>
          Your email <br></br>
          {profile.email}
        </MDBTabsPane>
        <MDBTabsPane show={verticalActive === 'tab3'}>
          <Insights></Insights>
        </MDBTabsPane>
        <MDBTabsPane show={verticalActive === 'tab4'}>
          <AddProduct></AddProduct>
        </MDBTabsPane>
      </MDBTabsContent>
    </div>
  );
};

export default SideNavBar;

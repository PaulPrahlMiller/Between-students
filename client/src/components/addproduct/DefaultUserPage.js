import React from 'react';
import SideNavBar from './SideNav';
import UseProducts from './UseProducts';
import { Fragment } from 'react';

const ShowDefaultUser = () => {
  return (
    <Fragment>
      <SideNavBar></SideNavBar>;<UseProducts></UseProducts>
    </Fragment>
  );
};

export default ShowDefaultUser;

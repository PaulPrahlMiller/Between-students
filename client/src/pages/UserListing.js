import React, { Fragment } from 'react';
import UseProducts from '../components/addproduct/UseProducts';
import SideNavBar from '../components/addproduct/SideNav';

const ViewListing = () => {
  return (
    <Fragment>
      <SideNavBar></SideNavBar>
      <UseProducts></UseProducts>
    </Fragment>
  );
};

export default ViewListing;

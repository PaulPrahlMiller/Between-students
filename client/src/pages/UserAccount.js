import React, { Fragment } from 'react';
import AddProduct from '../components/addproduct/AddProduct';
import UseProducts from '../components/addproduct/UseProducts';

const UserAccount = () => {
  return (
    <Fragment>
      <UseProducts />
      <AddProduct />
    </Fragment>
  );
};

export default UserAccount;

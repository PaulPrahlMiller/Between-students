import React, { Fragment, useEffect } from 'react';
import ShowDefaultUser from '../components/addproduct/DefaultUserPage';
import scrollTop from '../utils/scrollTop';

const UserAccount = () => {
  useEffect(() => {
    scrollTop('auto');
  }, []);

  return (
    <Fragment>
      <ShowDefaultUser></ShowDefaultUser>
    </Fragment>
  );
};

export default UserAccount;

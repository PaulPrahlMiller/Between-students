import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import useProducts from '../../hooks/useProducts';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../context/auth/AuthState';
import setAuthToken from '../../utils/setAuthToken';

import { clearFilter } from '../../context/product/ProductState';

const accountIcon = require('../../assets/account_icon.jpg');

const Navbar = () => {
  const pathname = window.location.href.split('/').pop();
  const [ProductState, productDispatch] = useProducts();
  const [authState, authDispatch] = useAuth();
  const { categories } = ProductState;
  const { isAuthenticated } = authState;
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (e.target.tagName === 'OPTION') {
      navigate(`/categories/${e.target.innerText}`);
    }
  };

  const handleLogout = () => {
    logout(authDispatch);
    setAuthToken(null);
  };

  return (
    <div className='topnav'>
      <Link to='/' className={pathname === '' && 'active'}>
        Home
      </Link>

      <div className='subnav' onClick={handleClick}>
        <button className='subnavbtn'>Categories</button>
        <div className='subnav-content'>
          {categories.map((category) => {
            return (
              <option value={category} key={category.id}>
                {category}
              </option>
            );
          })}
        </div>
      </div>
      <Link to='/about' className={pathname === 'about' && 'active'}>
        About Us
      </Link>
      <Link to='/mission'>Mission</Link>
      <Link to='/landing'>Landing</Link>
      <div className='accountnav'>
        {isAuthenticated ? (
          <Fragment>
            <Link to='/' onClick={handleLogout} id='logout-link'>
              Logout
            </Link>
            <Link to='/account' className={pathname === 'account' && 'active'}>
              <img src={accountIcon} className='accounticon' alt='account_icon' />
            </Link>
          </Fragment>
        ) : (
          <Link to='/login'>Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';
import useProducts from '../../hooks/useProducts';
import { Link, useNavigate } from 'react-router-dom';

const accountIcon = require('../../assets/account_icon.jpg');

const Navbar = () => {
  const pathname = window.location.href.split('/').pop();
  const [ProductState, productDispatch] = useProducts();
  const navigate = useNavigate();
  const handleClick = (e) => {
    console.log(e.target.innerText);
    navigate(`/categories/${e.target.innerText}`);
  };
  return (
    <div className='topnav'>
      <Link to='/' className={pathname === '' && 'active'}>
        Home
      </Link>

      <div className='subnav' onClick={handleClick}>
        <button className='subnavbtn'>Categories</button>
        <div className='subnav-content'>
          {ProductState.categories.map((cat) => {
            return (
              <option value={cat} key={cat.id}>
                {cat}
              </option>
            );
          })}
        </div>
      </div>
      <Link to='/about' className={pathname === 'about' && 'active'}>
        About Us
      </Link>
      <div className='accountnav'>
        <Link to='/account' className={pathname === 'account' && 'active'}>
          <img src={accountIcon} className='accounticon' alt='account_icon' />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

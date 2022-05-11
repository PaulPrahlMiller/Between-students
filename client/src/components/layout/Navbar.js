import React from 'react';
import useProducts from '../../hooks/useProducts';
import { useNavigate } from 'react-router-dom';

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
    <div class='topnav'>
      <a class={pathname === '' && 'active'} href='/'>
        Home
      </a>

      <div class='subnav' onClick={handleClick}>
        <button class='subnavbtn'>Categories</button>
        <div class='subnav-content'>
          {ProductState.categories.map((cat) => {
            return (
              <option value={cat} key={cat.id}>
                {cat}
              </option>
            );
          })}
        </div>
      </div>
      <a class={pathname === 'about' && 'active'} href='/about'>
        About Us
      </a>
      <div class='accountnav'>
        <a class={pathname === 'account' && 'active'} href='/account'>
          <img src={accountIcon} class='accounticon' alt='account_icon' />
        </a>
      </div>
    </div>
  );
};

export default Navbar;

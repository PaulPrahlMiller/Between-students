import React, { Fragment, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import useAuth from '../../../hooks/useAuth';
import { logout } from '../../../context/auth/AuthState';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [ProductState, productDispatch] = useProducts();
  const [authState, authDispatch] = useAuth();
  const { categories } = ProductState;
  const { isAuthenticated } = authState;
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (e) => {
    if (e.target.tagName === 'A') {
      setIsMenuOpen(false);
    } else if (
      e.target.tagName === 'BUTTON' ||
      e.target.parentElement.tagName === 'BUTTON'
    ) {
      setIsMenuOpen((current) => !current);
    }
  };

  const handleLogout = () => {
    logout(authDispatch);
  };

  const lineStyle = isMenuOpen
    ? `${styles.menuLine} ${styles.expanded}`
    : styles.menuLine;

  const activeLink = {
    color: '#f65a00'
  };

  return (
    <nav className={styles.navbar} onClick={handleClick}>
      <div className={styles.navBranding}>LOGO</div>
      {/* <div className={styles.categoryToggle}>Categories</div> */}
      <div
        className={isMenuOpen ? `${styles.navMenu} ${styles.expanded}` : styles.navMenu}
      >
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <NavLink
              to='/'
              className={styles.navLink}
              style={({ isActive }) => (isActive ? activeLink : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to='/search'
              className={styles.navLink}
              style={({ isActive }) => (isActive ? activeLink : undefined)}
            >
              Search
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to='/categories'
              className={styles.navLink}
              style={({ isActive }) => (isActive ? activeLink : undefined)}
            >
              Categories
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to='/about'
              className={styles.navLink}
              style={({ isActive }) => (isActive ? activeLink : undefined)}
            >
              About
            </NavLink>
          </li>
          <li className={styles.navSpacer}></li>
          {isAuthenticated ? (
            <Fragment>
              <li className={styles.navItem}>
                <NavLink
                  to='/account'
                  className={styles.navLink}
                  style={({ isActive }) => (isActive ? activeLink : undefined)}
                >
                  account
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink
                  to='/'
                  className={styles.navLink}
                  onClick={handleLogout}
                  reloadDocument
                >
                  Logout
                </NavLink>
              </li>
            </Fragment>
          ) : (
            <Fragment>
              <li className={styles.navItem}>
                <NavLink
                  to='/login'
                  className={styles.navLink}
                  style={({ isActive }) => (isActive ? activeLink : undefined)}
                >
                  Login
                </NavLink>
              </li>
              <li className={styles.navItem}>
                <NavLink
                  to='/register'
                  className={styles.navLink}
                  style={({ isActive }) => (isActive ? activeLink : undefined)}
                >
                  Register
                </NavLink>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
      <button id={styles.menuButton}>
        <div className={lineStyle}></div>
        <div className={lineStyle}></div>
        <div className={lineStyle}></div>
      </button>
    </nav>
  );
};

export default Navbar;

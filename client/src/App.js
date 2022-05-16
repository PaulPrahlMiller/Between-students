import React from 'react';
import './App.css';
import styles from './App.module.css';
import Navbar from './components/layout/Navbar/Navbar';
import Footer from './components/layout/Footer';
import { Outlet } from 'react-router-dom';
import Alert from './components/layout/Alert/Alert';

function App() {
  return (
    <div className='app'>
      <div className={styles.mainContent}>
        <Navbar />
        <div className={styles.contentContainer}>
          <Alert />
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

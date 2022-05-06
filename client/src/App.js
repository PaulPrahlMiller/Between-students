import React from 'react';
import './App.css';
import styles from './App.module.css';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { Outlet } from 'react-router-dom';
import Alert from './components/layout/Alert/Alert';

function App() {
  return (
    <div className='app'>
      <Header />
      <Navbar />
      <div className={styles.mainContent}>
        <Alert />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;

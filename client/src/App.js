import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <div className='main-content'>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}


export default App;

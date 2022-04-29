import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { Outlet } from 'react-router-dom';
import AddProduct from './components/addproduct/AddProduct';

function App() {
  return (
    <div className='app'>
      <div className='main-content'>
        <Navbar />
        <Outlet />
        <AddProduct></AddProduct>
      </div>
      <Footer />
    </div>
  );
}


export default App;

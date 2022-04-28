import { useState, useEffect } from 'react';
import './App.css';
import Welcome from './components/welcome/Welcome';
import AddProduct from './components/addproduct/AddProduct';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      Hello to MERN APP <br />
      {/* <h1 style={{ textAlign: 'center' }}>Fullstack MERN application</h1>
      <Welcome message={message} /> */}
      <AddProduct></AddProduct>
    </div>
  );
}

export default App;

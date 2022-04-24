import React from 'react';
import './App.css';
import AuthState from './context/auth/AuthState';
import ProductState from './context/product/ProductState';

function App() {
  return (
    <AuthState>
      <ProductState>
        <div className='App'>
          <h1 style={{ textAlign: 'center' }}>Fullstack MERN application</h1>
        </div>
      </ProductState>
    </AuthState>
  );
}

export default App;

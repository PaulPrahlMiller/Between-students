import React from 'react';
import './App.css';
import Products from './components/Products';
import AuthState from './context/auth/AuthState';
import ProductState from './context/product/ProductState';

function App() {
  return (
    <AuthState>
      <ProductState>
        <Products />
      </ProductState>
    </AuthState>
  );
}

export default App;

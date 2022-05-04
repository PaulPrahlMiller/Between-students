import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import AuthState from './context/auth/AuthState';
import ProductState from './context/product/ProductState';
import Home from './pages/Home';
import About from './pages/About';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UserAccount from './pages/UserAccount';
import CreateProduct from './pages/CreateProduct';
import UnknownRoute from './pages/UnknownRoute';
import LoginForm from './components/auth/LoginForm/LoginForm';
import RegisterForm from './components/auth/RegisterForm/RegisterForm';
import Admin from './components/admin/Admin'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <ProductState>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route
                path='account'
                element={
                  <ProtectedRoute>
                    <UserAccount />
                  </ProtectedRoute>
                }
              />
              <Route
                path='create-item'
                element={
                  <ProtectedRoute>
                    <CreateProduct />
                  </ProtectedRoute>
                }
              />
              <Route path='login' element={<LoginForm />} />
              <Route path='register' element={<RegisterForm />} />
            </Route>
            <Route path='*' element={<UnknownRoute />} />
            <Route path='admin' element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </ProductState>
    </AuthState>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

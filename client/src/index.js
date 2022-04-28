import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthState from './context/auth/AuthState';
import ProductState from './context/product/ProductState';
import Home from './pages/Home';
import About from './pages/About';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UserAccount from './components/UserAccount';
import Login from './components/auth/Login';
import './index.css';
import App from './App';
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
              <Route path='login' element={<Login />} />
            </Route>
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

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import ProductState from './context/product/ProductState';
import ProductPage from './pages/ProductPage';
import Categories from './components/layout/Category/Categories';
import About from './pages/About';
import ProtectedRoute from './components/auth/ProtectedRoute';
import LandingHome from './components/layout/LandingPage';
import UserAccount from './pages/UserAccount';
import ViewListing from './pages/UserListing';
import CreateProduct from './pages/CreateProduct';
import Mission from './components/layout/Mission';
import ViewInsights from './pages/UserInsights';
import UnknownRoute from './pages/UnknownRoute';
import LoginForm from './components/auth/forms/LoginForm';
import RegisterForm from './components/auth/forms/RegisterForm';
import Admin from './components/admin/Admin';
import Product from './components/products/Product/Product';
import reportWebVitals from './reportWebVitals';
import ImagePreview from './components/products/Product/ImagePreview';

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <AlertState>
        <ProductState>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<App />}>
                <Route index element={<LandingHome />} />
                <Route path='/search' element={<ProductPage />} />
                <Route path='/search/:query' element={<ProductPage />} />
                <Route path='/categories/:category' element={<ProductPage />} />
                <Route path='/:category/:productId' element={<Product />} />
                <Route path='/categories' element={<Categories />} />
                <Route path='/mission' element={<Mission />} />
                <Route path='/about' element={<About />} />
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
                <Route
                  path='insights'
                  element={
                    <ProtectedRoute>
                      <ViewInsights />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path='user-listing'
                  element={
                    <ProtectedRoute>
                      <ViewListing />
                    </ProtectedRoute>
                  }
                />
                <Route path='login' element={<LoginForm />} />
                <Route path='register' element={<RegisterForm />} />
                <Route path='*' element={<UnknownRoute />} />
              </Route>
              <Route path='/preview/:productId' element={<ImagePreview />} />
              <Route path='admin' element={<Admin />} />
            </Routes>
          </BrowserRouter>
        </ProductState>
      </AlertState>
    </AuthState>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React, { Fragment, useEffect } from 'react';
import useProducts from '../../hooks/useProducts';
import Loading from '../../pages/Loading/Loading';
import { setLoading } from '../../context/product/ProductState';
import { Navigate } from 'react-router-dom';
import Header from '../layout/Header';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import styles from './Redirect.module.css';

const Redirect = () => {
  const [productState, productDispatch] = useProducts();

  const { loading } = productState;

  useEffect(() => {
    setTimeout(() => setLoading(productDispatch, false), 1000);
    return () => {
      setLoading(productDispatch, true);
    };
  }, [productDispatch]);

  if (loading) return <Loading />;

  return <Navigate to='/404' replace={true} />;
};

export default Redirect;

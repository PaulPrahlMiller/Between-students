import React, { useEffect } from 'react';
import useProducts from '../../hooks/useProducts';
import Loading from '../../pages/Loading/Loading';
import { setLoading } from '../../context/product/ProductState';
import { Navigate } from 'react-router-dom';

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

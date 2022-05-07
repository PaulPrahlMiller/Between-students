import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Loading from '../../../pages/Loading/Loading';
import Redirect from '../../routing/Redirect';
import styles from './Product.module.css';
import {
  clearCurrentProduct,
  setCurrentProduct,
  setLoading
} from '../../../context/product/ProductState';

const Product = () => {
  // Get the product ID from the url parameters
  const { productId } = useParams();

  const [productState, productDispatch] = useProducts();

  const { currentProduct, loading } = productState;

  useEffect(() => {
    setCurrentProduct(productDispatch, productId);
    setTimeout(() => setLoading(productDispatch, false), 1000);
    // Clean up function
    return () => {
      clearCurrentProduct(productDispatch);
      setLoading(productDispatch, true);
    };
  }, [productDispatch, productId]);

  if (loading) return <Loading />;

  if (currentProduct === undefined) return <Redirect />;

  return (
    <div className={styles.productContainer}>
      <h1>product</h1>
    </div>
  );
};

export default Product;

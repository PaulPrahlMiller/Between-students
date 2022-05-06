import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import UnknownRoute from '../../../pages/UnknownRoute';
import styles from './Product.module.css';
import {
  clearCurrentProduct,
  setCurrentProduct
} from '../../../context/product/ProductState';

const Product = () => {
  // Get the product ID from the url parameters
  const { productId } = useParams();

  const [productState, productDispatch] = useProducts();

  const { currentProduct } = productState;

  useEffect(() => {
    setCurrentProduct(productDispatch, productId);
    // Clean up function
    return () => clearCurrentProduct(productDispatch);
  }, [productDispatch, productId]);

  if (currentProduct === undefined) return <UnknownRoute />;

  return (
    <div className={styles.productContainer}>
      <h1>product</h1>
    </div>
  );
};

export default Product;

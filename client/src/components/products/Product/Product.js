import React, { useEffect, useRef } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Loading from '../../../pages/Loading/Loading';
import styles from './Product.module.css';
import {
  clearCurrentProduct,
  setCurrentProduct
} from '../../../context/product/ProductState';
import useLoading from '../../../hooks/useLoading';
import UnknownRoute from '../../../pages/UnknownRoute';

const Product = () => {
  // Get the product ID from the url parameters
  const { productId } = useParams();

  const [productState, productDispatch] = useProducts();

  const { products, currentProduct } = productState;

  useEffect(() => {
    if (products) {
      setCurrentProduct(productDispatch, productId);
    }
    return () => {
      clearCurrentProduct(productDispatch);
    };
  }, [productDispatch, productId, currentProduct, products]);

  const loading = useLoading(1000);

  if (loading) return <Loading />;

  if (currentProduct === undefined) return <UnknownRoute />;

  return (
    <div className={styles.productContainer}>
      <h1>product</h1>
    </div>
  );
};

export default Product;

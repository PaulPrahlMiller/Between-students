import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import styles from './ImagePreview.module.css';
import {
  clearCurrentProduct,
  setCurrentProduct
} from '../../../context/product/ProductState';

const ImagePreview = () => {
  const { productId } = useParams();

  const [productState, productDispatch] = useProducts();

  const { currentProduct } = productState;

  const navigate = useNavigate();

  useEffect(() => {
    setCurrentProduct(productDispatch, productId);

    return () => {
      clearCurrentProduct(productDispatch);
    };
  }, [productDispatch, productId]);

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className={styles.fullscreen}>
      <div className={styles.imageContainer}>
        <img
          src={currentProduct.productImage}
          className={styles.image}
          onClick={handleClick}
          alt={currentProduct.title}
        />
      </div>
      <button className={styles.closeButton} onClick={handleClick}>
        x
      </button>
    </div>
  );
};

export default ImagePreview;

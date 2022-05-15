import React, { Fragment, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Loading from '../../../pages/Loading/Loading';
import styles from './Product.module.css';
import useLoading from '../../../hooks/useLoading';
import UnknownRoute from '../../../pages/UnknownRoute';
import formatDate from '../../../utils/dateFormatter';
import scrollTop from '../../../utils/scrollTop';
import {
  clearCurrentProduct,
  setCurrentProduct
} from '../../../context/product/ProductState';

const Product = () => {
  // Get the product ID from the url parameters
  const { productId } = useParams();

  const [productState, productDispatch] = useProducts();

  const { products, currentProduct } = productState;

  const navigate = useNavigate();

  useEffect(() => {
    scrollTop('auto');
    if (products) {
      setCurrentProduct(productDispatch, productId);
    }
    return () => {
      clearCurrentProduct(productDispatch);
    };
  }, [productDispatch, productId, currentProduct, products]);

  const handleClick = () => {
    const path = currentProduct.productImage;
    navigate(`/preview/${path}`);
  };

  const loading = useLoading();

  if (loading) return <Loading />;

  if (currentProduct === undefined) return <UnknownRoute />;

  return currentProduct !== null ? (
    <div className={styles.productContainer}>
      <div className={styles.imageContainer}>
        <img
          src={`/uploads/${currentProduct.productImage}`}
          alt={currentProduct.title}
          className={styles.productImage}
          onClick={handleClick}
        />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.productHeading}>
          <div className={styles.productTitle}>{currentProduct.title}</div>
          <div className={styles.productCategory}>{currentProduct.category}</div>
        </div>
        <div className={styles.productMeta}>
          <div className={styles.productCost}>{currentProduct.cost} kr</div>
          <div className={styles.productDate}>{formatDate(currentProduct.createdAt)}</div>
        </div>
        <hr />
        <div className={styles.productDescription}>{currentProduct.description}</div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Product;

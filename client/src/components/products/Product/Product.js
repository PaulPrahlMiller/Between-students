import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Loading from '../../../pages/Loading/Loading';
import styles from './Product.module.css';
import {
  clearCurrentProduct,
  setCurrentProduct
} from '../../../context/product/ProductState';
import useLoading from '../../../hooks/useLoading';
import UnknownRoute from '../../../pages/UnknownRoute';
import ImagePreview from './ImagePreview';
import formatDate from '../../../utils/dateFormatter';

const Product = () => {
  // Get the product ID from the url parameters
  const { productId } = useParams();

  const [productState, productDispatch] = useProducts();

  const { products, currentProduct } = productState;

  const [showImage, setShowImage] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
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

  const loading = useLoading(1000);

  if (loading) return <Loading />;

  const date = formatDate(currentProduct.createdAt);

  if (currentProduct === undefined) return <UnknownRoute />;

  return (
    <Fragment>
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
            <div className={styles.productMeta}>
              <div className={styles.productCategory}>{currentProduct.category}</div>
              <div className={styles.productDate}>{date}</div>
            </div>
          </div>
          <hr />
          <div className={styles.productCost}>{currentProduct.cost} kr</div>
          <div className={styles.productDescription}>{currentProduct.description}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;

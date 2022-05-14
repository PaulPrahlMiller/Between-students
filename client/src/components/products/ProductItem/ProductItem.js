import React from 'react';
import styles from './ProductItem.module.css';
import { Link } from 'react-router-dom';
import formatDate from '../../../utils/dateFormatter';

const ProductItem = ({ product }) => {
  const date = formatDate(product.createdAt);

  return (
    <Link to={`/${product.category}/${product._id}`} style={{ all: 'unset' }}>
      <div className={styles.product}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={'/uploads/' + product.productImage}
            alt='the item'
          />
        </div>
        <div className={styles.productInfo}>
          <div className={styles.productHeader}>
            <div className={styles.productTitle}>{product.title}</div>
            <div className={styles.productCategory}>{product.category}</div>
          </div>
          <div className={styles.productMeta}>
            <div className={styles.productDate}>{date}</div>
            <div className={styles.productPrice}>{product.cost} kr</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;

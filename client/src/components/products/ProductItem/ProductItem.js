import React from 'react';
import styles from './ProductItem.module.css';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <Link to={`/${product._id}`} style={{ all: 'unset' }}>
      <div className={styles.product}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={'uploads/' + product.productImage}
            alt='the item'
          />
        </div>
        <div className={styles.productInfo}>
          <div className={styles.infoTop}>{product.title}</div>
          <div className={styles.infoMid}>{product.cost} SEK</div>
          <div className={styles.infoBottom}>{product.category}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;

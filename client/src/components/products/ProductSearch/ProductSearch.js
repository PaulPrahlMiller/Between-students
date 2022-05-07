import React, { useState } from 'react';
import { filterBySearch, clearFilter } from '../../../context/product/ProductState';
import useProducts from '../../../hooks/useProducts';
import styles from './ProductSearch.module.css';

const ProductSearch = () => {
  const [productState, productDispatch] = useProducts();

  const handleOnChange = (e) => {
    e.preventDefault();
    if (e.target.value === '') return clearFilter(productDispatch);
    filterBySearch(productDispatch, e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <form className={styles.searchBar}>
        <input
          className={styles.inputText}
          type='text'
          onChange={handleOnChange}
          placeholder='Search for products...'
        />
        <input className={styles.inputButton} type='submit' value='Search' />
      </form>
    </div>
  );
};

export default ProductSearch;

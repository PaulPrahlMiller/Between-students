import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { filterBySearch, clearFilter } from '../../../context/product/ProductState';
import useProducts from '../../../hooks/useProducts';
import styles from './ProductSearch.module.css';

const ProductSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { query } = useParams();

  console.log(query);

  const productDispatch = useProducts()[1];

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery === '') {
      navigate('/');
    } else {
      setSearchQuery('');
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <form className={styles.searchBar} onSubmit={handleSubmit}>
        <input
          className={styles.inputText}
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Search for products...'
        />
        <input className={styles.inputButton} type='submit' value='Search' />
      </form>
    </div>
  );
};

export default ProductSearch;

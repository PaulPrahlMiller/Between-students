import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAlert from '../../../hooks/useAlert';
import styles from './ProductSearch.module.css';

const ProductSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  const setAlert = useAlert()[1];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery !== '') {
      setSearchQuery('');
      navigate(`/search/${searchQuery}`);
    } else {
      setAlert('danger', 'Please enter a search term');
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

import React, { Fragment, useEffect } from 'react';
import ProductSearch from '../components/products/ProductSearch/ProductSearch';
import Products from '../components/products/Products/Products';
import { useParams } from 'react-router-dom';
import { clearFilter, filterBySearch } from '../context/product/ProductState';
import useProducts from '../hooks/useProducts';

const Home = () => {
  const { query } = useParams();

  const productDispatch = useProducts()[1];

  useEffect(() => {
    if (query === undefined) {
      clearFilter(productDispatch);
    } else {
      filterBySearch(productDispatch, query);
    }
  }, [productDispatch, query]);

  return (
    <Fragment>
      <ProductSearch />
      <Products />
    </Fragment>
  );
};

export default Home;

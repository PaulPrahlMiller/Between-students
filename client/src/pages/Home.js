import React, { Fragment, useEffect } from 'react';
import ProductSearch from '../components/products/ProductSearch/ProductSearch';
import Products from '../components/products/Products/Products';
import { useParams } from 'react-router-dom';
import {
  clearFilter,
  filterBySearch,
  filterByCategory
} from '../context/product/ProductState';
import useProducts from '../hooks/useProducts';

const Home = () => {
  const { query, category } = useParams();

  const [productState, productDispatch] = useProducts();

  const { products } = productState;

  useEffect(() => {
    if (query === undefined && category === undefined) {
      clearFilter(productDispatch);
    } else if (products) {
      if (query) {
        filterBySearch(productDispatch, query);
      } else if (category) {
        filterByCategory(productDispatch, category);
      }
    }
  }, [productDispatch, query, category, products]);

  return (
    <Fragment>
      <ProductSearch />
      <Products />
    </Fragment>
  );
};

export default Home;

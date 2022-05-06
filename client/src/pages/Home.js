import React, { Fragment } from 'react';
import ProductSearch from '../components/products/ProductSearch/ProductSearch';
import Products from '../components/products/Products/Products';

const Home = () => {
  return (
    <Fragment>
      <ProductSearch />
      <Products />
    </Fragment>
  );
};

export default Home;

import React, { Fragment, useEffect } from 'react';
import useProducts from '../../../hooks/useProducts';
import { getProducts } from '../../../context/product/ProductState';
import Product from '../ProductItem/ProductItem';
import Loading from '../../../pages/Loading/Loading';
import styles from './Products.module.css';

const Products = () => {
  // Use the products context
  const [productState, productDispatch] = useProducts();

  // Destructure values from the state
  const { products, filteredProducts, categoryProducts } = productState;

  useEffect(() => {
    getProducts(productDispatch);
  }, [productDispatch, filteredProducts, categoryProducts]);

  return (
    <div className={styles.products}>
      {products !== null ? ( // Check if there are products to render
        <Fragment>
          {categoryProducts !== null // If categoryProducts !== null, it will contain an array of products filtered by category
            ? categoryProducts.map((product) => (
                <Product key={product._id} product={product} />
              ))
            : filteredProducts !== null // If filteredProducts !== null, it will contain an array of products filtered by search term
            ? filteredProducts.map((product) => (
                <Product key={product._id} product={product} />
              ))
            : // If no filters are active, all products will be rendered
              products.map((product) => <Product key={product._id} product={product} />)}
        </Fragment>
      ) : (
        <Loading /> // If products is null, they are being fetched. When fetched, if there are no products it will be an empty array and render nothing which will remove the loading icon
      )}
    </div>
  );
};

export default Products;

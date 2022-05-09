import React, { Fragment, useEffect } from 'react';
import useProducts from '../../../hooks/useProducts';
import useLoading from '../../../hooks/useLoading';
import ProductItem from '../ProductItem/ProductItem';
import Loading from '../../../pages/Loading/Loading';
import styles from './Products.module.css';

const Products = () => {
  // Use the products context
  const [productState, productDispatch] = useProducts();

  // Destructure values from the state
  const { products, filteredProducts, categoryProducts } = productState;

  useEffect(() => {}, [filteredProducts, categoryProducts, products]);

  const loading = useLoading(1500);

  if (loading) return <Loading />;

  return (
    <Fragment>
      {products?.length === 0 ||
      filteredProducts?.length === 0 ||
      categoryProducts?.length === 0 ? (
        <div className={styles.noProducts}>There is currently no products available</div>
      ) : products !== null ? ( // Check if there are products to render
        <div className={styles.products}>
          {categoryProducts !== null ? ( // If categoryProducts !== null, it will contain an array of products filtered by category
            categoryProducts.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))
          ) : filteredProducts !== null ? ( // If filteredProducts !== null, it will contain an array of products filtered by search term
            filteredProducts.length === 0 ? (
              <div className={styles.noMatch}>No items matched your search</div>
            ) : (
              filteredProducts.map((product) => (
                <ProductItem key={product._id} product={product} />
              ))
            )
          ) : (
            // If no filters are active, all products will be rendered
            products.map((product) => <ProductItem key={product._id} product={product} />)
          )}
        </div>
      ) : (
        <Loading />
      )}
    </Fragment>
  );
};

export default Products;

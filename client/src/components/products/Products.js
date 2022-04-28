import React, { Fragment, useEffect } from 'react';
import useProducts from '../../hooks/useProducts';
import { getProducts, addProduct } from '../../context/product/ProductState';
import Product from './Product';

const Products = () => {
  const newProduct = {
    id: 2,
    title: 'Chair',
    category: 'furniture',
    description: 'A strong wooden chair'
  };

  // Use the products context
  const [productState, productDispatch] = useProducts();

  // Destructure values from the state
  const { products, filteredProducts, categoryProducts } = productState;

  useEffect(() => {
    console.log('use effect ran');
    getProducts(productDispatch);
  }, [productDispatch]);

  const handleClick = () => {
    addProduct(productDispatch, newProduct);
  };

  return (
    <Fragment>
      {products !== null ? ( // Check if there are products to render
        <Fragment>
          {categoryProducts !== null // If categoryProducts !== null, it will contain an array of products filtered by category
            ? categoryProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))
            : filteredProducts !== null // If filteredProducts !== null, it will contain an array of products filtered by search term
            ? filteredProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))
            : // If no filters are active, all products will be rendered
              products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
        </Fragment>
      ) : (
        <h1>Loading...</h1> // If products is null, they are being fetched. When fetched, if there are no products it will be an empty array and render nothing which will remove the loading icon
      )}
      <button onClick={handleClick}>Add item</button>
    </Fragment>
  );
};

export default Products;

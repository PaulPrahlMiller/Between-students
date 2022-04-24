import React, { useReducer } from 'react';
import ProductContext from './productContext';
import productReducer from './productReducer';

// Functions to update state exported here before the functional component

const ProductState = (props) => {
  // Initialise the state
  const initialState = {
    products: null, // Will contain an array with all the products listed in the database
    filtered_products: null, // Will be null when no filter is applied, or an array of filtered products.
    current_product: null // Will contain a specific product when we want to show a single page for a specific product.
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ state: state, dispatch }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;

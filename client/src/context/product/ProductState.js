import React, { useReducer } from 'react';
import ProductContext from './productContext';
import productReducer from './productReducer';
import {
  ADD_PRODUCT,
  GET_PRODUCTS,
  FILTER_BY_SEARCH,
  FILTER_BY_CATEGORY
} from '../types';

// Functions to update state exported here before the functional component

export const getProducts = (dispatch) => {
  const products = [
    {
      id: 1,
      title: 'Desk',
      category: 'furniture',
      description: 'A beautiful wooden desk, 1200mm wide 600mm deep'
    }
  ];

  // Normally data will be retrieved from the database. Here we use the hardcoded data.
  dispatch({
    type: GET_PRODUCTS,
    payload: products
  });
};

export const addProduct = (dispatch, product) => {
  dispatch({
    type: ADD_PRODUCT,
    payload: product
  });
};

export const filterBySearch = (dispatch, searchTerm) => {
  dispatch({
    type: FILTER_BY_SEARCH,
    payload: searchTerm
  });
};

export const filterByCategory = (dispatch, category) => {
  dispatch({
    type: FILTER_BY_CATEGORY,
    payload: category
  });
};

const ProductState = (props) => {
  // Initialise the state
  const initialState = {
    products: null, // Will contain an array with all the products listed in the database
    filteredProducts: null, // Will be null when no filter is applied, or an array of filtered products.
    categoryProducts: null,
    categories: ['Furniture', 'Books'],
    currentProduct: null // Will contain a specific product when we want to show a single page for a specific product.
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ state: state, dispatch }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;

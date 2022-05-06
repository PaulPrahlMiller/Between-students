import React, { useReducer } from 'react';
import ProductContext from './productContext';
import productReducer from './productReducer';
import axios from 'axios';
import {
  ADD_PRODUCT,
  GET_PRODUCTS,
  SET_CURRENT_PRODUCT,
  CLEAR_CURRENT_PRODUCT,
  FILTER_BY_SEARCH,
  FILTER_BY_CATEGORY
} from '../types';

// Functions to update state exported here before the functional component

export const getProducts = async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:5000/api/products');
    // Normally data will be retrieved from the database. Here we use the hardcoded data.
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data.products
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const setCurrentProduct = (dispatch, productId) => {
  dispatch({
    type: SET_CURRENT_PRODUCT,
    payload: productId
  });
};

export const clearCurrentProduct = (dispatch) => {
  dispatch({
    type: CLEAR_CURRENT_PRODUCT
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
    products: null,
    filteredProducts: null,
    categoryProducts: null,

    categories: [
      'Sofas',
      'Beds',
      'Tables',
      'Chairs',
      'Shelves',
      'Mirrors',
      'Storage Containers',
      'Books',
      'Home Decorations',
      'Study materials',
      'Households',
      'Textiles',
      'Clothes',
      'Shoes',
      'Plants',
      'Electric Appliances',
      'Cooking utilities',
      'Kitchen Appliances',
      'Computers & accesories',
      'Lamps & lights',
      'Sports'
    ],
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

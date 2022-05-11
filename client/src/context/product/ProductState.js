import React, { useEffect, useReducer } from 'react';
import ProductContext from './productContext';
import productReducer from './productReducer';
import axios from 'axios';
import searchFilter from '../../utils/searchFilter';
import {
  ADD_PRODUCT,
  GET_PRODUCTS,
  SET_CURRENT_PRODUCT,
  CLEAR_CURRENT_PRODUCT,
  FILTER_BY_SEARCH,
  FILTER_BY_CATEGORY,
  SET_LOADING,
  CLEAR_FILTER
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

export const filterBySearch = (dispatch, products, searchTerm) => {
  const filteredArray = searchFilter(products, searchTerm);
  dispatch({
    type: FILTER_BY_SEARCH,
    payload: filteredArray
  });
};

export const filterByCategory = (dispatch, category) => {
  dispatch({
    type: FILTER_BY_CATEGORY,
    payload: category
  });
};

export const clearFilter = (dispatch) => {
  dispatch({
    type: CLEAR_FILTER
  });
};

export const setLoading = (dispatch, value) => {
  dispatch({
    type: SET_LOADING,
    payload: value
  });
};

const ProductState = (props) => {
  // Initialise the state
  const initialState = {
    products: null,
    filteredProducts: null,
    categoryProducts: null,
    currentProduct: null,
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
    ]
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  const { products } = state;

  useEffect(() => {
    if (products === null) {
      getProducts(dispatch);
    }
  }, [dispatch, products]);

  return (
    <ProductContext.Provider value={{ state: state, dispatch }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;

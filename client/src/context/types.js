/** Exporting types like this just makes the code look neater
 * In the code, a variable is passed to the dispatch function rather than a string
 */

/** Auth Types */
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_DENIED = 'LOGIN_DENIED';
export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_DENIED = 'REGISTER_DENIED';
export const LOAD_USER = 'LOAD_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const UNAUTHORIZED = 'UNAUTHORIZED';
export const CLEAR_ERROR = 'CLEAR_ERROR';

/** Product Types */
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SET_USERS_PRODUCTS = 'SET_USERS_PRODUCTS';
export const CLEAR_USERS_PRODUCTS = 'CLEAR_USERS_PRODUCTS';
export const SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT';
export const CLEAR_CURRENT_PRODUCT = 'CLEAR_CURRENT_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const FILTER_BY_SEARCH = 'FILTER_BY_SEARCH';
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';
export const SET_LOADING = 'SET_LOADING';
export const CLEAR_FILTER = 'CLEAR_FILTER';

/* Alert Types */
export const SET_ALERT = 'SET_ALERT';
export const CLEAR_ALERT = 'CLEAR_ALERT';

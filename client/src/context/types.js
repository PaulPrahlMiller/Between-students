/** Exporting types like this just makes the code look neater
 * In the code, a variable is passed to the dispatch function rather than a string
 */

/** Auth Types */
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_DENIED = 'LOGIN_DENIED';
export const REGISTER_USER = 'REGISTER_USER';
export const LOAD_USER = 'LOAD_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const UNAUTHORIZED = 'UNAUTHORIZED';
export const CLEAR_ERROR = 'CLEAR_ERROR';

/** Product Types */
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const FILTER_BY_SEARCH = 'FILTER_BY_SEARCH';
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';

/* Alert Types */
export const SET_ALERT = 'SET_ALERT';
export const CLEAR_ALERT = 'CLEAR_ALERT';

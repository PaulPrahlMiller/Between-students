import React, { useReducer, useEffect } from 'react';
import authReducer from './authReducer';
import AuthContext from './authContext';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import {
  LOGIN_USER,
  REGISTER_USER,
  LOAD_USER,
  LOGOUT_USER,
  UNAUTHORIZED,
  LOGIN_DENIED,
  REGISTER_DENIED,
  CLEAR_ERROR,
  SET_USERS_PRODUCTS
} from '../types';

// export any functions to update the state here with dispatch as first param.
// export const myFunction = (dispatch) => {}

export const getUser = async (dispatch) => {
  try {
    // Get logged in user from database
    const res = await axios.get('/user');

    // Dispatch to auth reducer with user object as payload
    dispatch({
      type: LOAD_USER,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: UNAUTHORIZED
    });
  }
};

export const getUserProducts = async (dispatch) => {
  try {
    // Get the user products from the database
    const res = await axios.get('/products/user');

    dispatch({
      type: SET_USERS_PRODUCTS,
      payload: res.data
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const logout = (dispatch) => {
  dispatch({
    type: LOGOUT_USER
  });
};

export const login = async (dispatch, formData) => {
  try {
    // Login user to get an authorization token
    const res = await axios.post('/auth/login', formData);

    // dispatch to reducer with token as payload
    dispatch({
      type: LOGIN_USER,
      payload: res.data
    });

    // Get user uses the stored token to retrieve the user object from the database
    getUser(dispatch);
  } catch (error) {
    dispatch({
      type: LOGIN_DENIED,
      payload: error.response.data.message
    });
  }
};

export const register = async (dispatch, formData) => {
  try {
    const res = await axios.post('/auth/register', formData);
    console.log(res.data);

    dispatch({
      type: REGISTER_USER,
      payload: res.data
    });

    getUser(dispatch);
  } catch (error) {
    dispatch({
      type: REGISTER_DENIED,
      payload: error.response.data.message
    });
  }
};

export const clearError = (dispatch) => {
  dispatch({
    type: CLEAR_ERROR
  });
};

const AuthState = (props) => {
  // Initialise state when app loads
  const initialState = {
    user: null,
    isAuthenticated: false,
    token: localStorage.getItem('token'),
    loading: true,
    error: null
  };

  // Initialise reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  const { loading } = state;

  // Set token when application loads
  setAuthToken(state.token);

  // Loading true when app is run, set to false after checking for logged in user.
  useEffect(() => {
    if (loading) {
      getUser(dispatch);
    }
  }, [loading]);

  // Update the token in localStorage whenever it is updated in the state.
  useEffect(() => {
    setAuthToken(state.token);
  }, [state.token]);

  return (
    <AuthContext.Provider value={{ state: state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;

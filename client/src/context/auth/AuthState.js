import React, { useReducer, useEffect } from 'react';
import authReducer from './authReducer';
import AuthContext from './authContext';
import axios from 'axios';
import {
  LOGIN_USER,
  REGISTER_USER,
  LOAD_USER,
  LOGOUT_USER,
  UNAUTHORIZED
} from '../types';

// export any functions to update the state here with dispatch as first param.
// export const myFunction = (dispatch) => {}

const setAuthToken = (token) => {
  if (token) {
    // Store the token
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // Clear the token
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const getUser = async (dispatch) => {
  try {
    // Get logged in user from database
    const res = await axios.get('http://localhost:5000/api/user');

    // Dispatch to auth reducer with user object as payload
    dispatch({
      type: LOAD_USER,
      payload: res.data
    });
  } catch (error) {
    // Error handling
    console.log(error);
    dispatch({
      type: UNAUTHORIZED
    });
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
    const res = await axios.post('http://localhost:5000/api/login', formData);
    console.log(res.data);
    // dispatch to reducer with token as payload
    dispatch({
      type: LOGIN_USER,
      payload: res.data
    });

    // Get user uses the stored token to retrieve the user object from the database
    getUser(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const register = async (dispatch, formData) => {
  try {
    const res = await axios.post(
      'http://localhost:5000/api/register',
      formData
    );
    console.log(res.data);

    dispatch({
      type: REGISTER_USER,
      payload: res.data
    });

    getUser(dispatch);
  } catch (error) {
    // Handle errors
    console.log(error);
  }
};

const AuthState = (props) => {
  // Initialise state when app loads
  const initialState = {
    user: null,
    isAuthenticated: false,
    token: localStorage.getItem('token'),
    loading: true
  };

  // Initialise reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Set token when application loads
  setAuthToken(state.token);

  // Loading true when app is run, set to false after checking for logged in user.
  if (state.loading) {
    getUser(dispatch);
  }

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

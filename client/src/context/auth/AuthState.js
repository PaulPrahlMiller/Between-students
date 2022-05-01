import React, { useReducer, useEffect } from 'react';
import authReducer from './authReducer';
import AuthContext from './authContext';

// export any functions to update the state here with dispatch as first param.
// export const myFunction = (dispatch) => {}

const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('token', token);
  } else {
    localStorage.removeItem('token');
  }
};

const AuthState = (props) => {
  // Initialise state when app loads
  const initialState = {
    user: null,
    isAuthenticated: false,
    token: localStorage.getItem('token')
  };

  // Initialise reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

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

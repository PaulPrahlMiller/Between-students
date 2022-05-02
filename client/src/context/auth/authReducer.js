import {
  LOGIN_USER,
  LOGIN_DENIED,
  REGISTER_USER,
  LOAD_USER,
  LOGOUT_USER,
  UNAUTHORIZED
} from '../types';

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_USER:
    case REGISTER_USER:
      return {
        ...state, // Return current state with spread operator
        ...action.payload, // Set states token field to the token returned
        isAuthenticated: true, // Update any state variables here
        loading: false
      };
    case LOGIN_DENIED:
    case LOGOUT_USER:
    case UNAUTHORIZED:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
        loading: false
      };
    case LOAD_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loading: false
      };
    default:
      throw new Error(`Invalid type "${action.type}" provided to reducer`);
  }
};

export default authReducer;

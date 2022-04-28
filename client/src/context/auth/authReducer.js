import { LOGIN_SUCCESS, LOGIN_FAIL } from '../types';

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      // This will update the state by reducing the current state with any updates into a new state
      return {
        ...state, // Return current state with spread operator
        isAuthenticated: true, // Update any state variables here
        token: action.payload // Assign the token returned in the dispatch payload
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null
      };
    default:
      throw new Error('Invalid type provided to reducer');
  }
};

export default authReducer;

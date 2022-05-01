import { useContext } from 'react';
import AuthContext from '../context/auth/authContext';

export const useAuth = () => {
  // Destructure the state and dispatch from the context
  const { state, dispatch } = useContext(AuthContext);
  // Return them in an array
  return [state, dispatch];
};

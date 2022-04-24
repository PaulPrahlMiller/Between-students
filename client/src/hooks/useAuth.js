import { useContext } from 'react';
import AuthContext from '../context/auth/authContext';

/** To use the Context:
 * const [state, dispatch] = useAuth();
 */

const useAuth = () => {
  // Destructure the state and dispatch from the context
  const { state, dispatch } = useContext(AuthContext);
  // Return them in an array
  return [state, dispatch];
};

export default useAuth;

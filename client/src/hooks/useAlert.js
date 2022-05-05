import { useContext } from 'react';
import AlertContext from '../context/alert/alertContext';

const useAlert = () => {
  // Destructure the state and dispatch from the context
  const { state, setAlert } = useContext(AlertContext);
  // Return them in an array
  return [state, setAlert];
};

export default useAlert;

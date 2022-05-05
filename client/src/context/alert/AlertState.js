import React, { useReducer, useEffect } from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import { SET_ALERT, CLEAR_ALERT } from '../types';

const AlertState = (props) => {
  const initialState = {
    alert: null
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const { alert } = state;

  const setAlert = (type, message) => {
    dispatch({
      type: SET_ALERT,
      payload: { type, message }
    });
  };

  useEffect(() => {
    let id;
    if (alert) {
      id = setTimeout(() => {
        dispatch({
          type: CLEAR_ALERT
        });
      }, 3000);
    }
    return () => clearTimeout(id);
  }, [alert]);

  return (
    <AlertContext.Provider value={{ state: state, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;

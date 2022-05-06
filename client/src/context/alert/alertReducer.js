import { SET_ALERT, CLEAR_ALERT } from '../types';

const alertReducer = (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload
      };
    case CLEAR_ALERT:
      return {
        ...state,
        alert: null
      };
    default:
      throw new Error(`Invalid type "${action.type}" provided to reducer`);
  }
};

export default alertReducer;

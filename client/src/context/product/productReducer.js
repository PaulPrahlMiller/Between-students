import {
  ADD_PRODUCT,
  FILTER_BY_SEARCH,
  FILTER_BY_CATEGORY,
  GET_PRODUCTS,
  SET_CURRENT_PRODUCT,
  CLEAR_CURRENT_PRODUCT
} from '../types';

const productReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state, // Pass current state
        products: action.payload // Pass any values to be updated
      };
    case SET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: state.products?.find((product) => {
          return product._id === action.payload;
        })
      };
    case CLEAR_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: null
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products]
      };
    case FILTER_BY_SEARCH:
      return {
        ...state,
        categoryProducts: null,
        filteredProducts: state.products.filter((product) => {
          return (
            product.title.toLowerCase().includes(action.payload.toLowerCase()) ||
            product.description.toLowerCase().includes(action.payload.toLowerCase())
          );
        })
      };
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        filteredProducts: null,
        categoryProducts: state.products.filter((product) => {
          return product.category === action.payload;
        })
      };
    default:
      throw new Error('Invalid type provided to reducer function');
  }
};

export default productReducer;

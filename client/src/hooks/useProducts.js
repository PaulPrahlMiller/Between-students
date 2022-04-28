import { useContext } from 'react';
import ProductContext from '../context/product/productContext';

const useProducts = () => {
  const { state, dispatch } = useContext(ProductContext);
  return [state, dispatch];
};

export default useProducts;

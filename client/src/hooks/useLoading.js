import { useState, useEffect } from 'react';

const useLoading = (delay) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, delay);
  }, [delay]);

  return loading;
};

export default useLoading;

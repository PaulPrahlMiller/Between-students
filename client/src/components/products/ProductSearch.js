import React, { useState } from 'react';

const ProductSearch = () => {
  const [query, setQuery] = useState('');

  return (
    <div className='product-search'>
      <form>
        <input
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
};

export default ProductSearch;

import React from 'react';

const Product = ({ product }) => {
  return (
    <div className='product-item'>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default Product;

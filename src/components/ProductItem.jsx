import React from 'react';

function ProductItem({ product }) {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductItem;
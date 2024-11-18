import React from 'react';
import ProductItem from './ProductItem';
// this function helps add the products from the list
function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />  // this is for task 5 with Implementing Keys 
      ))}
    </div>
  );
}

export default ProductList;
import { useState } from 'react'
import { ProductList } from './components/ProductList';
import {ProductItem} from './components/ProductItem';
import { AddProductForm } from './components/AddProductForm';
import './App.css'

import React, { useState } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

function App() {
  //  product list
  const [products, setProducts] = useState([
    { id: 1, name: 'Corona Lite', price: '$100', description: 'this is a low calorie version of the famous Corona ' },
    { id: 2, name: 'High Noon', price: '$150', description: 'this is a very light and low calorie beer with a great taste' },
  ]);

  // Function to handle adding a new product
  const addProduct = (product) => {
    setProducts((prevProducts) => [
      prevProducts,
      { id: prevProducts.length + 1, product },
    ]);
  };

  return (
    <div className="App">
      <h1>Product Dashboard</h1>
      <AddProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
}

export default App;
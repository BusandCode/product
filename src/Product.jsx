import React from 'react';

const ProductStockStatus = ({ stock }) => {
  return (
    <div>
      {stock > 0 ? (
        <span style={{color:"green"}}>In Stock</span>
      ) : (
        <span style={{color:"black"}}>Available Next Day</span>
      )}
    </div>
  );
};

// Example usage
const Product = () => {
  const productStock = 0; // Change this value to test the behavior
  //Change the value to the value of the item there

  return (
    <div>
      <h2>Product Name</h2>
      <ProductStockStatus stock={productStock} />
    </div>
  );
};

export default Product;

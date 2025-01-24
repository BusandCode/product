import React from 'react';

const ProductStockStatus = ({ stock }) => {
  return (
    <div>
      {stock > 0 ? (
        <span style={{color:"green"}}>In Stock</span>
      ) : (
        <span style={{color:"green"}}>Available Next Day</span>
      )}
    </div>
  );
};

// Example usage
const Product = () => {
  const productStock = 0; // Change this value to test the behavior

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Product Name</h2>
      <ProductStockStatus stock={productStock} />
    </div>
  );
};

export default Product;

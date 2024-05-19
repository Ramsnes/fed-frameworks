// Product.jsx
import React from "react";

function Product({ title, description, price }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>{price}</div>
    </div>
  );
}
export default Product;

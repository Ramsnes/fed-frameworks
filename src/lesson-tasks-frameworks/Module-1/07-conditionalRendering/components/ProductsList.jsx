// ProductsList.js
import React from "react";

// ({ productsProp }) refers to 'const products' in App.js
function ProductList(props) {
  return (
    <div>
      <ul>
        {props.componentValue1.map((product) => (
          <li key={product.id}>
            {product.isOnSale
              ? `${product.title} - ${product.price} ON SALE`
              : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

// Notes

// if product is on sale, render title and price
// if not, don't render
// componentValue can be named whatever

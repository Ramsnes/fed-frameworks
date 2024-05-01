import React from "react";

function ProductList({ products }) {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;

// ({products}) replaces (props)
// Enables 'products.map' instead of
// 'props.products.map' - props.products referres to const products in <App.js>

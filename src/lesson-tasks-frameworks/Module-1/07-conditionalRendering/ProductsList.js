import React from "react";

function ProductList({ products }) {
  return (
    <div>
      <ul>
        {products.map((product) => (
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

/* 
Level 1 process
Create a context with the data listed below available.

Create a component that will be used to display the data and call this in your main <App>.

Display the data in the above component (point 3 above) using the context. Do not use props.
*/

import React, { createContext, useContext } from "react";

const products = [
  { id: 0, title: "Bread", price: 19.99 },
  { id: 1, title: "Milk", price: 29.99 },
  { id: 2, title: "Cheese", price: 35.99 },
  { id: 3, title: "Water", price: 15.99 },
];

const ProductContext = createContext();

function ProductList() {
  // useContext() uses the createContext()
  const products = useContext(ProductContext);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {/* Mapping through the products and displaying each one */}
        {products.map((product) => (
          <li key={product.id}>
            {product.title}: ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Main App component where the ProductList component is used
function UseContextApp() {
  return (
    <ProductContext.Provider value={products}>
      <div>
        <ProductList />
        ---
      </div>
    </ProductContext.Provider>
  );
}

export default UseContextApp;

/* function UseContextApp() {
- .Provider value={products} means that all children are allowed to use the const products array
- ProductList wrapped with <ProductContext.Provider> to provide the 'const products' data
 */

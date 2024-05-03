/* 
Loop through the above data in <App> or a new component. This choice is up to you.

Display the title and price values.

If the product isOnSale property is set to true, then display a div with “ON SALE” as the text. If the isOnSale property is set to false, do not display anything.

You should now have all the products mapped out, but only the ones with isOnSale set to true will display the “ON SALE” text.
 */

// App.js
import React from "react";
import ProductListComponent from "./components/ProductsList.jsx";

const products = [
  { id: 0, title: "Bread", price: 19.99, isOnSale: true },
  { id: 1, title: "Milk", price: 29.99, isOnSale: false },
  { id: 2, title: "Cheese", price: 35.99, isOnSale: false },
  { id: 3, title: "Water", price: 15.99, isOnSale: true },
];

function App() {
  return (
    <div>
      <ProductListComponent componentValue1={products} />;
    </div>
  );
}

export default App;

/* 
function App()
{products} referres to prop name

={products referres to const products} and the products rendered are based off of the conditionals from the fn ProductList from ProductsList.js
 */

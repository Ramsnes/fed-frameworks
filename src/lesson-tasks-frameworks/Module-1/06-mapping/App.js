/* Create a component called <ProductsList>.

Use the supplied data as a variable in <App> called products. 

Pass this data as a prop called products into <ProductsList>.

Map through the data in <ProductsList> and display the title and price of each value in a div. */
import React from "react";
import ProductsList from "./ProductList.js";

const products = [
  { id: 0, title: "Bread", price: 19.99 },
  { id: 1, title: "Milk", price: 29.99 },
  { id: 2, title: "Cheese", price: 35.99 },
  { id: 3, title: "Water", price: 15.99 },
];

function Mapping() {
  return (
    <div>
      <ProductsList products={products} />
    </div>
  );
}

export default Mapping;

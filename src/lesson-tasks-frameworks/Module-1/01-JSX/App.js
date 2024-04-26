import React from "react";

/* 
Add a H1 heading <h1> with children of Product cart
Create an unordered list <ul> below the H1.
Create three list items inside of the <ul> list, with the values of: 3.1 Milk - 19.99 3.2 Bread - 23.99 3.3 Cheese - 40.99
 */
function App() {
  const productCart = "Product Cart";
  const product1 = "3.1 Milk - 19.99";
  const product2 = "3.2 Bread - $23.99";
  const product3 = "3.3 Cheese - $40.99";

  return (
    <div>
      <h1>{productCart}</h1>
      <ul>
        <li>{product1}</li>
        <li>{product2}</li>
        <li>{product3}</li>
      </ul>
    </div>
  );
}
export default App;

//
// Separate note:
const product = React.createElement("div", {}, "Milk: 19.99 NOK");

//{} = optional argument (props argument)
// E.g
const product2 = React.createElement(
  "div",
  { style: { color: "red" } },
  "Milk: 19.99 NOK"
);

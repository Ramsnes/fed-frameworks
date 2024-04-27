/*  Level 1 process
 Create a Product component that is empty except for an empty div, e.g. <div></div>.
NOTE: function Product

 Call this component in <App>.
NOTE: <Product /> 

 Create a state called productTitle and pass it into your Product component. Give this state the initial value of “Milk”.
NOTE: Make a variable inside App(), set name as "productTitle", and "get" before as mentioned in lesson. Then set the default value as "Milk", as instructed

 Create a button element with a function called onButtonClick. This function must change the productTitle state to “Cheese”. Tip: Use the setter returned useState, which should have been called setProductTitle.
NOTE: function onButtonClick(setProductTitle)

 Your Product component should now display “Cheese” when the button is clicked.
 */
import { useState } from "react";

// Component
function Product(props) {
  return <div>{props.title}</div>;
}

// Button event
function onButtonClick(setProductTitle) {
  setProductTitle("Cheese");
}

// Render
function App() {
  const [productTitle, setProductTitle] = useState("Milk");
  return (
    <div>
      <button onClick={() => onButtonClick(setProductTitle)}>Cheese me</button>;
      <Product title={productTitle} />
    </div>
  );
}

export default App;

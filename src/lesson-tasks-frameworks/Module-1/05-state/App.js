/*  Level 1 process
 Create a Product component
NOTE: function Product

 Call this component in <App>.
NOTE: <Product productTitleProp= .../> 

 Create a state called productTitle and pass it into your Product component. Give this state the initial value of “Milk”.
NOTE: Make a variable inside App(), set name as "productTitle", and "set" before as mentioned in lesson. Then set the default value as "Milk", as instructed

 Create a button element with a function called onButtonClick. This function must change the productTitle state to “Cheese”. Tip: Use the setter returned useState, which should have been called setProductTitle.
NOTE: function onButtonClick()

 Your Product component should now display “Cheese” when the button is clicked.
 */

// Andrès løsning med onButtonClick() inni App()
import { useState } from "react";

// Component
function Product(props) {
  return <p>{props.productTitleProp}</p>;
}

// Render fn
function App() {
  const [productTitle, setProductTitle] = useState("Milk");

  // Btn fn
  function onButtonClick() {
    setProductTitle("cheese");
    console.log("Product title changed");
  }

  // Render
  return (
    <div>
      <button onClick={onButtonClick}>Cheese me</button>;
      <Product productTitleProp={productTitle} />
    </div>
  );
}

export default App;

// Create prop for rendering

// Create App() render fn
// Create useState inside Aop()
// Create btn fn w/ setProductTitle to change product name

// return div <btn> w/ btn event
// return Product prop for re-render from "Milk" to "Cheese"

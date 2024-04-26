/* 
Level 1 process
Add a button element.

Create a function called onButtonClick which console.logs “Button have been clicked”.

Attach this function to your button element, making sure that clicking the button calls the function.

 */

import React from "react";

function handleBtnClick() {
  console.log("Button clicked!");
}

function App() {
  return (
    <div>
      <button onClick={handleBtnClick}>Click me</button>;
    </div>
  );
}

export default App;

/* W/ argument and arrow function
function handleBtnClick(argument) {
  console.log("Button clicked!", argument);
}

<button onClick={() => handleBtnClick(10)}>Click</button>; */

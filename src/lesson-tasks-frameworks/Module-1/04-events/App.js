/* 
Level 1 process
Add a button element.

Create a function called onButtonClick which console.logs “Button have been clicked”.

Attach this function to your button element, making sure that clicking the button calls the function.

 */

import React from "react";

function message() {
  console.log("Button clicked!");
}

function Events() {
  return (
    <div>
      <button onClick={message}>Click me</button>;
    </div>
  );
}

export default Events;

/* W/ argument and arrow function
function message(argument) {
  console.log("Button clicked!", argument);
}

<button onClick={() => message(10)}>Click</button>; */

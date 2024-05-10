/* 
In your App, create a state called isActive with a setter called setIsActive.

In your return, check if isActive is true. If it is, return <div>I am active</div>; otherwise, return <div>I am not active</div>.

Add a button to the screen. Link this button to a function that toggles isActive between true and false.

When you click the button, you should now see the text change between "I am active" and "I am not active".
 */

import { useState } from "react";

// Component to display activity status
function Activity(props) {
  return <div>{props.ActivityProp ? "I am active" : "I am not active"}</div>;
}

// Main component
function UseState() {
  const [isActive, setIsActive] = useState(true);

  // Fn toggles boolean state of isActive
  function toggleActive() {
    setIsActive((changeActive) => !changeActive); //changeActive = placeholder name
  }

  /* OR to change once to "false":
  function onButtonClick() {
    setIsActive(false);
  } */

  // Render
  return (
    <div>
      <button onClick={toggleActive}>Change active state</button>
      {/* <button onClick={onButtonClick}>Change activity</button> */}
      <Activity ActivityProp={isActive} />
    </div>
  );
}

export default UseState;

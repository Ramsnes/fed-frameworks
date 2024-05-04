/* 
Level 1 process
Create a component called Greeting.
Make this component display a greeting, e.g. Hi Ola Nordmann!.
Call this component in <App>.
 */

import React from "react";

// Component with JSX code-block
function Greeting() {
  return <p>Hi, Ola Nordmann</p>;
}

// Let's render the JSX code-block
function Components() {
  return (
    <div className="greetDiv">
      <Greeting />
    </div>
  );
}

export default Components;

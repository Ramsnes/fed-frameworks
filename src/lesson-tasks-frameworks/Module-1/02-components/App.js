/* 
Level 1 process
Create a component called Greeting.
Make this component display a greeting, e.g. Hi Ola Nordmann!.
Call this component in <App>.
 */

import React from "react";

// Component with JSX code-block
function Greeting() {
  return (
    <div>
      <p>Hi, Ola Nordmann</p>
    </div>
  );
}

// Let's render the JSX code-block
function App() {
  return (
    <div>
      <Greeting />;
    </div>
  );
}

export default App;

import React from "react";

function handleBtnClick(argument) {
  console.log("Button clicked!", argument);
}

// React component that renders
function App() {
  return <button onClick={() => handleBtnClick(10)}>Click</button>;

  //Without arrow/argument
  //   return <button onClick={handleBtnClick}>Click me</button>;
}

export default App;

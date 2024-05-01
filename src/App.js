import React from "react";
import JSXComponent from "./lesson-tasks-frameworks/Module-1/01-JSX/App";
import ComponentsComponent from "./lesson-tasks-frameworks/Module-1/02-components/App";
import PropsComponent from "./lesson-tasks-frameworks/Module-1/03-props/Props.js";
import EventsComponent from "./lesson-tasks-frameworks/Module-1/04-events/App";
import StateComponent from "./lesson-tasks-frameworks/Module-1//05-state/App";
import MappingComponent from "./lesson-tasks-frameworks/Module-1/06-mapping/App.js";
import ConditionalRenderingComponent from "./lesson-tasks-frameworks/Module-1/07-conditionalRendering/App.js";

const greeting = React.createElement("div", {}, "Hello, world!");

// What renders on the page
function App() {
  // return greeting;
  // JSX:
  // return <div>Hello, world</div>;
  const productTitle = "Milk";
  const productPrice = 19;

  return (
    <div>
      {productTitle}: {productPrice + 1}
      {productPrice > 10 ? " Not on sale" : " On sale"}
      <JSXComponent />
      <ComponentsComponent />
      <PropsComponent />
      <EventsComponent />
      <StateComponent />
      <MappingComponent />
      <ConditionalRenderingComponent />
    </div>
  );
}

export default App;

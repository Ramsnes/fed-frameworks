// General imports
import React from "react";
import "./styles/styles.css";

// Lessons imports
import JSXComponent from "./lesson-tasks-frameworks/Module-1/01-JSX/App";
import ComponentsComponent from "./lesson-tasks-frameworks/Module-1/02-components/App";
import PropsComponent from "./lesson-tasks-frameworks/Module-1/03-props/Props.js";
import EventsComponent from "./lesson-tasks-frameworks/Module-1/04-events/App";
import StateComponent from "./lesson-tasks-frameworks/Module-1//05-state/App";
import MappingComponent from "./lesson-tasks-frameworks/Module-1/06-mapping/App.js";
import ConditionalRenderingComponent from "./lesson-tasks-frameworks/Module-1/07-conditionalRendering/App.jsx";
import BasicClassesComponent from "./lesson-tasks-frameworks/Module-2/08-basicClasses/App.jsx";
import CssModule from "./lesson-tasks-frameworks/Module-2/09-cssModules/App.jsx";

const greeting = React.createElement("div", {}, "Hello, world!");

// What renders on the page
function App() {
  // return greeting;
  // JSX:
  // return <div>Hello, world</div>;
  const productTitle = "Milk";
  const productPrice = 19;

  return (
    <div className="my-class">
      {productTitle}: {productPrice + 1}
      {productPrice > 10 ? " Not on sale" : " On sale"}
      <JSXComponent />
      <ComponentsComponent />
      <PropsComponent />
      <EventsComponent />
      <StateComponent />
      <MappingComponent />
      <ConditionalRenderingComponent />
      <BasicClassesComponent />
      <CssModule />
    </div>
  );
}

export default App;

// App.js
// General imports
import React from "react";
import "./styles/styles.css";
import * as S from "./App.styles.jsx";

// Lessons imports
import JSXComponent from "./lesson-tasks-frameworks/Module-1/01-JSX/App";
import ComponentsComponent from "./lesson-tasks-frameworks/Module-1/02-components/App";
import PropsComponent from "./lesson-tasks-frameworks/Module-1/03-props/Props.js";
import EventsComponent from "./lesson-tasks-frameworks/Module-1/04-events/App";
import StateComponent from "./lesson-tasks-frameworks/Module-1//05-state/App";
import MappingComponent from "./lesson-tasks-frameworks/Module-1/06-mapping/App.js";
import ConditionalRenderingComponent from "./lesson-tasks-frameworks/Module-1/07-conditionalRendering/App.jsx";
import BasicClassesComponent from "./lesson-tasks-frameworks/Module-2/08-basicClasses/App.jsx";
import CssModuleComponent from "./lesson-tasks-frameworks/Module-2/09-cssModules/App.jsx";
import SassComponent from "./lesson-tasks-frameworks/Module-2/10-sass/App.jsx";
import StyledComponentsComponent from "./lesson-tasks-frameworks/Module-2/11-styledComponents/App.styles.jsx";
import UsingImagesComponent from "./lesson-tasks-frameworks/Module-2/12-usingImages/App.jsx";
import UseStateComponent from "./lesson-tasks-frameworks/Module-3/13-useState/App.jsx";
import UseEffectComponent from "./lesson-tasks-frameworks/Module-3/14-useEffect/App.jsx";
import UseReducerComponent from "./lesson-tasks-frameworks/Module-3/15-useReducer/App.jsx";
import UseContextComponent from "./lesson-tasks-frameworks/Module-3/16-useContext/UseContextApp.jsx";
import ZustandComponent from "./lesson-tasks-frameworks/Module-3/17-stateManagement/zustand/Zustand.jsx";
import ReactRouterComponent from "./lesson-tasks-frameworks/Module-4/18-ReactRouter/App.jsx";
import ApiCallsComponent from "./lesson-tasks-frameworks/Module-4/19-apiCalls/App.jsx";
import RouteParseFetch from "./lesson-tasks-frameworks/Module-4/20-routParamsFetch/App.jsx";
import CreateHooks from "./lesson-tasks-frameworks/Module-4/21-createHooks/App.jsx";
import ApiHookApp from "./lesson-tasks-frameworks/Module-4/22-apiHook/App.jsx";
import FormsApp from "./lesson-tasks-frameworks/Module-4/23-forms/App.jsx";

const greeting = React.createElement("div", {}, "Hello, world!");

// What renders on the page
function App() {
  // return greeting;
  // JSX:
  // return <div>Hello, world</div>;
  const productTitle = "Milk";
  const productPrice = 19;

  return (
    // <div className="my-class">
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
      <BasicClassesComponent />
      <CssModuleComponent />
      <SassComponent />
      <StyledComponentsComponent />
      <div>
        <S.Container>
          <S.Heading>This H is imported as alias</S.Heading>
        </S.Container>
      </div>
      <UsingImagesComponent />
      <UseStateComponent />
      <UseEffectComponent />
      <UseReducerComponent />
      <UseContextComponent />
      <ZustandComponent />
      <ReactRouterComponent />
      <ApiCallsComponent />
      <RouteParseFetch />
      <CreateHooks />
      <ApiHookApp />
      <FormsApp />
    </div>
  );
}

export default App;

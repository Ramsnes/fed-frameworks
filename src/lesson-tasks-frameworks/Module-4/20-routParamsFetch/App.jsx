/* 
- Add react-router.
- Create <Todo> component which only returns <div>Todo</div> at this stage.
- Create routing to this <Todo> component using a dynamic segment.
- In the <Todo> component, use the useParams hook to get the params.
- Use the correct parameter from params to do an API call and fetch a single Todo.
- Display this Todo on the page.
 */

// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Todo from "./Todo";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* Change number to see different posts  */}
          <Link to="todo/1">Todo with ID: 1</Link>
        </li>
      </ul>
    </nav>
  );
}

function RouteParamFetchApp() {
  return (
    <Router>
      <div>
        --- 20-routParamsFetch
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="todo/:id" element={<Todo />} />
        </Routes>
        ---
      </div>
    </Router>
  );
}

export default RouteParamFetchApp;

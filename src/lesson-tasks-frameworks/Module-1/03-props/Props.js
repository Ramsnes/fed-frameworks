/* Level 1 process
Create a component, such as <Person>.

Add three props to this component, such as firstName, lastName and city.

Display this component to the screen using random values you’d like to use.

Reuse this component again, but use different values this time.
 */

import React from "react";

// Component
function Person(props) {
  console.log(props);
  return (
    <p>
      {props.firstName}, {props.lastName}, {props.city}
    </p>
  );
}

// Destructured
// function Person({ firstName, lastName, city }) {

//   return (
//     <p>
//       {firstName}, {lastName}, {city}
//     </p> )}

function Props() {
  return (
    <div>
      <Person firstName="Morten" lastName="Ramfjord" city="Trondheim" />
      <Person firstName="Solid" lastName="Snake" city="Zanzibar" />
    </div>
  );
}

export default Props;

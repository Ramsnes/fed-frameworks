/* Lesson
Create a reducer with an initial state of enemyHitPoints being set to 100.

Create a reducer action attack which reduces the enemy hit points by 10.

Create the following HTML elements:

4.1 label that displays the enemy hit points

4.2 button that calls for the attack reducer action.

Level 2 process
Add a random chance to the attack state, which applies a critical hit where double the damage (40) would be applied.
 */
import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer } from "react";

function reducer(state, action) {
  // Actions that can be dispatched
  switch (action.type) {
    case "increment":
      return { hp: state.hp + 10 }; // Heal 10 HP
    case "decrement":
      const isCriticalHit = Math.random() < 0.2; // 20% chance of crit
      const damage = isCriticalHit ? 40 : 10; // If crit, 40 dmg. Else, 10.
      return { hp: state.hp - damage }; // dmg = const damage
    case "reset":
      return { hp: 1000 }; // Full heal
    case "addAmount":
      return { hp: state.hp + action.payload }; // Custom choice of attack
    default:
      throw new Error();
  }
}

function UseReducerApp() {
  const [state, dispatch] = useReducer(reducer, { hp: 1000 });
  return (
    <div>
      <div>---</div>
      <label>Enemy hitpoints: {state.hp}</label>
      <div>
        <div>
          {" "}
          Attacks - {/* Attack moves */}
          <button onClick={() => dispatch({ type: "decrement" })}>
            Attack (chance of crit 40)
          </button>
          <button onClick={() => dispatch({ type: "addAmount", payload: -90 })}>
            Ultimate move
          </button>
        </div>
        <div>
          {" "}
          Heals - {/* Heal moves  */}
          <button onClick={() => dispatch({ type: "increment" })}>
            Heal 10 HP
          </button>
          <button onClick={() => dispatch({ type: "reset" })}>
            Full heal!
          </button>
        </div>
      </div>
      ---
    </div>
  );
}

export default UseReducerApp;

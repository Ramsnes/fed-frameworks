/* 
Add a useEffect hook to <App>.

Create an interval timer that logs “Timer running”.

Add a cleanup to the useEffect so that the timer is removed if the current component, <App>, is removed.
 */
import { useEffect, useState } from "react";

// Format: useEffect(setup, dependencies?)
// This fn will be called in UseEffect()
function IntervalTimer() {
  useEffect(() => {
    // Store setInterval() in a var so we can pass as argument in clearInterval later
    const timerId = setInterval(() => {
      console.log("Timer running");
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <div>Interval timer is showing</div>;
}

//
// Render
function UseEffect() {
  const [showComponent, setShowComponent] = useState(true);

  // Set showComponent to false
  function onButtonClick() {
    setShowComponent(false);
  }

  return (
    <div>
      {/* If showComponent = true, show. If false, null */}
      {showComponent ? <IntervalTimer /> : null}
      <button onClick={onButtonClick}>Hide component</button>
    </div>
  );
}

export default UseEffect;

import React, { useState, useEffect } from "react";

function usePerson() {
  const [firstName, setFirstName] = useState("");

  function greetPerson() {
    console.log(`Hello ${firstName}`);
  }
  return { setFirstName, greetPerson };
}

function CreateHooksApp() {
  const { greetPerson, setFirstName } = usePerson();
  useEffect(() => {
    setFirstName("Ola");
    greetPerson();
  }, [setFirstName, greetPerson]);

  return (
    <div>
      --- createHooks
      <div>Tesst hook</div>
    </div>
  );
}

export default CreateHooksApp;

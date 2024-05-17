/* 
create a form.
This form must have the following inputs and states:
3.1 First name
3.1 Last name
3.1 Subject
3.1 Body
 */

import React, { useState } from "react";

// Render
function FormsApp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [subject, setsubject] = useState("");
  const [bodyContent, setbodyContent] = useState("");

  function onFormSubmit(event) {
    // Prevents page reload
    event.preventDefault();
    // We can now use our states as a payload in an API call
    const formData = {
      firstName,
      lastName,
      subject,
      body: bodyContent,
    };
    fetch("http://www.example.com", {
      method: "post",
      body: JSON.stringify(formData),
    });
  }

  // Fn's that gets called when user changes input value, that set current value of input to the new state
  function onFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  function onLastNameChange(event) {
    setlastName(event.target.value);
  }
  function onSubjectChange(event) {
    setsubject(event.target.value);
  }
  function onBodyChange(event) {
    setbodyContent(event.target.value);
  }

  return (
    <div>
      --- Forms
      <form onSubmit={onFormSubmit}>
        <label htmlFor="first-name">First name</label>
        <input
          name="first-name"
          value={firstName}
          placeholder="Your first name"
          // input changes based on the user’s input
          onChange={onFirstNameChange}
        />
        <label htmlFor="last-name">Last name</label>
        <input
          name="last-name"
          value={lastName}
          placeholder="Your last name"
          onChange={onLastNameChange}
        />
        <label htmlFor="subject">Subject</label>
        <input
          name="subject"
          value={subject}
          placeholder="Your subject here"
          onChange={onSubjectChange}
        />
        <label htmlFor="bodyContent">Body</label>
        <input
          name="bodyContent"
          value={bodyContent}
          placeholder="Your body here"
          onChange={onBodyChange}
        />
        {/* Button to submit form */}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default FormsApp;

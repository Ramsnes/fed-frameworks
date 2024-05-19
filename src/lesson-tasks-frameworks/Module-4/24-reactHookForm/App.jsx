/* 
- Create a form that contains the following inputs.
2.1 fullName: A string. Must be greater than 3 characters and less than 50 characters. Required field.
2.2 email: A string. Must be a valid email address (use email() or a Regex pattern). Required field.
2.3 subject: A string. Must be greater than 3 characters and less than 100 characters. Required field.
2.4 body: A string. Must be greater than 3 characters and less than 1000 characters. Required field.
 */
import React from "react";
import { useForm } from "react-hook-form";
// yup not used in this example lesson task
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function ReactHookForm() {
  // handleSubmit receives the form data if validation is succs.
  // register registers input by creating a ref
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      --- React hook form
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("fullName", {
            required: true,
            minLength: 3,
            maxLength: 50,
          })}
        />
        <input
          {...register("email", {
            required: true,
            pattern: /[A-Za-z]{3}/,
          })}
        />
        <select
          {...register("subject", {
            required: true,
            minLength: 3,
            maxLength: 100,
          })}
        >
          <option value={"complaint"}>Complaint</option>
          <option value={"other"}>Other</option>
        </select>
        <input
          {...register("body", {
            required: true,
            minLength: 3,
            maxLength: 100,
          })}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default ReactHookForm;

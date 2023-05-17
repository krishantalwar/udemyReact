import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

import classes from "./AddUser.module.css";

export default function AddUser(props) {
  const [inputs, setinputs] = useState({
    name: "",
    age: "",
  });
  const [error, setError] = useState();

  function nameHandle(event) {
    setinputs((prevstate) => {
      return { ...prevstate, name: event.target.value };
    });
  }
  function ageHandle(event) {
    setinputs((prevstate) => {
      return { ...prevstate, age: event.target.value };
    });
  }

  function submitHandle(event) {
    event.preventDefault();
    for (let val in inputs) {
      if (inputs[val] == "") {
        // alert("Please enter value in " + val + " input");
        setError({
          title: "Invalid input",
          message: "Please enter a valid name and age (non-empty values).",
        });
        return false;
      }
    }
    if (inputs.age < 0) {
      // alert("Please enter value greater than zero");
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return false;
    }
    // console.log("sddd");
    event.preventDefault();
    inputs.id = Math.random().toString();
    // console.log(inputs);
    props.addUser(inputs);
    // setinputs((prevstate) => {
    //   return { ...prevstate };
    // });
  }

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {/* <form onSubmit={submitHandle}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={inputs.name}
            onChange={nameHandle}
            name="name"
          />
        </div>

        <div>
          <label>Age (Years)</label>
          <input
            type="number"
            value={inputs.age}
            onChange={ageHandle}
            name="age"
          />
        </div>
        <div>
          <input type="submit" name="submit" value="submit" />
        </div>
      </form> */}

      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandle}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={inputs.name}
            onChange={nameHandle}
            name="name"
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={inputs.age}
            onChange={ageHandle}
            name="age"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

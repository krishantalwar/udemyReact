import React, { useState } from "react";
export default function AddUser() {
  const [inputs, setinputs] = useState({
    name: "",
    age: "",
  });

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

  return (
    <div>
      <form>
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
      </form>
    </div>
  );
}

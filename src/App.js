import React, { useState } from "react";
import Users from "./components/Userlist/Users";
import AddUser from "./components/AddUser/AddUser";
const Dummy_User = [];
const App = () => {
  const [user, setUser] = useState(Dummy_User);

  const addUserHandler = (user) => {
    setUser((prevExpenses) => {
      return [user, ...prevExpenses];
    });
  };

  const deletHandle = (id) => {
    console.log(id);
    setUser((prevExpenses) => {
      // console.log(prevExpenses);
      // console.log(...prevExpenses.splice(id, 1));
      // let prevExpensess = prevExpenses;
      // let s = prevExpensess.splice(id, 1);
      // console.log(s);
      // console.log(prevExpensess);
      return [...prevExpenses];
    });
  };

  return (
    <div>
      <AddUser users={user} addUser={addUserHandler} />
      <Users users={user} delete={deletHandle} />
    </div>
  );
};

export default App;

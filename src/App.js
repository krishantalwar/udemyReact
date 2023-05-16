import React, { useState } from "react";
import Userlist from "./components/Userlist/Userlist";
import AddUser from "./components/AddUser/AddUser";
const user = [];
const App = () => {
  return (
    <div>
      <AddUser />
      <Userlist users={user} />
    </div>
  );
};

export default App;

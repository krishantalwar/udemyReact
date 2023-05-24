import Userlist from "./Userlist";
import React, { Fragment } from "react";
export default function Users(props) {
  // console.log(props);
  return (
    <React.Fragment className="userlist">
      <Userlist delete={props.delete} users={props.users} />
    </React.Fragment>
  );
}

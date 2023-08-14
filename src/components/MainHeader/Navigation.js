import React, { useContext } from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../store/authContext";
// import AuthContextProvider from "../../store/authContext";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  console.log(ctx);
  console.log(ctx.onLogout);
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;

// <AuthContext.Consumer>
//   {(context) => {
//     console.log(context);
//     return (
//       <nav className={classes.nav}>
//         <ul>
//           {context.isLoggedIn && (
//             <li>
//               <a href="/">Users</a>
//             </li>
//           )}
//           {context.isLoggedIn && (
//             <li>
//               <a href="/">Admin</a>
//             </li>
//           )}
//           {context.isLoggedIn && (
//             <li>
//               <button onClick={props.onLogout}>Logout</button>
//             </li>
//           )}
//         </ul>
//       </nav>
//     );
//   }}
// </AuthContext.Consumer>;

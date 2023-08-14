import React, { useEffect, useState, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/authContext";
// import AuthContextProvider from "./store/authContext";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // useEffect(() => {
  //   // console.log("dddd");
  //   const isLoggedIns = localStorage.getItem("isLoggedIn");
  //   if (isLoggedIns === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);
  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };
  const authContext = useContext(AuthContext);
  return (
    <React.Fragment>
      {/* <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
      }}
    > */}
      {/* <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main> */}
      {/* </AuthContext.Provider> */}
      <MainHeader />
      {/* <div>dd</div> */}
      <main>
        {!authContext.isLoggedIn && <Login />}
        {authContext.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;

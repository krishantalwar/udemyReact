import React, { useEffect, useReducer, useState, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/authContext";

const emailReducer = (state, action) => {
  // console.log(state);
  // console.log(action);
  if (action.type === "USER_INPUT") {
    return { value: action.val, isvalid: action.val.includes("@") };
  } else if (action.type === "INPUT_BLUR") {
    return { value: state.value, isvalid: state.value.includes("@") };
  }
  return { value: "", isvalid: false };
};

const passwordReducer = (state, action) => {
  // console.log(state);
  // console.log(action);
  if (action.type === "PASSWORD_INPUT") {
    return { value: action.val, isvalid: action.val.trim().length > 6 };
  } else if (action.type === "INPUT_BLUR") {
    return { value: state.value, isvalid: state.value.trim().length > 6 };
  }
  return { value: "", isvalid: false };
};

const Login = (props) => {
  // const [, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isvalid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    val: "",
    isvalid: null,
  });

  const authContext = useContext(AuthContext);
  // useEffect(() => {
  //   console.log("ss");
  //   const change = setTimeout(() => {
  //     setFormIsValid((prev) => {
  //       console.log("dddddde");
  //       return enteredEmail.includes("@") && enteredPassword.trim().length > 6;
  //     });
  //   }, 200);

  //   return () => {
  //     console.log("cleanup");
  //     clearTimeout(change);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const { isvalid: emailIsValid } = emailState;
  const { isvalid: passwordIsValid } = passwordState;

  useEffect(() => {
    console.log("ss");
    const change = setTimeout(() => {
      setFormIsValid((prev) => {
        console.log("dddddde");
        // return emailState.isvalid && passwordState.isvalid;
        return passwordIsValid && emailIsValid;
      });
    }, 200);

    return () => {
      console.log("cleanup");
      clearTimeout(change);
    };
    // }, [emailState, passwordState]);
    // }, [emailState.isvalid, passwordState.isvalid]);
  }, [emailIsValid, passwordIsValid]);

  // const emailChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  // const emailChangeHandler = (event) => {
  //   dispatchEmail({ type: "USER_INPUT", val: event.target.value });

  //   console.log("emailState.isvalid");
  //   console.log(emailState.isvalid);
  //   setFormIsValid(emailState.isvalid && enteredPassword.trim().length > 6);
  // };
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    // console.log("emailState.isvalid");
    // console.log(emailState.isvalid);
    // setFormIsValid(event.target.value.includes("@") && passwordState.isvalid);
  };

  // const passwordChangeHandler = (event) => {
  //   setEnteredPassword(event.target.value);
  // };

  // const passwordChangeHandler = (event) => {
  //   setEnteredPassword(event.target.value);

  //   setFormIsValid(emailState.isvalid && event.target.value.trim().length > 6);
  // };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "PASSWORD_INPUT", val: event.target.value });
    // setFormIsValid(emailState.isvalid && event.target.value.trim().length > 6);
  };

  // const validateEmailHandler = () => {
  //   setEmailIsValid(emailState.isvalid);
  // };
  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  // const validatePasswordHandler = () => {
  //   setPasswordIsValid(enteredPassword.trim().length > 6);
  // };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   props.onLogin(enteredEmail, enteredPassword);
  // };

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   props.onLogin(emailState.value, enteredPassword);
  // };
  const submitHandler = (event) => {
    event.preventDefault();
    authContext.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isvalid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isvalid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

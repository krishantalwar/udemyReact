import React, { useState } from "react";
import "./ExpenseFrom.css";
import Input from "../UI/Input";
export default function ExpenseForm(props) {
  //   const [title, setTitle] = useState("");
  //   const [amount, setAmount] = useState("");
  //   const [date, setDate] = useState("");

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });
  //   console.log(userInput);
  function titleChange(event) {
    // console.log(event);
    // setTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  }

  function amountChange(event) {
    // console.log(event);
    // setAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  }
  function dateChange(event) {
    // console.log(event);
    // setDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  }

  function onsubmit(event) {
    // console.log("sadsad");
    event.preventDefault();
    // console.log(userInput);
    props.onSave(userInput);
    setUserInput(() => {
      return {
        title: "",
        amount: "",
        date: "",
      };
    });
  }

  return (
    <form onSubmit={onsubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <lable>Title</lable>
          <input type="text" value={userInput.title} onChange={titleChange} />
        </div>

        <div className="new-expense__control">
          <lable>Amount</lable>
          <input
            type="number"
            value={userInput.amount}
            onChange={amountChange}
            min="0.01"
            step="0.01"
          />
        </div>

        <div className="new-expense__control">
          <lable>Date</lable>
          <input type="date" value={userInput.date} onChange={dateChange} />
        </div>

        <div classNam e="new-expense__actions">
          <button type="submit">submit</button>
        </div>
      </div>
    </form>
  );
}

import React, { useState } from "react";
import "./ExpenseItmes.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

export default function ExpenseItems(props) {
  // function changeTitle() {
  //   console.log("e");
  // }
  // console.log(props);
  const [title, setTitle] = useState(props.title);

  const clickChangeTitleHandler = () => {
    // let title = "ddd";
    setTitle(Math.random());
  };

  return (
    <Card className="expense-item ">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>

        <button
          onClick={clickChangeTitleHandler}
          className="expense-item__price"
        >
          Change Title
        </button>
      </div>
    </Card>
  );
}

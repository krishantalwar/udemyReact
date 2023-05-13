import React, { useState } from "react";
import "./ExpenseItmes.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

export default function ExpenseItems(props) {
  // function changeTitle() {
  //   console.log("e");
  // }

  const [title, setTitle] = useState(props.title);

  // console.log(title);
  // console.log(setTitle);
  // function setTitle() {
  //   title = title;
  // }

  const clickChangeTitleHandler = () => {
    // let title = "ddd";
    console.log("e");
    setTitle("ssss");
  };

  return (
    <Card className="expense-item ">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>

        <button onClick={setTitle} className="expense-item__price">
          Change Title
        </button>
      </div>
    </Card>
  );
}

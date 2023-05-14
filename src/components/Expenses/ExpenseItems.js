import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItems.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickChangeTitleHandler = () => {
    // let title = "ddd";
    setTitle(Math.random());
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <button
            onClick={clickChangeTitleHandler}
            className="expense-item__price"
          >
            Change Title
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

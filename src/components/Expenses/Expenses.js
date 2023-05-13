import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
export default function Expenses(props) {
  const [filterYear, setFtilter] = useState("2020");
  const filterchange = (event) => {
    console.log(event);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter year={filterYear} onChangeFilter={filterchange} />
      {props.items.map((e) => (
        <ExpenseItems
          id={e.id}
          amount={e.amount}
          date={e.date}
          title={e.title}
        ></ExpenseItems>
      ))}
    </Card>
  );
}

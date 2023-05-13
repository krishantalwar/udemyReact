import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";
import "./Expenses.css";

export default function Expenses(props) {
  return (
    <Card className="expenses">
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

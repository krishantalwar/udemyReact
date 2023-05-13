import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import ExpenseForm from "./components/NewExpenses/ExpenseFrom";
const expe = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpense] = useState(expe);

  const NewExpense = (saveExpenseData) => {
    // console.log(saveExpenseData);
    // console.log(saveExpenseData.saveExpenseData);
    // let exp = expenses;
    // expe.push(saveExpenseData);
    // const expenseData = [saveExpenseData, ...expenses];

    setExpense((prevState) => {
      return [saveExpenseData, ...asd];
    });

    // console.log(expe);
    // setExpense(expe);
    // console.log(expenses);
  };

  return (
    <div className="App">
      <NewExpenses newexpense={NewExpense} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

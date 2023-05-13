import React, { useState } from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseFrom";

export default function NewExpenses(props) {
  const [NewExpense, setNewExpense] = useState("");

  const saveExpense = (saveExpenseData) => {
    // console.log(saveExpenseData);
    saveExpenseData.date = new Date(saveExpenseData.date);
    // console.log(saveExpenseData);

    const expenseData = {
      ...saveExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.newexpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSave={saveExpense} />
    </div>
  );
}

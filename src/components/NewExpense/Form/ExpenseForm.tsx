import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Expenses } from "../../../App";
import "./ExpenseForm.css";

export interface ExpenseData {
  enteredTitle: string;
  enteredAmount: number;
  enteredDate: string;
}

interface ExpenseFormProps {
  onSaveExpenseData: (v: Expenses) => void;
  onCancel: (e: React.MouseEvent) => void;
}

const ExpenseForm = (props: ExpenseFormProps) => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");
  const [userInput, setUserInput] = useState<ExpenseData>({
    enteredTitle: "",
    enteredAmount: 10,
    enteredDate: "",
  });

  const { register, handleSubmit, resetField } = useForm<ExpenseData>();

  const onValid = (data: ExpenseData) => {
    const expenseData = {
      title: data.enteredTitle,
      amount: data.enteredAmount,
      date: new Date(data.enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setUserInput(data);
    resetField("enteredAmount");
    resetField("enteredDate");
    resetField("enteredTitle");
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" {...register("enteredTitle")} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            {...register("enteredAmount")}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            {...register("enteredDate")}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

import { useState } from "react";
import { useForm } from "react-hook-form";
import "./ExpenseForm.css";

interface ExpenseData {
  title: string;
  amount: number;
  Date: string;
}

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");
  const [userInput, setUserInput] = useState<ExpenseData>({
    title: "",
    amount: 10,
    Date: "",
  });
  console.log(userInput);

  const { register, handleSubmit, resetField } = useForm<ExpenseData>();

  const onValid = (data: ExpenseData) => {
    setUserInput(data);
    resetField("amount");
    resetField("Date");
    resetField("title");
  };

  return (
    <form onSubmit={handleSubmit(onValid)}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" {...register("title")} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" {...register("amount")} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2024-12-31"
            {...register("Date")}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

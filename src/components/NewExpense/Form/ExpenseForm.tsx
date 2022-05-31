import { SyntheticEvent, useState } from "react";
import "./ExpenseForm.css";

interface InputData {
  enteredTitle: string;
  enteredAmount: string;
  enteredDate: string;
}

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");
  const [userInput, setUserInput] = useState<InputData>({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const onTitleChange = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setUserInput({
      ...userInput,
      enteredTitle: target.value,
    });
  };

  const omAmountChange = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setUserInput({
      ...userInput,
      enteredAmount: target.value,
    });
  };

  const onDateChange = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setUserInput({
      ...userInput,
      enteredDate: target.value,
    });
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={onTitleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={omAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2024-12-31"
            onChange={onDateChange}
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

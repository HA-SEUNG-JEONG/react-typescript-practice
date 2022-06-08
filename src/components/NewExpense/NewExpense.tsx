import "./NewExpense.css";

import ExpenseForm from "./Form/ExpenseForm";
import { Expense } from "../../App";

interface NewExpenseProps {
  onAddExpense: (e: Expense) => void;
}

const NewExpense = ({ onAddExpense }: NewExpenseProps) => {
  const saveExpenseDataHandler = (enteredExpenseData: Expense) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log("expenseData", expenseData);
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

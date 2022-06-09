import "./NewExpense.css";

import ExpenseForm from "./Form/ExpenseForm";
import { Expenses } from "../../App";

interface NewExpenseProps {
  onAddExpense: (e: Expenses) => void;
}

const NewExpense = (props: NewExpenseProps) => {
  const saveExpenseDataHandler = (enteredExpenseData: Expenses) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData); //App으로 끌어올림
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

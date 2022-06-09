import { useState } from "react";
import Expense from "./components/Expense/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

export interface Expenses {
  id?: string;
  title: string;
  amount: number;
  date: Date;
}

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 5, 16),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 5, 17),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 18),
  },
];

const App = () => {
  const [expenseData, setExpenseData] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense: Expenses) => {
    setExpenseData((prev: any) => {
      return [expense, ...prev];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenseData} />
    </div>
  );
};

export default App;

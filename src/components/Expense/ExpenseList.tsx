import ExpenseItem from "./ExpenseItem";
import "./css/ExpensesList.css";
import { Expenses } from "../../App";

const ExpenseList = (props: any) => {
  let expensesContent: JSX.Element | JSX.Element[] = <p>No expenses Found</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Not Found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense: Expenses) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;

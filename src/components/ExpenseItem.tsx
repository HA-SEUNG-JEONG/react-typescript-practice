import InfoData from "../info";
import "./css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props: InfoData) => {
  return (
    <div className="expense-item">
      <ExpenseDate
        date={props.date}
        title={props.title}
        amount={props.amount}
      />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;

import InfoData from "../../info";
import "./css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Card";

const ExpenseItem = (props: InfoData) => {
  const onHandleClick = () => {
    console.log("click");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate
        date={props.date}
        title={props.title}
        amount={props.amount}
      />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={onHandleClick}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;

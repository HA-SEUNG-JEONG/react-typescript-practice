import InfoData from "../../info";
import "./css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Card";
import { useState } from "react";

const ExpenseItem = (props: InfoData) => {
  const [title, setTitle] = useState(props.title);

  const onHandleClick = () => {
    setTitle("updated");
    console.log(title); // 값 바로 바뀌지 않음
  };
  return (
    <Card className="expense-item">
      <ExpenseDate
        date={props.date}
        title={props.title}
        amount={props.amount}
      />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={onHandleClick}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;

import InfoData from "../../../info";
import "./ExpenseItem.css";
import ExpenseDate from "../Date/ExpenseDate";
import Card from "../../UI/Card";
import { useState } from "react";

const ExpenseItem = ({ date, title, amount }: InfoData) => {
  const [titles, setTitles] = useState<string>(title); //useState 같은 Hook은 Component 안에서 호출되어야 함(예외사항 있음)
  console.log("ExpenseItem 평가됨");

  const onHandleClick = () => {
    setTitles("updated"); //비동기적으로 동작
    console.log(title); // ExpenseItem은 한번 호출된 후에는 다시 렌더링 안됨 값 바로 바뀌지 않음
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} title={title} amount={amount} />
        <div className="expense-item__description">
          <h2>{titles}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
        <button onClick={onHandleClick}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;

import ExpenseItem from "./ExpenseItem";
import "./css/Expenses.css";
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { Expenses } from "../../App";

interface Item {
  items: {
    id?: string;
    title: string;
    amount: number;
    date: Date;
  }[];
}

const Expense = (props: Item) => {
  const [filteredYear, setFilteredYear] = useState(2020);
  const filterChangeHandler = (selectedYear: number) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <React.Fragment>
        <h2>Learn React</h2>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </React.Fragment>
    </Card>
  );
};

export default Expense;

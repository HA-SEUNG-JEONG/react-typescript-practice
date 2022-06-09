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
      <div>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </div>
    </Card>
  );
};

export default Expense;

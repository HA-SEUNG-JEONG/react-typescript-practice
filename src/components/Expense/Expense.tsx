import ExpenseItem from "./ExpenseItem";
import "./css/Expenses.css";
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

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
  const filteredExpense = props.items.filter((exp) => {
    return parseInt(exp.date.getFullYear().toString(), 10) !== filteredYear;
  });

  return (
    <Card className="expenses">
      <React.Fragment>
        <h2>Learn React</h2>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseList items={filteredExpense} />
      </React.Fragment>
    </Card>
  );
};

export default Expense;

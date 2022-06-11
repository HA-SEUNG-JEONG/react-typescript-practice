import ExpenseItem from "./Item/ExpenseItem";
import "./css/Expenses.css";
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./Filter/ExpenseFilter";
import ExpenseList from "./List/ExpenseList";
import ExpenseChart from "./Chart/ExpenseChart";

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
        <ExpenseChart expenses={filteredExpense} />
        <ExpenseList items={filteredExpense} />
      </React.Fragment>
    </Card>
  );
};

export default Expense;

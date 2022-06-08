import React from "react";
import "./css/ExpenseFilter.css";

interface YearData {
  onChangeFilter: Function;
  selected: number;
}

const ExpenseFilter = (props: YearData) => {
  const onFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={onFilterChange}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
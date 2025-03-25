import React from "react";
import categories from "./Categories";
import './ExpenseStyle.css'


interface Props {
  onSelect: (category: string) => void;
}

const ExpenseFilter = ({ onSelect }: Props) => {
  return (
    <>
      <div className="sec-filter">
        <select
          className="form-select form-select-sm mb-4 border-primary shadow"
          
          onChange={(data) => onSelect(data.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default ExpenseFilter;

import React from "react";
import './ExpenseStyle.css'

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
    expenses: Expense[];
    onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses , onDelete}: Props) => {
  return (
    <div className="table-container ">
      <table className="custom-table  ">
        <thead className="bg-primary text-white custom-table">
          <tr>
            <th>Description</th>
            <th>($) Amount</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>${expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => onDelete(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <th>
              $
              {expenses
                .reduce((acc, expenses) => acc + expenses.amount, 0)
                .toFixed(2)}
            </th>
            <th></th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;

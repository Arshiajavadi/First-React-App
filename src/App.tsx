import { useState } from "react";
import ExpenseFilter from "./Components/expense-tracker/componenets/ExpenseFilter";
import ExpenseForm from "./Components/expense-tracker/componenets/ExpenseForm";
import ExpenseList from "./Components/expense-tracker/componenets/ExpenseList";

function App() {
  const [selectCategory, setSelectCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Netflix Subscription",
      amount: 15.99,
      category: "Entertainment",
    },
    {
      id: 2,
      description: "Electricity Bill",
      amount: 85.5,
      category: "Utilities",
    },
    {
      id: 3,
      description: "Concert Tickets",
      amount: 120,
      category: "Entertainment",
    },
    {
      id: 4,
      description: "Weekly Groceries",
      amount: 65.75,
      category: "Groceries",
    },
    {
      id: 5,
      description: "Water Bill",
      amount: 45.2,
      category: "Utilities",
    },
    {
      id: 6,
      description: "Movie Night",
      amount: 28,
      category: "Entertainment",
    },
  ]);

  const visiblity = selectCategory
    ? expenses.filter((expense) => expense.category === selectCategory)
    : expenses;

  return (
    <>
      <div className="heading">
        <h1 className="h1">Expense Tracker</h1>
      </div>
      <ExpenseForm
        onSubmit={(expense) =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />
      <ExpenseFilter onSelect={(category) => setSelectCategory(category)} />
      
          {expenses.length > 0 ? (
        <ExpenseList
          expenses={visiblity}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      ) : (
        <p>No Expenses Found</p>
      )}
    </>
  );
}

export default App;

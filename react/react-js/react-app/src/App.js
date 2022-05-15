import "./App.css";

import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import { useState } from "react";
import ExpensesChart from "./components/Expenses/ExpensesChart";

const DUMMY_EXPENSES = [
  { id: 1, title: "Car insurance", amount: 100, date: new Date(2021, 6, 12) },
  {
    id: 2,
    title: "Bike insurance",
    amount: 200,
    date: new Date(2021, 4, 12),
  },
  {
    id: 3,
    title: "Boat insurance",
    amount: 300,
    date: new Date(2021, 1, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [filteredYear, setFilteredYear] = useState("2021");

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let new_expenses = expenses.filter(
    (item) => item.date.getFullYear() == filteredYear
  );

  return (
    <Card>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>
      <ExpensesChart expenses={new_expenses}></ExpensesChart>
      {new_expenses.length === 0 ? (
        <p>No Expenses Found</p>
      ) : (
        new_expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            ></ExpenseItem>
          );
        })
      )}
    </Card>
  );
};

export default App;

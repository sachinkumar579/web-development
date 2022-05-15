import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //  enteredTitle: "",
  // enteredAmount: "",
  // enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    /*setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });*/
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    /*setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });*/
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    /* setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });*/
  };

  function submitHandler(event) {
    event.preventDefault();

    updateForm();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
  }

  const [addNewExpense, setAddNewExpense] = useState(true);

  const updateForm = () => {
    setAddNewExpense((previouState) => {
      setAddNewExpense(!previouState);
    });
  };

  if (addNewExpense) {
    return (
      <form onSubmit={submitHandler}>
        <button type="submit">Add New Expense</button>
      </form>
    );
  }

  console.log("ok");

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={updateForm}>
          Cancel
        </button>
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

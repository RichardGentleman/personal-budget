import React, { useState } from "react";
import Items from "./components/Items";
import Form from "./components/Form";
import User from "./components/User";
import RemainingBudget from "./components/RemainingBudget";

import "./App.css";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    name: "Groceries",
    price: 115,
  },
  {
    id: "e2",
    name: "Phone Bill",
    price: 85,
  },
];

const yourBudget = 2000;
let onStartExpenses = [0];

for (let i = 0; i < DUMMY_EXPENSES.length; i++) {
  onStartExpenses = parseInt(onStartExpenses) + parseInt(DUMMY_EXPENSES[i].price);
}

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [remainingBudget, setRemainingBudget] = useState(yourBudget - onStartExpenses);

  let currentExpenses = [0];
  for (let i = 0; i < expenses.length; i++) {
    currentExpenses = parseInt(currentExpenses) + parseInt(expenses[i].price);
  }

  const enteredDataHandler = (enteredData) => {
    setExpenses((previousExpenses) => {
      return [enteredData, ...previousExpenses];
    });

    setRemainingBudget(() => {
      return yourBudget - (currentExpenses + parseInt(enteredData.price));
    });
  };

  return (
    <div className="App">
      <h1 className="heading__large">Personal Budget</h1>
      <User />
      <RemainingBudget remainingBudget={remainingBudget} />
      <Form newItemEnteredData={enteredDataHandler} />
      <Items expenses={expenses} />
    </div>
  );
};

export default App;

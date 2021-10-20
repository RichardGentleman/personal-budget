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

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [remainingBudget, setRemainingBudget] = useState(1800);

  const enteredDataHandler = (enteredData) => {
    setExpenses((previousExpenses) => {
      return [enteredData, ...previousExpenses];
    });

    setRemainingBudget(() => {
      const previousData = expenses.reduce(
        (a, v) => (a = parseInt(a) + parseInt(v.price)),
        0
      );
      return 2000 - (previousData + +parseInt(enteredData.price));
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

import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import "./Form.css";

const Form = (props) => {
  const [enteredItemName, setEnteredItemName] = useState("");
  const [enteredItemPrice, setEnteredItemPrice] = useState("");

  const nameInputHandler = (event) => {
    setEnteredItemName(event.target.value);
  };

  const priceInputHandler = (event) => {
    setEnteredItemPrice(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredData = {
      name: enteredItemName,
      price: enteredItemPrice,
      id: Math.random().toString(),
    };

    props.newItemEnteredData(enteredData);
    setEnteredItemName("");
    setEnteredItemPrice("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form">
        <div className="form-subtitle">Add Expense</div>
        <div className="form-row">
          <div className="form-row__input-card">
            <div>
              <label>Name</label>
            </div>

            <div>
              <input
                type="text"
                value={enteredItemName}
                onChange={nameInputHandler}
              />
            </div>
          </div>
          <div className="form-row__input-card">
            <label>Price</label>
            <input
              type="number"
              value={enteredItemPrice}
              onChange={priceInputHandler}
            />
          </div>

          <Fab size="small" type="submit" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </div>
      </div>
    </form>
  );
};

export default Form;

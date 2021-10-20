import Item from "./Item";

import "./Items.css";

const Items = (props) => {
  return (
    <div className="items">
      {props.expenses.map((expense) => (
        <Item key={expense.id} name={expense.name} price={expense.price} />
      ))}
    </div>
  );
};

export default Items;

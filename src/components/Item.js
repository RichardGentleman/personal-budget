import "./Item.css";

const Item = (props) => {
  return (
    <div className="item">
      <div className="item__name">{props.name}</div>
      <div className="item__price">{props.price} €</div>
    </div>
  );
};

export default Item;

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./User.css";

const User = () => {
  return (
    <div className="user">
      <div className="user-info">
        <AccountCircleIcon />
        <div className="user-info__name">John Doe</div>
      </div>

      <div className="user-budget">Your Budget: 2000 €</div>
    </div>
  );
};

export default User;

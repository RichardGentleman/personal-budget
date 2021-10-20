import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

import "./RemainingBudget.css";

const RemainingBudget = (props) => {
  return (
    <div className="remaining-budget">
      <MonetizationOnIcon
        sx={{ fontSize: 60 }}
        className="remaining-budget__logo"
      />
      <div className="remaining-budget__text--medium">
        <div className="remaining-budget__text--small">remaining</div>
        {props.remainingBudget}
      </div>
    </div>
  );
};

export default RemainingBudget;

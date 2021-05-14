import { Fragment } from "react";
import "./CalculatorInstruction.css";

const CalculatorInstruction = () => {
  return (
    <Fragment>
      <div className="instruct-box">
        <div className="help-header">
          <i
            className="fas fa-exclamation-circle"
            style={{ fontSize: "20px", color: "#2c2cda" }}
          ></i>
          &nbsp;
          <h4>Instructions</h4>
        </div>
        <br />
        <h5>
          <i
            className="fas fa-circle"
            style={{ color: "#2c2cda", fontSize: "10px" }}
          ></i>
          &nbsp;Tap on the grey area to clear screen
        </h5>
        <h5>
          <i
            className="fas fa-circle"
            style={{ color: "#2c2cda", fontSize: "10px" }}
          ></i>
          &nbsp;Tap on multiply twice for exponent operation
        </h5>
      </div>
    </Fragment>
  );
};

export default CalculatorInstruction;

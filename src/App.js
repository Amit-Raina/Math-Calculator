import "./App.css";
import { Fragment } from "react";
import { Component } from "react";
import Calc from "./CalculatorScreen/calc";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Calc/>
      </Fragment>
    );
  }
}

export default App;

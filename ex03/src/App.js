import { Component } from "react";
import LifeCycleExample from "./components/LifeCycleExample";
import UseMemo from "./components/UseMemo";
import UseMemo2 from "./components/UseMemo2";
import Average from "./components/Average";
import UseCallback from "./components/UseCallback";
import BoxSize from "./components/BoxSize";
import AverageCallback from "./components/AverageCallback";

class App extends Component {
  state = { color: "red" };

  handleClick = () => {
    this.setState({
      color: this.state.color === "red" ? "blue" : "red",
    });
  };

  render() {
    return (
      <div>
        {/* <button onClick={this.handleClick} style={{ color: this.state.color }}>
          {this.state.color}
        </button> */}
        {/* <LifeCycleExample color={this.state.color}></LifeCycleExample>
        <UseMemo></UseMemo>
        <UseMemo2></UseMemo2>
        <Average></Average> */}
        {/* <UseCallback></UseCallback> */}
        {/* <BoxSize></BoxSize> */}
        <AverageCallback></AverageCallback>
      </div>
    );
  }
}

export default App;

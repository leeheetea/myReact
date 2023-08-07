import { Component } from "react";

class LifeCycleExample extends Component {
  state = { number: 0 };

  constructor(props) {
    super(props);
    console.log("1. constructor");
  }

  componentDidMount() {
    console.log("3. componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("2-0. shouldComponentUpdate", nextProps, nextState);
    return nextState.number % 3 !== 0;
  }

  componentDidUpdate(preProps, preState) {
    console.log("2-2. componentDidUpdate", preProps, preState);
  }

  componentWillUnmount() {
    console.log("4. componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  render() {
    console.log("2-1. render");
    return (
      <div>
        <h1 style={{ color: this.props.color }}>{this.state.number}</h1>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleExample;

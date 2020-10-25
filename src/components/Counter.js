import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);

    this.state = {
      number: 0,
    };
  }

  onIncrease() {
    this.setState((prevState) => ({ number: prevState.number + 1 }));
  }

  onDecrease() {
    this.setState((prevState) => ({ number: prevState.number - 1 }));
  }

  render() {
    return (
      <section className="counter">
        <input
          type="button"
          value="+"
          className="button"
          onClick={this.onIncrease}
        />
        <span className="number">{this.state.number}</span>
        <input
          type="button"
          value="-"
          className="button"
          onClick={this.onDecrease}
        />
      </section>
    );
  }
}

export default Counter;

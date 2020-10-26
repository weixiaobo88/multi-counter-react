import React, { Component } from "react";
import "./Counter.css";
import {
  COUNTER_INIT_VALUE,
  COUNTER_INCREMENT_VALUE,
  COUNTER_DECREMENT_VALUE,
} from "../constants/constants";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);

    this.state = {
      number: COUNTER_INIT_VALUE,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.size !== this.props.size) {
      this.setState({ number: COUNTER_INIT_VALUE });
    }
  }

  onIncrease() {
    this.setState(
      (prevState) => ({ number: prevState.number + COUNTER_DECREMENT_VALUE }),
      () => this.props.onUpdate(COUNTER_INCREMENT_VALUE)
    );
  }

  onDecrease() {
    this.setState(
      (prevState) => ({ number: prevState.number + COUNTER_DECREMENT_VALUE }),
      () => this.props.onUpdate(COUNTER_DECREMENT_VALUE)
    );
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

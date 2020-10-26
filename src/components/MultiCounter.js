import React, { Component } from "react";
import CounterSizeGenerator from "./CounterSizeGenerator";
import CounterGroupSum from "./CounterGroupSum";
import CounterGroup from "./CounterGroup";

export default class MultiCounter extends Component {
  constructor(props) {
    super(props);

    this.onGenerate = this.onGenerate.bind(this);
    this.onUpdate = this.onUpdate.bind(this);

    this.state = { size: 0, sum: 0 };
  }

  onGenerate(size) {
    this.setState({ size, sum: 0 });
  }

  onUpdate(value) {
    this.setState((prevState) => ({ sum: prevState.sum + value }));
  }

  render() {
    return (
      <div>
        <CounterSizeGenerator onGenerate={this.onGenerate} />
        <CounterGroupSum sum={this.state.sum} />
        <CounterGroup size={this.state.size} onUpdate={this.onUpdate} />
      </div>
    );
  }
}

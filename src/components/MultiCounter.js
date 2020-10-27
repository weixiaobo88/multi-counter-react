import React, { Component } from "react";
import CounterSizeGeneratorContainer from "../containers/CounterSizeGeneratorContainer";
import CounterGroupContainer from "../containers/CounterGroupContainer";
import CounterGroupSumContainer from "../containers/CounterGroupSumContainer";

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
        <CounterSizeGeneratorContainer />
        <CounterGroupSumContainer />
        <CounterGroupContainer />
      </div>
    );
  }
}

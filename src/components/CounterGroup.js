import React, { Component } from "react";
import CounterContainer from "../containers/CounterContainer";
import { COUNTER_GROUP_INIT_SIZE } from "../constants/constants";

class CounterGroup extends Component {
  initArray(size) {
    const number = size.length > 0 ? parseInt(size) : COUNTER_GROUP_INIT_SIZE;
    return Array.from(Array(number).keys());
  }

  render() {
    const { size, onUpdate } = this.props;
    const counterSizeArray = this.initArray(size);

    return (
      <div>
        {counterSizeArray.map((value) => (
          <CounterContainer key={value} size={size} onUpdate={onUpdate} />
        ))}
      </div>
    );
  }
}

export default CounterGroup;

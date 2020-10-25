import React, { Component } from "react";
import Counter from "./Counter";

class CounterGroup extends Component {
  initArray(size) {
    return Array.from(Array(size).keys());
  }

  render() {
    // const size = this.props.size;
    const { size } = this.props;
    const counterSizeArray = this.initArray(size);

    return (
      <div>
        {counterSizeArray.map((index) => (
          <Counter key={index} />
        ))}
      </div>
    );
  }
}

export default CounterGroup;

import React, { Component } from "react";
import { COUNTER_GROUP_INIT_SIZE } from "../constants/constants";
class CounterSizeGenerator extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = { size: COUNTER_GROUP_INIT_SIZE };
  }

  onChange(event) {
    const value = event.target.value;
    this.setState(() => {
      return { size: value };
    });

    this.props.updateCounterSize(value);
    this.props.resetSum();
  }

  render() {
    return (
      <fieldset>
        <label htmlFor="size">size:</label>
        <input
          type="number"
          name="size"
          id="size"
          value={this.state.size}
          onChange={this.onChange}
        />
      </fieldset>
    );
  }
}

export default CounterSizeGenerator;

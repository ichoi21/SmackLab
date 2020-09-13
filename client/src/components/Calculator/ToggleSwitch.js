import React, { Component } from "react";

class ToggleSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  onChange = (e) => {
    //pass state to parent component in index.js
    this.props.onChange(this.state.value);
    this.setState({ value: e.target.value });
  };

  static defaultProps = {
    min: 0,
    max: 1,
    step: 1,
  };

  render() {
    return (
      <div className="toggle">
        <input
          type="range"
          value={this.state.value}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default ToggleSwitch;

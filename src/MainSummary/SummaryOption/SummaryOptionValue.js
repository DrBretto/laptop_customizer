import React from "react";

export default class SummaryOptionValue extends React.Component {
  render() {
    return <div className="summary__option__value">{this.props.feature}</div>;
  }
}

import React from "react";

export default class SummaryOptionLabel extends React.Component {
  render() {
    return <div className="summary__option__label">{this.props.feature}</div>;
  }
}

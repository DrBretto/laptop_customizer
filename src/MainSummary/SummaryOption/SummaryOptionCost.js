import React from "react";

export default class SummaryOptionCost extends React.Component {
  render() {
    return <div className="summary__option__cost">{this.props.cost}</div>;
  }
}

import React from "react";
import SummaryTotalLabel from "./SummaryTotalLabel";
import SummaryTotalValue from "./SummaryTotalValue";

export default class SummaryTotal extends React.Component {
  render() {
    const total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );
    console.log("total: ", total);
    return (
      <div className="summary__total">
        <SummaryTotalLabel />
        <SummaryTotalValue total={total} />
      </div>
    );
  }
}

import React from "react";
import SummaryOptionCost from "./SummaryOptionCost";
import SummaryOptionValue from "./SummaryOptionValue";
import SummaryOptionLabel from "./SummaryOptionLabel";

export default class SummaryOption extends React.Component {
  render() {
    return (
      <div className="summary__option">
        <SummaryOptionLabel />
        <SummaryOptionValue />
        <SummaryOptionCost />
      </div>
    );
  }
}

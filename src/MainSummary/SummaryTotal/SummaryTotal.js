import React from "react";
import SummaryTotalLabel from "./SummaryTotalLabel";
import SummaryTotalValue from "./SummaryTotalValue";

export default class SummaryTotal extends React.Component {
  render() {
    return (
      <li>
        <SummaryTotalLabel />
        <SummaryTotalValue />
      </li>
    );
  }
}

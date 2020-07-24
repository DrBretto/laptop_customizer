import React from "react";
import SummaryOption from "./SummaryOption/SummaryOption";
import SummaryTotal from "./SummaryTotal/SummaryTotal";

export default class MainSummary extends React.Component {
  render() {
    return (
      <ul>
        <SummaryOption />
        <SummaryOption />
        <SummaryOption />
        <SummaryOption />
        <SummaryTotal />
      </ul>
    );
  }
}

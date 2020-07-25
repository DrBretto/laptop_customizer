import React from "react";
import SummaryOption from "./SummaryOption/SummaryOption";
import SummaryTotal from "./SummaryTotal/SummaryTotal";

export default class MainSummary extends React.Component {
  render() {

    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = this.state.selected[feature];

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <SummaryTotal />
      </section>
    );
  }
}

import React from "react";
import SummaryOption from "./SummaryOption/SummaryOption";
import SummaryTotal from "./SummaryTotal/SummaryTotal";

export default class MainSummary extends React.Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <SummaryOption selected={this.props.selected} />
        <SummaryTotal selected={this.props.selected} />
      </section>
    );
  }
}

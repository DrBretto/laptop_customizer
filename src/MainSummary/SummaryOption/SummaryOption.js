import React from "react";
import SummaryOptionCost from "./SummaryOptionCost";
import SummaryOptionValue from "./SummaryOptionValue";
import SummaryOptionLabel from "./SummaryOptionLabel";

export default class SummaryOption extends React.Component {
  render() {
    return Object.keys(this.props.selected).map((key) => {
      return (
        <div className="summary__option" key={key}>
          <SummaryOptionLabel key={key} feature={this.props.feature} />
          <SummaryOptionValue
            key={key}
            feature={this.props.selected[key].name}
          />
          <SummaryOptionCost
            cost={new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(this.props.selected[key].cost)}
          />
        </div>
      );
    });
  }
}

import React from "react";
import slugify from "slugify";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default class FeatureItem extends React.Component {
  render() {
    const itemHash = slugify(JSON.stringify(this.props.item.name));
    console.log("aaa", this.props.item);
    console.log("bbb", this.props.featureName);
    console.log("ccc", this.props.selected[this.props.featureName].name);
    console.log("ddd", this.props.item.name);
    console.log(
      "eee",
      this.props.item.name === this.props.selected[this.props.featureName].name
    );

    return (
      <div key={this.props.itemHash} className="feature__item">
        <input
          type="radio"
          key={itemHash}
          className="feature__option"
          name={slugify(this.props.featureName)}
          checked={
            this.props.item.name ===
            this.props.selected[this.props.featureName].name
          }
          onChange={(e) =>
            this.props.updateFeature(this.props.featureName, this.props.item)
          }
        />
        <label htmlFor={this.props.itemHash} className="feature__label">
          {this.props.item.name} (
          {USCurrencyFormat.format(this.props.item.cost)})
        </label>
      </div>
    );
  }
}

import React from "react";
import slugify from "slugify";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default class FeatureItem extends React.Component {
  render() {
    const itemHash = slugify(JSON.stringify(this.props.item.name));
    console.log("itemhash", itemHash);
    return (
      <div className="feature__item">
        <input
          id={itemHash}
          type="radio"
          key={itemHash}
          className="feature__option"
          name={slugify(this.props.featureName)}
          checked={
            this.props.item.name ===
            this.props.selected[this.props.featureName].name
          }
          onChange={(e) => {
            console.log("clicky");
            this.props.onChange(this.props.featureName, this.props.item);
          }}
        />
        <label htmlFor={itemHash} className="feature__label">
          {this.props.item.name} (
          {USCurrencyFormat.format(this.props.item.cost)})
        </label>
      </div>
    );
  }
}

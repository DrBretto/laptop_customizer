import React from "react";
import FeatureItem from "./FeatureItem";
import FeatureName from "./FeatureName";

export default class Feature extends React.Component {
  render() {
    const options = this.props.options.map((item, index) => {
      const featureHash = `${this.props.name}-${index}`;
      console.log("hash", this.props.name, index);
      const selectedClass =
        item.name === this.props.selected[this.props.name].name
          ? "feature_selected"
          : "";
      const featureClass = "feature_option" + selectedClass;
      return (
        <FeatureItem
          key={featureHash}
          item={item}
          featureName={this.props.name}
          featureClass={featureClass}
          selected={this.props.selected}
          onChange={this.props.onChange}
        />
      );
    });

    return (
      <fieldset className="feature" key={this.props.featureHash}>
        <FeatureName name={this.props.name} />
        {options}
      </fieldset>
    );
  }
}

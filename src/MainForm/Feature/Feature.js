import React from "react";
import FeatureItem from "./FeatureItem";
import FeatureName from "./FeatureName";

export default class Feature extends React.Component {
  render() {
    return (
      <fieldset className="feature">
        <FeatureItem />
        <FeatureName />
      </fieldset>
    );
  }
}

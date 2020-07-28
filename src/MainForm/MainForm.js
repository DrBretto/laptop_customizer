import React from "react";
import Feature from "./Feature/Feature";

export default class MainForm extends React.Component {
  render() {
    console.log(this.props);
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      return (
        <Feature
          name={feature}
          key={featureHash}
          options={this.props.features[feature]}
          selected={this.props.selected}
          onChange={this.props.onChange}
        />
      );
    });

    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}

import React from "react";

export default class FeatureName extends React.Component {
  render() {
    return (
      <legend className="feature__name">
        <h3>{this.props.name}</h3>
      </legend>
    );
  }
}

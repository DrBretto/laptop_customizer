import React from "react";

export default class FeatureItem extends React.Component {
  render() {
    return (
      <div className="feature__item">
        <input
          type="radio"
          id='"name":"17th-Generation-Intel-Core-HB-(7-Core-with-donut-spare)""cost":700'
          className="feature__option"
          name="Processor"
          // ! checked=""
          defaultChecked
        />
        <label
          htmlFor='"name":"17th-Generation-Intel-Core-HB-(7-Core-with-donut-spare)""cost":700'
          className="feature__label"
        >
          17th Generation Intel Core HB (7 Core with donut spare) ($700.00)
        </label>
      </div>
    );
  }
}

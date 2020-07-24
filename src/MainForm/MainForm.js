import React from "react";
import Feature from "./Feature/Feature";

export default class MainForm extends React.Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <Feature />
        <Feature />
        <Feature />
        <Feature />
      </form>
    );
  }
}

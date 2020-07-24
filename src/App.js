import React from "react";
import MainSummary from "./MainSummary/MainSummary";
import MainForm from "./MainForm/MainForm";

export default class App extends React.Component {
  render() {
    return (
      <div className="MainForm">
        <MainForm />
        <MainSummary />
      </div>
    );
  }
}

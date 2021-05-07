import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoute from "./routes/MainRoute";
import "./assets/css/global.css";

export default class App extends React.Component<any, any> {
  render() {
    return (
      <Router>
        <MainRoute />
      </Router>
    );
  }
}

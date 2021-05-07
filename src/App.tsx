import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import MainRoute from "./routes/MainRoute";
import "./assets/css/global.css";

export default class App extends React.Component<any, any> {
  render() {
    return (
      <Router>
        <div className="navigation d-flex justify-content-center py-3">
          <Link to="/" className="mr-5">
            Home
          </Link>
          <Link to="/favorite">My Favorite</Link>
        </div>
        <MainRoute />
      </Router>
    );
  }
}

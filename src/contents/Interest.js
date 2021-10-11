import React, { Component } from "react";
import Social from "../components/Social";

class Interest extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Interest</h1>
        <h3>Football</h3>
        <h3>Chess</h3>
        <h3>Design</h3>
        <h3>Badminton</h3>
        <h3>Games</h3>
        <Social />
      </div>
    );
  }
}

export default Interest;

import React, { Component } from "react";
import Social from "../components/Social";

class Award extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Award</h1>
        <h3>Sertifikat Desain Grafis dari BNSP</h3>
        <h3>Sertifikat Junior Mobile Programming dari BNSP</h3>
        <h3>Sertifikat Lisensi Operator Gardu Induk dari BNSP</h3>
        <Social />
      </div>
    );
  }
}

export default Award;

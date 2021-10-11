import React, { Component } from "react";
import Widecard from "../components/Widecard";

class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        <Widecard
          title="Informatics Engineering"
          where="ARS University"
          from="September 2018"
          to="Present"
        />
        <Widecard
          title="Electrical Engineering"
          where="Technical High School 4 Bandung"
          from="2008"
          to="2011"
        />
      </div>
    );
  }
}

export default Education;

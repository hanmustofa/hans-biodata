import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/han.jpg";
import Social from "../components/Social";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
        <ReactTypingEffect
          className="typingeffect"
          text={["I am Hanii mustofa", "I am a Android developer"]}
          speed={100}
          eraseDelay={700}
        />
        <Social />
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import Nikko from "../img/Nikko_Jpn.jpg";
import "../css/ImageBorder3.css";
import "bootstrap/dist/css/bootstrap.min.css";

class ImageBorder3 extends Component {
  render() {
    return (
      <div className="container3">
        <img src={Nikko} alt="Nikko" />
        <div className="centered">Stuff To Do</div>
      </div>
    );
  }
}

export default ImageBorder3;
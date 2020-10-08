import React, { Component } from "react";
import CherryBlossom from "../img/CherryBlossom.jpg";
import "../css/ImageBorder2.css";
import "bootstrap/dist/css/bootstrap.min.css";

class ImageBorder2 extends Component {
  render() {
    return (
      <div className="container2">
        <img src={CherryBlossom} alt="CherryBlossom" />
        <div className="centered">Destinations</div>
      </div>
    );
  }
}

export default ImageBorder2;
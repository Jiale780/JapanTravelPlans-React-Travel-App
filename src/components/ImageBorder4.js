import React, { Component } from "react";
import Shirakawago from "../img/Shirakawago.jpg";
import "../css/ImageBorder4.css";
import "bootstrap/dist/css/bootstrap.min.css";

class ImageBorder4 extends Component {
    render() {
        return (
            <div className="container4">
                <img src={Shirakawago} alt="Shirakawago" />
                <div className="centered">Plan Your Trip</div>
            </div>
        );
    }
}

export default ImageBorder4;
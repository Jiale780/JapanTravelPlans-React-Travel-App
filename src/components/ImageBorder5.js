import React, { Component } from "react";
import JapanRobot from "../img/JapanRobot.jpg";
import "../css/ImageBorder5.css";
import "bootstrap/dist/css/bootstrap.min.css";

class ImageBorder5 extends Component {
    render() {
        return (
            <div className="container5">
                <img className="img" src={JapanRobot} alt="JapanRobot" />
                <div className="centered">Enquiry Form</div>
            </div>
        );
    }
}

export default ImageBorder5;
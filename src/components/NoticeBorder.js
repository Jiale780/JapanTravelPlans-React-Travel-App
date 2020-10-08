import React, { Component } from "react";
//import ReactDOM from "react-dom";
import { Row, Col } from "react-bootstrap";
import "../css/NoticeBorder.css";
import "bootstrap/dist/css/bootstrap.min.css";

class NoticeBorder extends Component {
    render() {
        return (
            <div className="Container">
                <h4 className="h4text">
                    [Warning Notice] - Coronavirus (COVID-19) advisory information &nbsp;
                        <a href="#" className="clickLink">Read More Info</a>
                </h4>
            </div>
        );
    }
}

export default NoticeBorder;
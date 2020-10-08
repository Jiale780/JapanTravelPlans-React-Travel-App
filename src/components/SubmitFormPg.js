import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/SubmitFormPg.css";

class SubmitFormPg extends Component {
    render() {
        return (
            <Container>
                <p className="EmptySpace1" />
                <h2 className="h2style">Thank you for submitting in this enquiry form!</h2>

                <p className="EmptySpace2" />
                <h4 className="h4Header">Click on the Enquiry Form and Refresh it/Click on the Home Page</h4>

                <p className="EmptySpace3" />
            </Container>
        );
    }
}

export default SubmitFormPg;
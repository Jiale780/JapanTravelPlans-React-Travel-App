import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../css/Footer.css";

const Footer = () => {
    return (
        <MDBFooter className="font-small pt-4 mt-4 footer">
            <MDBContainer fluid className="text-center text-md-center footerInner">
                <MDBRow className="footorRow">
                    <MDBCol md="3" className="footerCol">
                        <h5 className="title1 font-weight-bold mt-3 mb-4">Useful Links</h5>
                        <ul className="underlined1">
                            <li className="list-unstyled list1">
                                <a href="#!">First Experience Visitors</a>
                            </li>
                            <li className="list-unstyled list1">
                                <a href="#!">Japan Weather</a>
                            </li>
                            <li className="list-unstyled list1">
                                <a href="#!">WIFI-Free in Japan</a>
                            </li>
                            <li className="list-unstyled list1">
                                <a href="#!">FAQ</a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title2 font-weight-bold mt-3 mb-4">Address</h5>
                        <p>
                            3-3-1, Chome-2-5 Yotsuya, Shinjuku City, Tokyo, Japan.
                        </p>
                        <h5 className="title2 font-weight-bold mt-3 mb-4">Email Address</h5>
                        <p>
                            <a href="mailto:JTPcontact@JTP.com">JTPcontact@JTP.com</a>
                        </p>
                        <h5 className="title2 font-weight-bold mt-3 mb-4">Telephone</h5>
                        <p>
                            <a href="tel:+81390427066">+81-3-9042-7066</a>
                        </p>
                    </MDBCol>
                    <MDBCol md="2" className="footerCol">
                        <h5 className="title1 font-weight-bold mt-3 mb-4">News Updates</h5>
                        <ul className="underlined1">
                            <li className="list-unstyled list2">
                                <a href="#!">Covid-19 Updates</a>
                            </li>
                            <li className="list-unstyled list2">
                                <a href="#!">Disaster Updates</a>
                            </li>
                            <li className="list-unstyled list2">
                                <a href="#!">Cherry Blossoms {new Date().getFullYear()}</a>
                            </li>
                            <li className="list-unstyled list2">
                                <a href="#!">Sites Under Constructions</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3 footerContainer">
                <MDBContainer fluid className="footerBelowBar">
                    &copy; {new Date().getFullYear()} Copyright: Japan Travel Plans for All rights reserved.
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;
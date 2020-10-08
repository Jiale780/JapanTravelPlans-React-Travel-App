import React, { Component } from "react";
//import ReactDOM from "react-dom";
import { Navbar, Nav, NavItem, Form, FormControl, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../img/JTPLogo.jpg";
import "../css/HeaderNavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

class HeaderNavBar extends Component {
    render() {
        return (
            <Navbar className="OuterBar" expand="lg" variant="dark" sticky="top">

                <Navbar.Brand href="/">
                    <img className="logo" src={logo} alt="JTPlogo"></img>
                </Navbar.Brand>

                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="Active mr-sm-auto" collapseonselect="true">
                        <NavItem className="active">
                            <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                        </NavItem>
                        <NavItem className="active">
                            <Nav.Link as={NavLink} to="/Destinations">Destinations</Nav.Link>
                        </NavItem>
                        <NavItem className="active">
                            <Nav.Link as={NavLink} to="/StuffToDo">Stuff To Do</Nav.Link>
                        </NavItem>
                        <NavItem className="active">
                            <Nav.Link as={NavLink} to="/PlanYourTrip">Plan Your Trip</Nav.Link>
                        </NavItem>
                        <NavItem className="active">
                            <Nav.Link as={NavLink} to="/EnquiryForm">Enquiry Form</Nav.Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>

                <Form className="form-inline">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light" type="submit">Search</Button>
                </Form>

            </Navbar>
        );
    }
}

export default HeaderNavBar;
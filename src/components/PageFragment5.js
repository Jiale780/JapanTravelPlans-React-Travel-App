import React from 'react';
import { Container } from "react-bootstrap";
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SubmitFormPg from "./SubmitFormPg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/PageFragment5.css";

class PageFragment5 extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/enquiryform" exact component={EnquiryForm} />
                    <Route path="/submitformpg" component={SubmitFormPg} />
                </Switch>
            </Router>
        );
    };
}

class EnquiryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            email: "",
            inquiryType: null,
            subject: "",
            description: "",
            placeResidence: null,
            checkBox: null,
            topicInterest: null,
            msgDisplay: true,
            msg: ""
        }
    };

    ChangefullName = (evt) => {
        this.setState({ msgDisplay: true, fullName: evt.target.value })
    }

    ChangeEmail = (evt) => {
        this.setState({ msgDisplay: true, email: evt.target.value })
    }

    ChangeInquiryType = (evt) => {
        this.setState({ msgDisplay: true, inquiryType: evt.target.value })
    }

    ChangeSubject = (evt) => {
        this.setState({ msgDisplay: true, subject: evt.target.value })
    }

    ChangeDesc = (evt) => {
        this.setState({ msgDisplay: true, description: evt.target.value })
    }

    ChangePlaceResidence = (evt) => {
        this.setState({ msgDisplay: true, placeResidence: evt.target.value })
    }

    ChangeCheckBox = (evt) => {
        this.setState({ msgDisplay: true, checkBox: evt.target.value })
    }

    ChangeTopicInterest = (evt) => {
        this.setState({ msgDisplay: true, topicInterest: evt.target.value })
    }

    ResetBtn = () => {
        this.setState({
            fullName: "",
            email: "",
            inquiryType: null,
            subject: "",
            description: "",
            placeResidence: null,
            checkBox: null,
            topicInterest: null
        })
    }

    LogInPg = (evt) => {
        evt.preventDefault();
        const emailRegExp = /^(([^<>()\[\]\\.,;;\s@"]+([^<>()\[\]\\.,;;\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-z\-0-9]+\.)+[a-zA-z]{2,}))$/;

        if (this.state.fullName !== "" && this.state.email !== "" && this.state.inquiryType !== null &&
            this.state.subject !== "" && this.state.description !== "" && this.state.placeResidence !== null && 
            this.state.checkBox !== null && this.state.topicInterest !== null ) {
            this.setState({ msgDisplay: true, msg: "Successfully enter with all fields correctly!" })
        }
        else if (this.state.fullName.length <= 10) {
            this.setState({ msgDisplay: true, msg: "Invalid Full Name. Please enter more than or equal to 10 digits!" })
        }
        else if (this.state.email.search(emailRegExp) === -1) {
            this.setState({ msgDisplay: true, msg: "Invalid Email. Please enter correct email address!" })
        }
        else if (this.state.inquiryType === null) {
            this.setState({ msgDisplay: true, msg: "Invalid Inquiry. Please select the inquiry!" })
        }
        else if (this.state.subject.length <= 4) {
            this.setState({ msgDisplay: true, msg: "Invalid Subject. Please enter more than or equal to 4 digits!" })
        }
        else if (this.state.description.length < 16) {
            this.setState({ msgDisplay: true, msg: "Invalid Description. Please enter more than 16 digits!" })
        }
        else if (this.state.placeResidence === null) {
            this.setState({ msgDisplay: true, msg: "Invalid Place of Residence. Please select the Place of Residence!" })
        }
        else if (this.state.checkBox === null) {
            this.setState({ msgDisplay: true, msg: "Invalid CheckBox. Please tick the checkbox!" })
        }
        else if (this.state.topicInterest === null) {
            this.setState({ msgDisplay: true, msg: "Invalid Topic of Interest. Please select the topic of interests!" })
        }
        else {
            this.setState({ msgShow: true, msg: "Please enter with all the fields!" })
        }
    }

    render() {
        if (this.state.msg === "Successfully enter with all fields correctly!") {
            return <Redirect to='/submitformpg' />
        }
        return (
            <Container className="Container1">
                <form className="formControl">
                    <p className="EmptySpacing1" />
                    <button type="button" className="Btn info">See FAQs</button>
                    <p className="EmptySpacing2" />
                    <h2 className="h2Header6">Enquiry Form</h2>
                    <p className="EmptySpacing3" />

                    <label className="labels" htmlFor="fullName">Full Name* </label> <br></br>
                    <input type="text" className="form-control" id="fullName" placeholder="Enter your full name"
                        value={this.state.fullName} onChange={this.ChangefullName} />
                    <p className="EmptySpacing3" />

                    <label className="labels" htmlFor="email">Email Address* </label> <br></br>
                    <input type="text" id="email" className="form-control" placeholder="Enter your email address"
                        value={this.state.email} onChange={this.ChangeEmail} />
                    <p className="EmptySpacing3" />

                    <label className="labels" htmlFor="inquiryType">Please select of the inquiry type* </label> <br></br>
                    <select className="form-control" name="inquiryType" id="inquiryType"
                        value={this.state.inquiryType} onChange={this.ChangeInquiryType}>
                        <option selected>Select Inquiry Type</option>
                        <option value="mapnbrocreq">Maps and Brochures Request</option>
                        <option value="transportoraccess">Transportation / Access</option>
                        <option value="destinations">Destinations</option>
                        <option value="festivaldevents">Festivals and Events</option>
                        <option value="accommodation">Accommodation</option>
                        <option value="foodndrink">Food and Drink</option>
                        <option value="shopping">Shopping</option>
                        <option value="plantrip">Plan your trip</option>
                        <option value="compnorganize">Companies and Organizations</option>
                        <option value="complaint">Complaint</option>
                        <option value="others">Others</option>
                    </select>
                    <p className="EmptySpacing3" />

                    <label className="labels" htmlFor="subject">Subject* </label> <br></br>
                    <input type="text" id="subject" className="form-control" placeholder="Enter your subject"
                        value={this.state.subject} onChange={this.ChangeSubject} />
                    <p className="EmptySpacing3" />

                    <label className="labels" htmlFor="description">Description* </label> <br></br>
                    <input type="textarea" className="form-control" id="description" placeholder="Enter your description"
                        value={this.state.description} onChange={this.ChangeDesc} />
                    <p className="EmptySpacing3" />

                    <label className="labels" htmlFor="placeResidence">Please enter your place of residence* </label> <br></br>
                    <select className="form-control" name="placeResidence" id="placeResidence"
                        value={this.state.placeResidence} onChange={this.ChangePlaceResidence}>
                        <option selected>Select Which Country</option>
                        <option value="africa">Africa</option>
                        <option value="asia">Asia</option>
                        <option value="seasia">South East Asia</option>
                        <option value="europe">Europe</option>
                        <option value="middleeast">Middle East</option>
                        <option value="na">North America</option>
                        <option value="sa">South America</option>
                        <option value="oceania">Oceania</option>
                        <option value="others">Others</option>
                    </select>
                    <p className="EmptySpacing3" />

                    <label className="labels form-check-label" htmlFor="checkBox">Please read and acknowledge of
                    information gathered* </label> <br></br>
                    <input type="checkbox" id="checkBox" value={this.state.checkBox} onChange={this.ChangeCheckBox} />
                    <label className="form-check-label" htmlFor="checkBox"> &nbsp; I acknowledge to this information
                    gathered in the inquiry</label>
                    <p className="EmptySpacing3" />

                    <label className="labels" htmlFor="topicInterest">Please select which topic that interests you*</label> <br></br>
                    <select className="form-control" name="topicInterest" id="topicInterest"
                        value={this.state.topicInterest} onChange={this.ChangeTopicInterest}>
                        <option selected>Select Which Topic of Interests</option>
                        <option value="gourmet">Gourmet</option>
                        <option value="food">Local Food</option>
                        <option value="sake">Japanese sake</option>
                        <option value="nationalView">National view points</option>
                        <option value="sakura">Sakura</option>
                        <option value="garden">Japanese garden</option>
                        <option value="shopping">Shopping</option>
                        <option value="nightlife">Nightlife</option>
                        <option value="architecture">Modern architecture</option>
                        <option value="modernArt">Modern art</option>
                        <option value="traditionalArt">Traditional art</option>
                        <option value="anime">Anime And Manga</option>
                        <option value="hotspring">Hot spring</option>
                        <option value="resort">Beach resort</option>
                        <option value="hotels">Luxury hotels</option>
                        <option value="seaActivity">Marine activity</option>
                        <option value="snowActivity">Snow activity</option>
                        <option value="hikking">Trekking And Hiking</option>
                    </select>
                    <p className="EmptySpacing3" />

                    <button className="Button2 info2" onClick={this.LogInPg}>Submit</button> &nbsp; &nbsp;
                    <button className="Button3 info3" onClick={this.ResetBtn}>Reset</button>

                    <p className="EmptySpacing3" />

                    {this.state.msgDisplay &&
                    <div><h4><label className="redLabel">{this.state.msg}</label></h4></div>}
                </form>
            </Container>
        );
    }
}

export default PageFragment5;
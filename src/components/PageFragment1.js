import React, { Component } from "react";
import { Container, Row, Col, CardColumns, Card } from "react-bootstrap";
import Iframe from "react-iframe";
import NightStreet from "../img/NightStreet.jpg";
import TokyoStation from "../img/TokyoStation.jpg";
import behindTokyoTower from "../img/behindTokyoTower.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/PageFragment1.css";

class PageFragment1 extends Component {
    render() {
        const srcUrl = "https://maps.google.com/maps?q=Tokyo&t=&z=11&ie=UTF8&iwloc=&output=embed";
        return (
            <Container className="ExterContainer1">
                <p className="emptySpacing1"></p>
                {/* Columns are always 50% wide, on mobile and desktop */}
                <Row>
                    <Col xs={6}>
                        <article className="card">
                            <p className="paragraph1">
                                <br></br><br></br><br></br>
                                <h1 className="largefont1">
                                    <b> About Us </b>
                                </h1>
                                Japan Travel Plans was established in 1960. Committed to the development
                                of international tourism exchanges JTP is involved in a broad range of
                                activities both domestically and worldwide, to encourage international
                                tourists from all over the world to visit Japan.
                                <br></br><br></br><br></br>
                            </p>
                        </article>
                    </Col>
                    <Col xs={6}>
                        <article>
                            <div className="MapRouter">
                                <div className="gmapCanvas">
                                    <Iframe className="myIFrame" styles={{ height: "10px" }} src={srcUrl} />
                                    <a href="https://www.whatismyip-address.com"></a>
                                </div>
                            </div>
                        </article>
                    </Col>
                </Row>
                <div className="emptySpacing2"></div>

                <CardColumns className="cardCol1">
                    <Card className="Card1" border="success">
                        <Card.Img className="cardImg1" variant="top" src={NightStreet} />
                        <Card.Body className="cardBody1">
                            <Card.Title className="cardTitle1">Tokyo Night Street</Card.Title>
                            <Card.Text className="cardText1">
                                After sunset, there is no lack of activities to enjoy in Tokyo. Sight-seeing, partying, 
                                dining or just chilling out, there is always something for everyone to do.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="Card2" border="success">
                        <Card.Img className="cardImg2" variant="top" src={TokyoStation} />
                        <Card.Body className="cardBody2">
                            <Card.Title className="cardTitle2">Tokyo Station Hotel</Card.Title>
                            <Card.Text className="cardText2">
                            Located at the gateway of Japan – The Tokyo Station Marunouchi Building has a rich history, 
                            and is proudly a designated Important Culture Property of Japan. 
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="Card3" border="success">
                        <Card.Img className="cardImg3" variant="top" src={behindTokyoTower} />
                        <Card.Body className="cardBody3">
                            <Card.Title className="cardTitle3">Behind of the Tokyo Tower</Card.Title>
                            <Card.Text className="cardText3">
                            Standing 333 meters high in the center of Tokyo, Tokyo Tower (東京タワー) is the world's tallest, 
                            self-supported steel tower and 13 meters taller than its model, the Eiffel Tower.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </CardColumns>
                <div className="emptySpacing3"></div>

                <h2 className="h2Header1">Travel Guide Rating Comments</h2><div className="emptySpacing4"></div>
                <CardColumns className="cardCol2">
                    <Card bg="info" text="white" className="Card4 text-center p-3" border="dark">
                        <blockquote className="blockquote mb-0 card-body">
                            <p className="paragraph1">
                                Very unique tour, highly recommend if you love all things geeky odd and technology!
                                We wished the tour was longer than it was. Catered to our every whim. Knowledgeable 
                                and flexible. Helpful in every way.
                            </p>
                            <footer className="innerFooter1 blockquote-footer">
                                <small className="smallTxt1 text-muted">
                                    earsmickey quoted in <cite className="cite1" title="Source Title">Great Guide</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </Card>

                    <Card bg="info" text="white" className="Card5 text-center p-3" border="dark">
                        <blockquote className="blockquote mb-0 card-body">
                            <p className="paragraph2">
                                Beautiful guide. We particularly wanted help to understand the rail system and get 
                                our bearings in this busy city. Was well worth it and saved us days of trying to 
                                figure it out ourselves. Highly recommended.
                            </p>
                            <footer className="innerFooter2 blockquote-footer">
                                <small className="smallTxt2 text-muted">
                                    Tanya R quoted in <cite className="cite1" title="Source Title">Great introduction to Tokyo</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </Card>

                    <Card bg="info" text="white" className="Card6 text-center p-3" border="dark">
                        <blockquote className="blockquote mb-0 card-body">
                            <p className="paragraph3">
                                My husband and I were at some point reluctant to go to Japan amid the virus outbreak. 
                                But we don't regret it. This has been an outstanding holiday. We have seen some magical sights.
                            </p>
                            <footer className="innerFooter3 blockquote-footer">
                                <small className="smallTxt3 text-muted">
                                    NatBay quoted in <cite className="cite1" title="Source Title">Outstanding services</cite>
                                </small>
                            </footer>
                        </blockquote>
                    </Card>
                </CardColumns>

                <div className="emptySpacing5"></div>
            </Container>
        );
    }
}

export default PageFragment1;
import React, { Component } from "react";
import { Container, Row, Col, CardColumns, Card } from "react-bootstrap";
import { MDBMask, MDBView } from "mdbreact";
import ImperialPalace from "../img/Imperial_Palace.jpg";
import STShrine from "../img/Suwa-Taisha_Shrine.jpg";
import OkayamaCastle from "../img/Okayama_Castle.jpg";
import PilgrimageRoute from "../img/Pilgrimage_Route.jpg";
import Yamagata from "../img/Yamagata.jpg";
import Hakone from "../img/Hakone.jpg";
import Naruto from "../img/Tokushima_Naruto.jpg";
import KyotoTemple from "../img/Kyoto_Temple.jpg";
import OsakaCastle from "../img/Osaka_Castle.jpg";
import MatsumotoCastle from "../img/Matsumoto_Castle.jpg";
import OuchiJuku from "../img/Ouchi_juku.jpg";
import Niseko from "../img/Niseko.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/PageFragment2.css";

class PageFragment2 extends Component {
    render() {
        return (
            <Container className="ExterContainer2">
                <p className="emptySpace1"></p>

                <h2 className="h2Header2">Destination of places</h2> <div className="emptySpace2"></div>
                <CardColumns className="cardCol1">
                    <Card className="Card1" border="primary">
                        <MDBView hover>
                            <img src={ImperialPalace} className="img-fluid" alt="ImperialPalace" />
                            <MDBMask className="flex-center" overlay="blue-slight">
                                <p className="red-text">Tokyo Imperial Palace</p>
                            </MDBMask>
                        </MDBView>
                        <Card.Body className="cardBody1">
                            <Card.Text className="cardText1">
                                Home to the Emperor of Japan, the Imperial Palace is built upon the site of Edo Castle, home 
                                to the Shogun before 1868. Garden strolls and art treasures within an Imperial castle's grounds.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="Card2" border="primary">
                        <MDBView hover>
                            <img src={STShrine} className="img-fluid" alt="STShrine" />
                            <MDBMask className="flex-center" overlay="blue-slight">
                                <p className="white-text">Suwa Taisha Shrine</p>
                            </MDBMask>
                        </MDBView>
                        <Card.Body className="cardBody2">
                            <Card.Text className="cardText2">
                                The Suwa region at the foot of the Yatsugatake Mountains is a land of myth and legends. 4 complexes 
                                around Lake Suwa make up Suwa Taisha Shrine, a living repository of Shinto ritual lore and the 
                                spiritual heart of the area.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="Card3" border="primary">
                        <MDBView hover>
                            <img src={OkayamaCastle} className="img-fluid" alt="OkayamaCastle" />
                            <MDBMask className="flex-center" overlay="blue-slight">
                                <p className="white-text">Okayama Castle</p>
                            </MDBMask>
                        </MDBView>
                        <Card.Body className="cardBody3">
                            <Card.Text className="cardText3">
                                Okayama Castle's dark black facade led people to begin referring to it as Ujo, or "Crow Castle," 
                                a counterpoint to the white walls of Himeji Castle , just 30 minutes away on the shinkansen.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardColumns>

                <div className="emptySpace3"></div>

                <CardColumns className="cardCol2">
                    <Card className="Card4" border="dark">
                        <MDBView hover>
                            <img src={PilgrimageRoute} className="img-fluid" alt="PilgrimageRoute" />
                            <MDBMask className="flex-center" overlay="stylish-light">
                                <p className="white-text">Kumano Kodo Pilgrimage Route</p>
                            </MDBMask>
                        </MDBView>
                        <Card.Body className="cardBody4">
                            <Card.Text className="cardText4">
                                The Kumano Kodo Pilgrimage Route is one of the world's premier spiritual roads. Winding through 
                                the mountains of Honshu's Kii Peninsula, an area straddling Wakayama, Nara, Osaka and Mie 
                                prefectures, it's been walked by pilgrims on their quest for enlightenment for over a millennium.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="Card5" border="dark">
                        <MDBView hover>
                            <img src={Yamagata} className="img-fluid" alt="Yamagata" />
                            <MDBMask className="flex-center" overlay="stylish-light">
                                <p className="white-text">Yamagata</p>
                            </MDBMask>
                        </MDBView>
                        <Card.Body className="cardBody5">
                            <Card.Text className="cardText5">
                                Enclosed by the Sea of Japan to the west and mountains to the east, Yamagata Prefecture is 
                                defined by its nature. Part of southern Tohoku, Yamagata is known for snow monsters, 
                                impressive ski fields and hot springs.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="Card6" border="dark">
                        <MDBView hover>
                            <img src={Hakone} className="img-fluid" alt="Hakone" />
                            <MDBMask className="flex-center" overlay="stylish-light">
                                <p className="white-text">Hakone</p>
                            </MDBMask>
                        </MDBView>
                        <Card.Body className="cardBody6">
                            <Card.Text className="cardText6">
                                Situated in the southwest of Kanagawa Prefecture in the Fuji-Hakone-Izu National Park is the 
                                town of Hakone. It is famous both inside and outside of Japan as a resort area brimming with 
                                natural hot springs of the highest quality, and for its stunning views of Mt Fuji.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardColumns>

                <div className="emptySpace4"></div>

                <h2 className="h2Header3">More Destination Galleries</h2>
                <div className="emptySpace5"></div>
                <Container className="container2">
                    <Row className="row1">
                        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
                        <Col xs={6} md={4}>
                            <div className="overlay-image1">
                                <a href="#">
                                    <img className="image" src={OsakaCastle} alt="OsakaCastle" />
                                    <div className="normal">
                                        <div className="text"> Osaka Castle </div>
                                    </div>
                                    <div className="hover">
                                        <img className="image" src={MatsumotoCastle} alt="MatsumotoCastle" />
                                        <div className="text"> Matsumoto Castle </div>
                                    </div>
                                </a>
                            </div>
                        </Col>

                        <Col xs={6} md={4}>
                            <div className="overlay-image1 responsive">
                                <a href="#">
                                    <img className="image" src={Naruto} alt="Naruto" />
                                    <div className="normal">
                                        <div className="text"> Tokushima Naruto </div>
                                    </div>
                                    <div className="hover">
                                        <img className="image" src={KyotoTemple} alt="KyotoTemple" />
                                        <div className="text"> Kyoto Temple </div>
                                    </div>
                                </a>
                            </div>
                        </Col>
                        
                        <Col xs={6} md={4}>
                            <div className="overlay-image1">
                                <a href="#">
                                    <img className="image" src={OuchiJuku} alt="OuchiJuku" />
                                    <div className="normal">
                                        <div className="text"> Ouchi Juku </div>
                                    </div>
                                    <div className="hover">
                                        <img className="image" src={Niseko} alt="Niseko" />
                                        <div className="text"> Niseko </div>
                                    </div>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <div className="emptySpace6"></div>
            </Container>
        );
    }
}

export default PageFragment2;
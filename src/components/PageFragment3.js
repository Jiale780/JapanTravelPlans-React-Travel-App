import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Media from "react-bootstrap/Media";
import Ramen from "../img/Ramen.jpg";
import HistoricSites from "../img/HistoricSites.jpg";
import Akiba from "../img/Akiba.jpg";
import Shrine from "../img/Shrine1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/PageFragment3.css";

class PageFragment3 extends Component {
    render() {
        return (
            <Container className="ExterContainer3">
                <p className="emptySpacings1"></p>

                <h2 className="h2Header4">What kind of stuffs would you interest/like?</h2> 
                <div className="emptySpacings2"></div>
                <Row>
                    <Col>
                        <article>
                            <h3 className="largefont2">
                                <b>
                                    Find inspiration for your Japan vacation, from sightseeing in the city and
                                    cultural immersion in the countryside to top picks and suggested itineraries.
                                </b>
                            </h3> <div className="emptySpacings3"></div>
                            <p className="paragraphDesc1">
                                Arrive in Japan with a game plan. Discover the many events and festivals, temples and
                                castles, theme parks and hot springs, beaches and outdoor activities that Japan has to
                                offer. Whether you're passionate about sports, an art lover, a nature enthusiast, a
                                history buff, a foodie, or just looking to relax on a beach, the possibilities for your
                                Japan journey are endless.
                            </p>
                        </article>
                    </Col>
                </Row>

                <div className="emptySpacings4"></div>

                {/* Columns are always 50% wide, on mobile and desktop */}
                <Row xs={1} md={2}>
                    <Col>
                        <Media>
                            <img width={130} height={130} className="img1 align-self-center mr-3" src={Ramen} alt="Ramen" />
                            <Media.Body>
                                <h5 className="h5Font1">Food and Drink</h5>
                                <p className="pg1">
                                    Japanese cuisine (和食, washoku) offers an abundance of gastronomical delights with a 
                                    boundless variety of regional and seasonal dishes. Restaurants in Japan range from 
                                    mobile food stands-old ryotei and unique theme restaurants about ninja and robots. Many 
                                    restaurants are specialized in a single type of dish, while others offer a variety of dishes.
                                </p>
                            </Media.Body>
                        </Media> <div className="emptySpacing5"></div>
                    </Col> 
                    
                    <Col>
                        <Media>
                            <img width={130} height={130} className="img2 align-self-center mr-3" 
                            src={HistoricSites} alt="HistoricSites" />
                            <Media.Body>
                                <h5 className="h5Font2">Historic Sites</h5>
                                <p className="pg2">
                                    While many of Japan's historic buildings and districts have been lost due to fires, earthquakes, 
                                    wars and city redevelopment over the centuries, some cities and towns have managed to preserve 
                                    a street block or whole district of traditional buildings for residents and tourists to enjoy 
                                    today.
                                </p>
                            </Media.Body>
                        </Media> <div className="emptySpacings6"></div>
                    </Col>
                </Row>

                <div className="emptySpacings7"></div>

                <Row xs={1} md={2}>
                    <Col>
                        <Media>
                            <img width={130} height={130} className="img1 align-self-center mr-3" src={Akiba} alt="Akiba" />
                            <Media.Body>
                                <h5 className="h5Font3">Anime and Manga</h5>
                                <p className="pg3">
                                    Modern day manga (漫画) can be defined as comics corresponding to a Japanese style which 
                                    originated during the mid-1900s. The popularity of manga in Japan has since ballooned. 
                                    Today, there is a huge domestic industry for manga, and increasingly so internationally. 
                                    In Japan, people of both genders and all ages read manga. 
                                </p>
                            </Media.Body>
                        </Media> <div className="emptySpacings8"></div>
                    </Col> 
                    
                    <Col>
                        <Media>
                            <img width={130} height={130} className="img2 align-self-center mr-3" src={Shrine} alt="Shrine" />
                            <Media.Body>
                                <h5 className="h5Font4">Shrines</h5>
                                <p className="pg4">
                                    Shinto shrines (神社, jinja) are places of worship and the dwellings of the kami, the Shinto "gods". 
                                    Sacred objects of worship that represent the kami are stored in the innermost chamber of the shrine 
                                    where they cannot be seen by anybody. People visit shrines in order to pay respect to the kami or 
                                    to pray for good fortune.
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>
                </Row>

                <div className="emptySpacings9"></div>
            </Container>
        );
    }
}

export default PageFragment3;
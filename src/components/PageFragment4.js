import React, { Component } from "react";
import { Card, Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import Media from "react-bootstrap/Media";
import StaySafe from "../img/StaySafe.jpg";
import CustomsManners from "../img/CustomsManners.jpg";
import Timezone from "../img/Timezone.jpg";
import JpnE_Visa from "../img/JpnE_Visa.jpg";
import JpnLanguage from "../img/JpnLanguage.jpg";
import JpnWIFI from "../img/WIFI.jpg";
import TravelCard from "../img/TravelCard.jpg";
import Currency from "../img/Currency.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/PageFragment4.css";

class PageFragment4 extends Component {
  render() {
    return (
      <Container className="ExterContainer4">
        <p className="emptySpac1"></p>
        <h2 className="h2Header5">Plan your trip ahead/forward with a good resolution!</h2>
        <div className="emptySpac2"></div>
        <Row>
          <Col>
            <article>
              <h3 className="largefont3">
                <p className="paragraphDesc2">
                  It is easy to feel a little overwhelmed and disoriented when you visit Japan for
                  the first time, so find out the basics before you fly and get acquainted with the
                  country through our helping you plan guide.
                </p>
              </h3> <div className="emptySpac3"></div>
              <p className="paragraphDesc3">
                Learn a little more about Japan's customs, culture and Wi-Fi connectivity, as well as its
                seasonal weather, geography and luggage delivery options. Many of the questions first-time
                travelers might have are answered here, along with insider tips and practical advice to
                help you navigate the country with confidence.
              </p>
            </article>
          </Col>
        </Row>

        <div className="emptySpac4"></div>

        <Card>
          <Card.Header className="cardHeader1">Planning of your useful and meaningful trip</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Media>
                <img width={180} height={180} className="img2 align-self-center mr-3" src={StaySafe} alt="StaySafe" />
                <Media.Body>
                  <h5 className="h5Font2">Staying Safe in Japan</h5>
                  <p className="pg2">
                    If you do find yourself in a situation that requires serious help, dial 110 for an urgent
                    call to the police and 119 for fire or ambulance.
                  </p>
                  <Button variant="danger" size="md">Learn More</Button>
                </Media.Body>
              </Media>
            </ListGroup.Item>

            <ListGroup.Item>
              <Media>
                <img width={180} height={180} className="img1 align-self-center mr-3" src={CustomsManners} alt="CustomsManners" />
                <Media.Body>
                  <h5 className="h5Font1">Customs and Manners</h5>
                  <p className="pg1">
                    Following a general travelers code of respect for the people you meet and places you visit
                    will stand you in good stead.
                    </p>
                  <Button variant="danger" size="md">Learn More</Button>
                </Media.Body>
              </Media>
            </ListGroup.Item>
          </ListGroup>

          <ListGroup.Item>
            <Media>
              <img width={180} height={180} className="img2 align-self-center mr-3" src={Timezone} alt="Timezone" />
              <Media.Body>
                <h5 className="h5Font2">Timezone</h5>
                <p className="pg2">
                  All of Japan sits within the same time zone, and no daylight saving is practiced. The country
                  is nine hours ahead of GMT.
                </p>
                <Button variant="danger" size="md">Learn More</Button>
              </Media.Body>
            </Media>
          </ListGroup.Item>

          <ListGroup.Item>
            <Media>
              <img width={180} height={180} className="img1 align-self-center mr-3" src={JpnE_Visa} alt="JpnE_Visa" />
              <Media.Body>
                <h5 className="h5Font3">Visa Information</h5>
                <p className="pg3">
                  Travelers from 68 countries across the globe can visit Japan for up to 90 days without requiring a visa.
                </p>
                <Button variant="danger" size="md">Learn More</Button>
              </Media.Body>
            </Media>
          </ListGroup.Item>

          <ListGroup.Item>
            <Media>
              <img width={180} height={180} className="img2 align-self-center mr-3" src={JpnLanguage} alt="JpnLanguage" />
              <Media.Body>
                <h5 className="h5Font4">Language</h5>
                <p className="pg4">
                  Japan's official language is Japanese, but English is generally understood in major cities and designated tourist sites.
                </p>
                <Button variant="danger" size="md">Learn More</Button>
              </Media.Body>
            </Media>
          </ListGroup.Item>

          <ListGroup.Item>
            <Media>
              <img width={180} height={180} className="img2 align-self-center mr-3"src={JpnWIFI} alt="WIFI" />
              <Media.Body>
                <h5 className="h5Font2">Wi-Fi and Connectivity</h5>
                <p className="pg2">
                  Wireless hotspots are popping up all over major cities in Japan, so you should never be too far from a Wi-Fi connection.
                </p>
                <Button variant="danger" size="md">Learn More</Button>
              </Media.Body>
            </Media>
          </ListGroup.Item>

          <ListGroup.Item>
            <Media>
              <img width={180} height={180} className="img2 align-self-center mr-3" src={TravelCard} alt="TravelCard" />
              <Media.Body>
                <h5 className="h5Font2">IC Travel Cards</h5>
                <p className="pg2">
                  Make your journeys as smooth as the public transportation you will ride on by purchasing a chargeable IC travel card.
                </p>
                <Button variant="danger" size="md">Learn More</Button>
              </Media.Body>
            </Media>
          </ListGroup.Item>

          <ListGroup.Item>
            <Media>
              <img width={180} height={180} className="img2 align-self-center mr-3" src={Currency} alt="Currency" />
              <Media.Body>
                <h5 className="h5Font2">Currency</h5>
                <p className="pg2">
                  The Japanese yen is used throughout the country and you can exchange foreign currency at the airports and most major banks.
                </p>
                <Button variant="danger" size="md">Learn More</Button>
              </Media.Body>
            </Media>
          </ListGroup.Item>
        </Card>

        <div className="emptySpac5"></div>
      </Container>
    );
  }
}

export default PageFragment4;
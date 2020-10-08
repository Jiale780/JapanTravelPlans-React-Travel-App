import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import MtFuji from "../img/MtFuji.jpg";
import Bridge from "../img/Bridge.jpg";
import JpnGarden from "../img/JpnGarden.jpg";
import Castle from "../img/castle1.jpg";
import Landscape1 from "../img/Landscape2.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function CarouselBorder1() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={MtFuji} alt="MtFuji" />
        <Carousel.Caption>
          <h3>Mount Fuji and Lake</h3>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img className="d-block w-100" src={Bridge} alt="Bridge" />
        <Carousel.Caption>
          <h3>Night Bridge View</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={JpnGarden} alt="JpnGarden" />
        <Carousel.Caption>
          <h3>Japanese Garden View</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Castle} alt="Castle" />
        <Carousel.Caption>
          <h3>Castle View of Scenery</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Landscape1} alt="Landscape1" />
        <Carousel.Caption>
          <h3>Brown Wooden Houses</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBorder1;
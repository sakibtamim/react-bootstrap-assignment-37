import { useState } from "react";
import { Carousel } from "react-bootstrap";
import BannerImg01 from "../../assets/b01.png";
import BannerImg02 from "../../assets/b02.png";
import BannerImg03 from "../../assets/b03.png";
import "./banner.css";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel id="banner" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="item">
        <img src={BannerImg01} className="w-100" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <img src={BannerImg02} className="w-100" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="item">
        <img src={BannerImg03} className="w-100" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;

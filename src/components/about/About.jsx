import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./about.css";
import AboutImg1 from "../../assets/b01.png";
import AboutImg2 from "../../assets/b02.png";
import AboutImg3 from "../../assets/b03.png";
import Aboutreuseable from "../reuseable/Aboutreuseable";

const About = () => {
  return (
    <div id="about">
      <Container>
        <Row>
          <Aboutreuseable aboutimg={AboutImg1} title="MERN Stack developer" />
          <Aboutreuseable
            aboutimg={AboutImg2}
            title="Front end development with react"
          />
          <Aboutreuseable aboutimg={AboutImg3} title="full stack development" />
        </Row>
      </Container>
    </div>
  );
};

export default About;

import React from "react";
import "./service.css";
import { Col, Container, Row } from "react-bootstrap";
import ServiceReusebale from "../reuseable/ServiceReusebale";

const Service = () => {
  return (
    <div id="service">
      <Container>
        <Row>
          <Col lg={5} className="service_header mx-auto text-center">
            <h2>Success Stories</h2>
          </Col>
        </Row>
        <Row className="row-gap-4">
          <ServiceReusebale
            title="20000+"
            heading="Students choose creative it"
            body="Creative IT has become a trusted training institute for not only Bangladeshi residents but also those living abroad. More than 20,000 passionate learners are working in different markets after completing courses from our institute."
            titleColor="#66902b"
            bgColor="linear-gradient(229.38deg, #f7fce7 2.83%, rgba(247, 252, 231, 0.3) 96.18%)"
          />
          <ServiceReusebale
            title="89%"
            heading="Success ratio"
            body="Excelling at work needs hands-on experience. The practical approach towards problems puts our students ahead of any other competitors in global job markets. All the courses are structured considering the job prospects to make you well prepared for a bright career. "
            bgColor="linear-gradient(230.46deg, #fff7eb 0%, rgba(255, 247, 235, 0.3) 100%)"
          />
          <ServiceReusebale
            title="42000+"
            heading="Got career placement"
            body="Our job placement department has helped more than 42,000 skilled students find jobs in competitive global markets. Promising a better future, we have successfully raised the job placement rate to 67% by providing continuous career support to the learners."
            titleColor="#11a7ca"
            bgColor="linear-gradient(229.2deg, #e9f9fc -2.12%, rgba(233, 249, 252, 0.3) 100%)"
          />
          <ServiceReusebale
            title="34000+"
            heading="Work as expert freelancer"
            body="After course completion, a significant number of our students find jobs in multiple sectors. Many of the devoted students start working in the IT domain before completing the courses. Earning dollars from the global marketplace, they become self-reliant and contribute to the progress of our country."
            titleColor="#11a7ca"
            bgColor="linear-gradient(229.2deg, #e9f9fc -2.12%, rgba(233, 249, 252, 0.3) 100%)"
          />
        </Row>
      </Container>
    </div>
  );
};

export default Service;

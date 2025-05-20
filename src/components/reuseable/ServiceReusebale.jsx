import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const ServiceReusebale = ({ title, heading, body, bgColor, titleColor }) => {
  return (
    <Col lg={4}>
      <Card className="service_main" style={{ background: bgColor }}>
        <Card.Body>
          <Card.Title style={{ color: titleColor }}>{title}</Card.Title>
          <h3>{heading}</h3>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceReusebale;

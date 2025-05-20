import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const Aboutreuseable = ({ aboutimg, title }) => {
  return (
    <Col lg={4}>
      <Card>
        <Card.Img variant="top" src={aboutimg} />

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Buy Course</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Aboutreuseable;

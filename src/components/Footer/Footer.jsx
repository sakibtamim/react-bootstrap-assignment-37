import React from "react";
import "./footer.css";
import { Col, Container, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <div id="footer">
      <Container>
        <Row>
          <Col className="footer mx-auto text-center" lg={5}>
            <p>Copyright © 2025 react bootstrap. All right reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

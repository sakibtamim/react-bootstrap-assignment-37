import React from "react";
import "./contact.css";
import { BsTelephone } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
const Contact = () => {
  return (
    <div id="contact">
      <Container>
        <Row>
          <Col className="con_txt" lg={6}>
            <h2>Contact Us</h2>
            <p>
              Feel free to use the form or drop us an email. Old-fashioned phone
              calls work too.
            </p>
            <div className="infos">
              <BsTelephone /> 484.324.2400
            </div>
            <div className="infos">
              <MdMailOutline /> info@mediaproper.com
            </div>
            <div className="infos">
              <IoLocationOutline /> Dhaka, Bangladesh
            </div>
          </Col>
          <Col className="con_body" lg={6}>
            <InputGroup className="mb-4">
              <InputGroup.Text>name</InputGroup.Text>
              <Form.Control aria-label="First name" placeholder="first name" />
              <Form.Control aria-label="Last name" placeholder="last name" />
            </InputGroup>
            <InputGroup className="mb-4">
              <InputGroup.Text>Email</InputGroup.Text>
              <Form.Control
                aria-label="Email"
                placeholder="example@gmail.com"
              />
            </InputGroup>
            <InputGroup className="mb-4">
              <InputGroup.Text>Phone (optional)</InputGroup.Text>
              <Form.Control aria-label="Phone" placeholder="XXX-XXX-XXX" />
            </InputGroup>
            <InputGroup className="mb-4">
              <InputGroup.Text>Message</InputGroup.Text>
              <Form.Control as="textarea" aria-label="With textarea" />
            </InputGroup>
            <Button variant="primary">Submit</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;

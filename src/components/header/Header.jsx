import React from "react";
import "./header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <Navbar expand="lg" id="nav_menu">
      <Container>
        <Navbar.Brand href="#home" className="nav_logo">
          <img src={Logo} alt="" />
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Service</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

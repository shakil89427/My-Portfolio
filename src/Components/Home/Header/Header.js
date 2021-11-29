import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="navbg" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <div className="d-flex align-items-center">
            <h1 className="my-auto d-inline text-white fw-bolder">
              <i className="fab fa-angellist"></i>SH@KIL
            </h1>
            <button className="h-btn">
              <i className="circle fas fa-circle"></i> Online
            </button>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="text-center ms-auto">
            <Nav.Link className="text-white" href="#">
              About
            </Nav.Link>
            <Nav.Link className="text-white" href="#">
              Recent
            </Nav.Link>
            <Nav.Link className="text-white" href="#">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

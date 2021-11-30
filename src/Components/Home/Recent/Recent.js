import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import patrix from "../../../images/patrix.PNG";
import small from "../../../images/small.PNG";
import gpu from "../../../images/gpushop.PNG";

const Recent = () => {
  return (
    <Container id="recent">
      <h1 className="text-center fw-light mt-4">Recent Works</h1>
      <hr className="mx-auto" />
      <Row className="mt-5">
        <Col sm={12} md={6} lg={6}>
          <img className="main-img" src={patrix} alt="" />
        </Col>
        <Col className="text-center p-5" sm={12} md={6} lg={6}>
          <h2 className="text-info">Patrix</h2>
          <h6 className="fw-light">
            Fully Responsive non functional frontend focused single page
            application.
          </h6>
          <div className="used my-2">
            <button>React</button>
            <button>Bootstrap</button>
            <button>Vanilla Css</button>
            <button>Aos</button>
            <button>React-Slick</button>
          </div>
          <a href="https://patrix247.netlify.app" target="blank">
            <button className="p-button">Live Site</button>
          </a>
          <a href="https://github.com/shakil89427/Patrix" target="blank">
            <button className="p-button">Code Link</button>
          </a>
        </Col>
      </Row>
      <Row className="d-flex flex-column-reverse flex-md-row flex-lg-row  my-5">
        <Col className=" text-center p-5" md={6} lg={6}>
          <h2 className="text-info">Small Apps</h2>
          <h6 className="fw-light">
            Fully Responsive non functional frontend focused multiple page
            application.
          </h6>
          <div className="used my-2">
            <button>React</button>
            <button>Bootstrap</button>
            <button>Vanilla Css</button>
            <button>Firebase</button>
          </div>
          <a href="https://smallapps247.netlify.app/" target="blank">
            <button className="p-button">Live Site</button>
          </a>
          <a href="https://github.com/shakil89427/Small-App" target="blank">
            <button className="p-button">Code Link</button>
          </a>
        </Col>
        <Col md={6} lg={6}>
          <img className="main-img" src={small} alt="" />
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6} lg={6}>
          <img className="main-img" src={gpu} alt="" />
        </Col>
        <Col className="text-center p-5" sm={12} md={6} lg={6}>
          <h2 className="text-info">Gpu Shop</h2>
          <h6 className="fw-light">
            Non responsive,less designed,fully functional,dynamic,backend
            focused,multiple page, e-commerce related small application
          </h6>
          <div className="used my-2">
            <button>React</button>
            <button>Javascript</button>
            <button>Vanilla Css</button>
            <button>Firebase</button>
            <button>axios</button>
            <button>react-router</button>
            <button>Express</button>
            <button>MongoDB</button>
            <button>Heroku</button>
          </div>
          <a href="https://gpushop-247.netlify.app/" target="blank">
            <button className="p-button">Live Site</button>
          </a>
          <a
            href="https://github.com/shakil89427/Gpushop-Client"
            target="blank"
          >
            <button className="p-button">Frontend Code Link</button>
          </a>
          <a
            href="https://github.com/shakil89427/Gpushop-Server"
            target="blank"
          >
            <button className="p-button">Backend Code Link</button>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Recent;

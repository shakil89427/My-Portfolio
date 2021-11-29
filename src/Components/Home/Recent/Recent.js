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
        <Col className="main-col" sm={12} md={6} lg={6}>
          <img className="img-fluid" src={patrix} alt="" />
        </Col>
        <Col className="text-center p-5" sm={12} md={6} lg={6}>
          <h2 className="fw-light">Patrix</h2>
          <h5 className="fw-light">
            Fully Responsive non functional frontend focused single page
            application.
          </h5>
          <h5 className="fw-light">
            Used Jsx, React js,Bootstrap,Vanilla Css,Aos,React-Slick
          </h5>
          <a href="https://patrix247.netlify.app" target="blank">
            <button className="p-button">Live Site</button>
          </a>
          <a href="https://github.com/shakil89427/Patrix" target="blank">
            <button className="p-button">Code Link</button>
          </a>
        </Col>
      </Row>
      <Row className="my-5">
        <Col className="text-center p-5" sm={12} md={6} lg={6}>
          <h2 className="fw-light">Small Apps</h2>
          <h5 className="fw-light">
            Fully Responsive non functional frontend focused multiple page
            application.
          </h5>
          <h5 className="fw-light">
            Used Jsx, React js,Bootstrap,Vanilla Css,Firebase
          </h5>
          <a href="https://smallapps247.netlify.app/" target="blank">
            <button className="p-button">Live Site</button>
          </a>
          <a href="https://github.com/shakil89427/Small-App" target="blank">
            <button className="p-button">Code Link</button>
          </a>
        </Col>
        <Col className="main-col" sm={12} md={6} lg={6}>
          <img className="img-fluid" src={small} alt="" />
        </Col>
      </Row>
      <Row>
        <Col className="main-col" sm={12} md={6} lg={6}>
          <img className="img-fluid" src={gpu} alt="" />
        </Col>
        <Col className="text-center p-5" sm={12} md={6} lg={6}>
          <h2 className="fw-light">Gpu Shop</h2>
          <h5 className="fw-light">
            Non responsive,less designed,fully functional,dynamic,backend
            focused,multiple page, e-commerce related small application
          </h5>
          <h5 className="fw-light">
            Used Jsx, React js,Vanilla Css,Firebase,axios,react-router,Express
            js,MongoDB
          </h5>
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

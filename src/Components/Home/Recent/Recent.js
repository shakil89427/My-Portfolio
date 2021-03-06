import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import patrix from "../../../images/patrix.jpg";
import small from "../../../images/small.jpg";
import ogani from "../../../images/ogani.JPG";

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
            Fully Responsive semi functional frontend focused multiple page
            application.
          </h6>
          <div className="used my-2">
            <button>React</button>
            <button>Bootstrap</button>
            <button>Vanilla Css</button>
            <button>Firebase</button>
            <button>React Router</button>
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
          <img className="main-img" src={ogani} alt="" />
        </Col>
        <Col className="text-center pt-2 px-5" sm={12} md={6} lg={6}>
          <h2 className="text-info">Ogani Shop</h2>
          <h6 className="fw-light">
            Fully responsive,fully functional,dynamic,multiple page, e-commerce
            related small application
          </h6>
          <h6 className="fw-light">
            Registered Users can see details,order product,cancel order,write
            review,Send Messages and many more
          </h6>
          <h6 className="fw-light">
            Admin panel also included for add or remove products,change orders
            status,cancel orders,promote a registered users to Admin and many
            more
          </h6>
          <div className="used my-2">
            <button>React</button>
            <button>Javascript</button>
            <button>Vanilla CSS</button>
            <button>axios</button>
            <button>react-router 6</button>
            <button>Express</button>
            <button>MongoDB</button>
            <button>Heroku</button>
            <button>Google oAuth</button>
            <button>React slick</button>
          </div>
          <a href="https://oganishop.netlify.app/" target="blank">
            <button className="p-button">Live Site</button>
          </a>
          <a href="https://github.com/shakil89427/Ogani-Client" target="blank">
            <button className="p-button">Frontend Code Link</button>
          </a>
          <a href="https://github.com/shakil89427/Ogani-Server" target="blank">
            <button className="p-button">Backend Code Link</button>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Recent;

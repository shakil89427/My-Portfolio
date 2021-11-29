import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Mainwork = () => {
  return (
    <Container className="mainwork text-center">
      <Row>
        <Col sm={12} md={4} lg={4}>
          <i className="fas fa-layer-group"></i>
          <h5>DESIGN + DEVELOPMENT</h5>
          <p className="px-5">
            Clean, modern designs- optimized for performancer and converting
            users to customers
          </p>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <i className="fas fa-dumpster-fire"></i>
          <h5>ECOMMERCE</h5>
          <p className="px-5">
            Integration of eCommerce platforms,payment gateways,custom product
            templates and more
          </p>
        </Col>
        <Col sm={12} md={4} lg={4}>
          <i className="fas fa-hands-helping"></i>
          <h5>MOBILE-FRIENDLY</h5>
          <p className="px-5">
            A responsive design makes your website accessible to all users,
            regardless of their device
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Mainwork;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import html from "../../../images/html.jpg";
import css from "../../../images/css.png";
import js from "../../../images/js.png";
import react from "../../../images/react.png";
import bootstrap from "../../../images/Bootstrap.png";
import tailwind from "../../../images/tailwind-square.png";
import mui from "../../../images/mui.png";
import node from "../../../images/node.png";
import express from "../../../images/express.png";
import mongo from "../../../images/mongodb.png";
import firebase from "../../../images/firebase.png";
import github from "../../../images/GitHub.png";

const Experiences = () => {
  return (
    <Container className="experiences mb-5">
      <h1 className="text-center fw-light my-4">Experiences</h1>
      <Row className="text-center">
        <Col xs={6} sm={6} md={3} lg={2}>
          <img className="mt-2 img-fluid" src={html} alt="" />
          <h6>HTML5</h6>
        </Col>
        <Col xs={6} sm={6} md={3} lg={2}>
          <img className="mt-2 img-fluid" src={css} alt="" />
          <h6>CSS3</h6>
        </Col>
        <Col xs={6} sm={6} md={3} lg={2}>
          <img className="mt-2 img-fluid" src={js} alt="" />
          <h6>JAVASCRIPT</h6>
        </Col>
        <Col xs={6} sm={6} md={3} lg={2}>
          <img className="mt-2 img-fluid" src={react} alt="" />
          <h6>REACT</h6>
        </Col>
        <Col xs={6} sm={6} md={3} lg={2}>
          <img className="mt-2 img-fluid" src={bootstrap} alt="" />
          <h6>BOOTSTRAP</h6>
        </Col>
        <Col xs={6} sm={6} md={3} lg={2}>
          <img className="mt-2 img-fluid" src={tailwind} alt="" />
          <h6>TAILWIND</h6>
        </Col>
        <Col xs={6} sm={6} md={3} lg={2}>
          <img className="mt-2 img-fluid" src={mui} alt="" />
          <h6>MUI</h6>
        </Col>
        <Col xs={6} sm={6} md={3} lg={2}>
          <img className="mt-2 img-fluid" src={node} alt="" />
          <h6>NODE JS</h6>
        </Col>
        <Col xs={6} sm={6} md={3} lg={2}>
          <img className="mt-2 img-fluid" src={express} alt="" />
          <h6>EXPRESS</h6>
        </Col>
        <Col xs={6} sm={6} md={3} lg={2}>
          <img className="mt-2 img-fluid" src={mongo} alt="" />
          <h6>MONGODB</h6>
        </Col>
        <Col xs={6} sm={6} md={3} lg={2}>
          <img className="mt-2 img-fluid" src={firebase} alt="" />
          <h6>FIREBASE</h6>
        </Col>
        <Col xs={6} sm={6} md={3} lg={2}>
          <img className="mt-2 img-fluid" src={github} alt="" />
          <h6>GITHUB</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default Experiences;

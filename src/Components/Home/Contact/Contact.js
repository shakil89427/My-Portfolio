import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_NAME,
        process.env.REACT_APP_TEMPLATE,
        e.target,
        process.env.REACT_APP_UID
      )
      .then(
        (result) => {
          if (result) {
            e.target.reset();
            alert("Message Successfully Sended");
          }
        },
        (error) => {
          alert(error);
        }
      );
  };

  return (
    <div id="contact" className="pb-5">
      <h1 className="text-center fw-light mt-5">Contact Me</h1>
      <hr className="mx-auto" />
      <Container data-aos="fade-up" className="contact-container">
        <Row>
          <Col className="text-center my-auto p-5" sm={12} md={6} lg={6}>
            <h2 className="text-center fw-light">Looking to Find Out More?</h2>
            <p>
              If you have any questions about me, please get in touch. i will
              always happy to hear from you, however, you choose to contact me.
              Simply fill in the form or get in touch via the following options:
            </p>
            <p className="info">Email: shakilahmed89427@gmail.com</p>
            <p className="info">Phone: +8801879089427</p>
            <a href="https://github.com/shakil89427" target="blank">
              <button className="p-button">
                <i className="me-2 fab fa-github"></i>GitHub
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/shakil-ahmed-804ba0220"
              target="blank"
            >
              <button className="p-button">
                <i className="me-2 fab fa-linkedin"></i>Linkedin
              </button>
            </a>
          </Col>
          <Col className="text-center p-5" sm={12} md={6} lg={6}>
            <h2 className="fw-light mb-3">Send Your Valuable Message</h2>
            <form onSubmit={sendEmail}>
              <Row className="text-center">
                <Col className="mb-3" sm={12} md={6} lg={6}>
                  <input
                    name="first"
                    required
                    className="contact-input"
                    placeholder="First Name"
                    type="text"
                  />
                </Col>
                <Col className="mb-3" sm={12} md={6} lg={6}>
                  <input
                    name="last"
                    required
                    className="contact-input"
                    placeholder="Last Name"
                    type="text"
                  />
                </Col>
                <Col className="mb-3" sm={12} md={12} lg={12}>
                  <input
                    name="email"
                    required
                    className="contact-input"
                    placeholder="Your Email"
                    type="email"
                  />
                </Col>
                <Col className="mb-3" sm={12} md={12} lg={12}>
                  <textarea
                    name="messages"
                    required
                    className="contact-input"
                    placeholder="Message"
                    rows="5"
                  ></textarea>
                </Col>
              </Row>
              <button type="submit" className="p-button">
                Submit<i className="ms-1 fas fa-location-arrow"></i>
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;

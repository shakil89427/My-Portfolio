import React, { useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import emailjs from "emailjs-com";

const Contact = () => {
  const [status, setStatus] = useState(false);
  const [send, setSend] = useState(true);
  const [wait, setWait] = useState(false);
  const [success, setSuccess] = useState("hidden");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus(true);
    setSend(false);
    setWait(true);
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
            setStatus(false);
            e.target.reset();
            setWait(false);
            setSend(true);
            setSuccess("");
            setTimeout(() => setSuccess("hidden"), 3000);
          }
        },
        (error) => {
          setWait(false);
          setSend(true);
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
            <span className="info">
              <i className="me-2 fas fa-envelope"></i>Email:
              shakilahmed89427@gmail.com
            </span>
            <br />
            <span className="info">
              <i className="me-2 fas fa-phone-alt"></i>Phone: +8801879089427
            </span>
            <br />
            <a href="https://github.com/shakil89427" target="blank">
              <button className="p-button">
                <i className="me-2 fab fa-github"></i>GitHub
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/shakil-ahmed-804ba0220"
              target="blank"
            >
              <button className="mt-3 p-button">
                <i className="me-2 fab fa-linkedin"></i>Linkedin
              </button>
            </a>
          </Col>
          <Col className="text-center p-5" sm={12} md={6} lg={6}>
            <h2 className="fw-light">Send Your Valuable Message</h2>
            <p className="succes-msg p-1" style={{ visibility: success }}>
              <i className="me-2 far fa-check-circle"></i>Success!!! Thanks for
              your message
            </p>
            <form onSubmit={sendEmail}>
              <Row className="text-center">
                <Col className="mb-3" sm={12} md={6} lg={6}>
                  <input
                    disabled={status}
                    name="name"
                    required
                    className="contact-input"
                    placeholder="Your Name"
                    type="text"
                  />
                </Col>
                <Col className="mb-3" sm={12} md={6} lg={6}>
                  <input
                    disabled={status}
                    name="email"
                    required
                    className="contact-input"
                    placeholder="Your Email"
                    type="email"
                  />
                </Col>
                <Col className="mb-3" sm={12} md={12} lg={12}>
                  <input
                    disabled={status}
                    name="subject"
                    required
                    className="contact-input"
                    placeholder="Subject"
                    type="text"
                  />
                </Col>
                <Col className="mb-3" sm={12} md={12} lg={12}>
                  <textarea
                    disabled={status}
                    name="messages"
                    required
                    className="contact-input"
                    placeholder="Message"
                    rows="5"
                  ></textarea>
                </Col>
              </Row>
              {send && (
                <button type="submit" className="p-button">
                  <i className="me-1 fas fa-location-arrow"></i>Submit
                </button>
              )}
              {wait && (
                <button disabled className="wait-button">
                  <Spinner
                    className="me-1"
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Please wait
                </button>
              )}
              {/* {success && (
                <button disabled className="success-button">
                  <i className="me-1 far fa-check-circle"></i>Sended
                </button>
              )} */}
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;

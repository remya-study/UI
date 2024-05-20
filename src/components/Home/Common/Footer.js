import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {

  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">

      <Row>
        <Col md="4" className="footer-copywright">

          <h3>Copyright @ 2024 Nile.com </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Nile </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">

            <li className="social-icons">
              <a
                href="https://twitter.com/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.instagram.com/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>

      </Row>

    </Container>
  );
}

export default Footer;

/*Footer helps to display how this Project help each user*/
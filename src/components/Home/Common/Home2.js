import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeadLog from  "../../../Assets/Projects/Planimage.jpg";

import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineTwitter,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={5} className="home-about-descriptionleft">

            <p className="home-about-body">
              <strong>Enhanced Scheduling Efficiency</strong>
              <br />

              <br />
          
              <br /><br />
              <strong>Enhanced Customer Experiences</strong>
              <br /><br />
              
              <br /><br />
              <strong>Boosted Productivity</strong>
              <br /><br />
              
              <br /><br />
            </p>
          </Col>

          <Col md={5} className="home-about-descriptionright">
            <div class="centered">
            <img className="Header-log" src={HeadLog} alt="HeadLog" />
             </div>
          </Col>

        </Row>
        <Row>
          <Col md={12} className="home-about-social">
          
            <p>
               <span className="purple">Connect </span>
            </p>
            <ul className="home-about-social-links">
              
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons" >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons" >
                  <AiOutlineInstagram />
                </a>
              </li>
            </ul>
          </Col>
        
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

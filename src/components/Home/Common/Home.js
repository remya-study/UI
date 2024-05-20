import React from "react";
import { Container, Row, Col, } from "react-bootstrap";

import Particle from "../../Particle";
import Home2 from "../Common/Home2";
import Type from "../Common/Type";
import { Link } from "react-router-dom";
import Getstarted from "../Getstarted";
import Howitworks from "../Howitworks";


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <div Col md={11} className="home-header">

              <div style={{ padding: 80, textAlign: "Center" }}>
                <Type />
              </div>
              <a href="/getStarted">
                <button type="button" className="get-started" id="getstarted">
                  GetStarted
                </button>
              </a>

              <a href="/Howitworks">
                <button type="button" className="how-itworks" id="howitworks">
                  How it works
                </button>
              </a>
            </div>
          </Row>
        </Container>
      </Container>

      <Home2 />
    </section>
    
  );
}

export default Home;

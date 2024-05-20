
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Officebuild from  '../../Assets/Projects/officebuild.jpg';

function Resources() {
    return (
        <section>
            <Container fluid className="main-section">
                <div class="content">
                    <div
  id="carouselMultiItemExample"
  data-mdb-carousel-init class="carousel slide carousel-dark text-center"
  data-mdb-ride="carousel">
  <div class="carousel-inner py-4">
   
    <div class="carousel-item active">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="card">
              <img
                src={Officebuild}
                class="card-img-top"
                alt="Officebuild"
              />
              <div class="card-body">
                <h5 class="card-title">Events strategies</h5>
                <p class="card-text" >
                Resources build to improve strategies
                </p>
                <a href="#!" data-mdb-ripple-init class="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 d-none d-lg-block">
            <div class="card">
              <img
                src={Officebuild}
                class="card-img-top"
                alt="Officebuild"
              />
              <div class="card-body">
                <h5 class="card-title">Events strategies</h5>
                <p class="card-text">
                Resources build to improve strategies
                </p>
                <a href="#!" data-mdb-ripple-init class="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 d-none d-lg-block">
            <div class="card">
              <img
                src={Officebuild}
                class="card-img-top"
                alt="Officebuild" 
              />
              <div class="card-body">
                <h5 class="card-title">Events strategies </h5>
                <p class="card-text">
                  Resources build to improve strategies
                </p>
                <a href="#!" data-mdb-ripple-init class="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  


 
 
  </div>
 
</div>
                </div>
            </Container>

        </section>
    );
};

export default Resources;



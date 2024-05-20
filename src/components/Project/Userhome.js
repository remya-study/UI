import React from "react";
import { Container } from "react-bootstrap";
import {Dashboardmain} from "./Dashboardmain";
import ScrollToTop from "../ScrollToTop";
import Sidebar from "../Home/Common/Sidebar";
import Laptop from  '../../Assets/Projects/laptop.jpg';
function Userhome() {
    return (
        <section>
            <Sidebar />
            <Container fluid class="container text-center">
                <div class="container text-center">
                <div class="col-lg-9">
            <div class="card">
              <img
                src={Laptop}
                class="card-img-top"
                alt="Laptop"
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
                   
                </div> 
            </Container>
        </section>
    );
};

export default Userhome;

/*User landing page */
import React from "react";
import { Container } from "react-bootstrap";
function Getstarted() {
  return (
    <section>
      <Container fluid class="container text-center">

        <div class="col">
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            
            <br />
            <div class="row">
              <div class="row justify-content-center">
                <div>
                  <input type="text" className="Continue-with-your-account" id="Continuewithyouraccount" placeholder="Continue with your account" aria-label="Continue with your account" aria-describedby="basic-addon2" />
                  <br />
                  <br />

                  <p>Or</p>
                  <div>
                    <input type="text" className="Add-your-user-account" id="Addyouruseraccount" placeholder="Name@Company.com" aria-label="Your user account" aria-describedby="basic-addon2" />
                    <br />
                    <br />

                  </div>
                  <div >
                    <button type="button" className="btn-continue" id="btn-continue">Continue</button>
                    <br />
            <br />
            
                  </div></div>
              </div>
            </div>
            <div class="row">
              <p>By proceeding, you agree to the
                Terms of Service
                and
                Privacy Policy</p>  <div>Already have an account?  <button type="button" className="btn-continue" id="btn-continue">Login</button>
              </div>
            </div>
            <div class="row"> 
         
            </div>
          </div></div>
      </Container>
    </section>
  );
};

export default Getstarted;
/* Functionality of this page*/
/*There is no  header  on get started page */
/* Connect current email to this application once user click on continue button */
/* Page has ability to add new email id to this application once user click on continue button */
/*Should  footer on this page*/
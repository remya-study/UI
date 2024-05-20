import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../Home/Common/Sidebar";
function Dashboardmain() {
   return (
      <div class="container text-center">
         <div class="row">
            <div class="col-sm-4"><Sidebar /></div>
         </div>
         <div class="row">
            <div class="col-md-11">
               <div class="container text-center">

                  <Row>
                     <Col className="Dashboard-icons">
                        <div><h4>Calender  </h4></div>
                        <a href="#" id="Calenderintegration"> Calender Event  </a> <br />
                        <a href="#" id="Calenderanalytics"> Predictive Analysis </a> <br />
                        <a href="#" id="Calenderanalytics">Event Categorization </a> <br />
                     </Col>

                     <Col className="Dashboard-icons">
                        <div><h4>Email board</h4></div>
                        <a href="#" id="Contactboard">Add Contacts </a> <br />
                        <a href="#" id="Email">Email list </a>
                     </Col>
                  </Row>
               </div>  </div>
         </div> </div>
   );
};

export default Dashboardmain;
/* User dashboard  Which helps to display  Calender and Email board*/
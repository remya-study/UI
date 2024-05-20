import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Signup from "../Account/Signup";
import {
  useNavigate
} from "react-router-dom";
function Toolstack()
 {
  const navigate = useNavigate()
  function OnLoginClick() {
  
        navigate("/Signup")
      }
    



  return (
    <div class="container-fluid">
    <Row >
      
      <Col  className="tech-icons">
       <div><h2>Email</h2></div>
       <ul>
  <li>Feature 1 </li>
  <li>Feature 2 </li>
  <li>Feature 3 </li>
  <button type="button" className="bttn-signup" id="bttn-signup"onClick={OnLoginClick} >Sign up</button>
 
</ul>
      </Col>
      <Col  className="tech-icons">
      <div><h2>Calender</h2></div>
     
      <ul>
  <li>Feature 1 </li>
  <li>Feature 2 </li>
  <li>Feature 3 </li>
  <button type="button" className="bttn-signup" id="bttn-signup">Sign up</button>
</ul>
      </Col>
      <Col  className="tech-icons">
      <div><h2>Email Contacts</h2></div>
      <ul>
  <li>Feature 1 </li>
  <li>Feature 2 </li>
  <li>Feature 3 </li>
  <button type="button" className="bttn-signup" id="bttn-signup">Sign up</button>
</ul>
      </Col>
    </Row>
    </div>
  );
}

export default Toolstack;

import React, { useState, useEffect } from "react";
import { Container, Row, Col, } from "react-bootstrap";
import Signup from "./Signup";
import {
  useNavigate
} from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginerror, setLoginError] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function OnLoginClick() {
    getToken((value) => {       
      if(value)
      checkAccountExists((result) => {    
        console.log(".02"+result);
        if (!result?.iva) { setLoginError("Invalid Username/Password") }
        else {
          setLoginError("")
          localStorage.setItem('login', email)
          navigate("/Userhome")
        }
      })
    })

  }

  const getToken = (result) => {

    fetch('https://localhost:7275/api/Identity/Token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ UserName: email, Password: password }),
    })
    .then(r =>  r.text().then(data => ({status: r.status, body: data})))
      .then((r) => {        
        if(r.status=="200")
          {
            localStorage.setItem('jwt-token', r.body)
            result(true);
          }
          else {
            result(false);
          }
      })
  }

  const checkAccountExists = (callback) => {
    
    let token = localStorage.getItem('jwt-token');
    fetch('https://localhost:7275/api/Login/', {
      method: 'POST',
      //credentials: "include",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+token
      },
      body: JSON.stringify({ UserName: email, Password: password }),
    })
      .then((r) => r.json().then(data => ({status: r.status, body: data})))
      .then((r) => {       
        if(r.status=="200")
          {
            callback(r.body)
          }
          else
          {
            callback(false)
          }
      })
  }

 
  return (
    <Container fluid className="p-4 my-5 main-section">
      <Row>
        <Col col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </Col>
        <Col col='4' md='6'>
          <input type="email"

            class="Add-your-user-account" id="email" placeholder="Email Address" aria-label="Your user account"
            aria-describedby="basic-addon2" value={email} onChange={(ev) => setEmail(ev.target.value)} />
          <br />
          <br />

          <input type="password" class="Add-your-user-account" id="password" placeholder="Password" aria-label="Your user account"
            aria-describedby="basic-addon2" value={password} onChange={(ev) => setPassword(ev.target.value)} />
          <br />
          <div >
            <checkbox type="checkbox" name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a><br />
          </div>
          <div >
            <button type="button" className="btn-continue" id="btn-continue" onClick={OnLoginClick}>Sign in</button><br/>
            <label className="error">{loginerror}</label><br/><br/>
            <p >Don't have an account? <a href="Signup" id="Signup">Register</a></p>
          </div>
          <p>Can't log in?</p><div>
            <a href="#!" className="link-danger">Visit our help center</a>
          </div>
        </Col>
      </Row>


    </Container>
  );
}
export default Login;
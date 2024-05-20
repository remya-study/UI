import React, { useState, useEffect } from "react";
import { Container, Row, Col, } from "react-bootstrap";
import {
    useNavigate
} from "react-router-dom";

function Signup() {

    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [registerMessage, setregisterMessage] = useState("");

    function RegisterUser() {

        fetch('https://localhost:7275/api/Login/Register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                FirstName: firstName, LastName: lastName, UserName: email, Password: password, ConfirmPassword: password,
                CreatedBy: "System", ModifiedBy: "System"
            }),
        })
            .then((r) => r.json())
            .then((r) => {
                if (r.status == "success") { 
                    setregisterMessage('');
                    console.log(r) }
                else {
                    setregisterMessage(r.message);
                }
            })
    }
    return (
        <section>
            <Container fluid class="container text-center">
              
                <div class="container-fluid main-section"> <div>
                    <div className="p-5 bg-image" style={{ height: '300px' }}> </div>

                    <div className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
                        <div className='p-5 text-center'>

                            <div class="col">
                                <div class="row">
                                    <div  >
                                        <input type="text" value={firstName} onChange={(ev) => setfirstName(ev.target.value)} class="signup-user-account" id="signupfirstname" placeholder="First Name" aria-label="Your user account" aria-describedby="basic-addon2" />
                                        <input type="text" value={lastName} onChange={(ev) => setlastName(ev.target.value)} class="signup-user-account" id="signuplastname" placeholder="Last Name" aria-label="Your user account" aria-describedby="basic-addon2" />

                                    </div>
                                    <div>
                                        <input type="text" value={email} onChange={(ev) => setEmail(ev.target.value)} class="signup-account" id="signupemail" placeholder="Email address" aria-label="Your user account" aria-describedby="basic-addon2" />
                                    </div>
                                    <div>
                                        <input type="password" value={password} onChange={(ev) => setPassword(ev.target.value)} class="signup-account" id="signuppassword" placeholder="Password" aria-label="Your user account" aria-describedby="basic-addon2" />
                                        
                                    </div>

                                    <div>
                                    <label className="error">{registerMessage}</label>
                                        <br />
                                        <button type="button" className="btn-signup" onClick={RegisterUser} id="btnsignup">Sign up</button>
                                    </div>

                                   
                                </div>
                            </div>
                        </div>
                    </div></div></div>
                <div>
                </div>

            </Container>
        </section>

    );
};

export default Signup;
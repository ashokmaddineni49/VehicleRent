import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');
    const [licenseId, setLicenseId] = useState('');
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            alert("Form not valid");
            return false;
        }
        if(password !== confirmPwd) {
            alert("Passwords doesn't match");
            return false;
        }
        setValidated(true);
        try {
            let response = await axios({
                method: 'post',
                url: 'http://localhost:8080/register',
                data: {
                    fname, lname, email, password, licenseId
                      }
            });
            console.log(response);
            alert("Inserted record successfully with first name: " + response.data.firstname);
            navigate("/");
    
        } catch(e) {
            console.log(e);
        }
        
    }

    return (<div className="registerpage">
        <h2>User Registration</h2>
            <Form noValidate validated={validated}>
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name"
                        value={fname} onChange={(e) => setFname(e.currentTarget.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" 
                        value={lname} onChange={(e) => setLname(e.currentTarget.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="emailId">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                    value={email} onChange={(e) => setEmail(e.currentTarget.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="license">
                    <Form.Label>License Id</Form.Label>
                    <Form.Control type="text" placeholder="Enter license id" 
                    value={licenseId} onChange={(e) => setLicenseId(e.currentTarget.value)} required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                    value={password} onChange={(e) => setPassword(e.currentTarget.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" 
                    value={confirmPwd} onChange={(e) => setConfirmPwd(e.currentTarget.value)} required/>
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
    </div>);
}

export default Registration;
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            alert("Form not valid");
            return false;
        }
        setValidated(true);
        const users = [{ email: "cm@gmail.com", password: "123" }];
        const user = users.find((user) => user.email === email);
        if(user && user.password === password) {
            localStorage.setItem("user", user.email);
            navigate("/home");
        } else {
            alert("Userid or password is incorrect");
            navigate("/");
        }
    }

    return (
        <React.Fragment>
        <h2>User Login</h2>
        <Form noValidate validated={validated}>
            <Form.Group className="mb-3" controlId="userId">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter userid" 
                value={email} onChange={(e) => setEmail(e.currentTarget.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="loginPwd">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" 
                value={password} onChange={(e) => setPassword(e.currentTarget.value)} required/>
            </Form.Group>
            <Button variant="primary" onClick={handleLogin} className='loginButton'>
                Login
            </Button> &nbsp;
            New User? <Link to="/register" id='registerButton'>Register</Link>
        </Form>
    </React.Fragment>
    )
}

export default Login;


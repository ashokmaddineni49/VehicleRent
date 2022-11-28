import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const handleLogin = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            alert("Form not valid");
            return false;
        }
        setValidated(true);
        const user = users.find(user => user.email === email);
        console.log(user);
        if(user && user.pass_word === password) {
            localStorage.setItem("user", user.firstname);
            navigate("/home");
        } else {
            alert("Userid or password is incorrect");
            navigate("/");
        }
    }
 
    useEffect(() => {
        getAllUsers();
    },[]);

    const getAllUsers = async () => {
        const users = await axios.get('http://localhost:8080/users');
        setUsers(users.data);
    }

    return (
        <div className="row loginpage">
            <div className="col login-div">
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
            </div>
        </div>
    )
}

export default Login;


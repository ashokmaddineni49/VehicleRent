import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Header from "./header";

const BookingDetails = (props) => {
    const [user, setUser] = useState("");
    const location = useLocation();
    const [days, setDays] = useState("1");
    const [address, setAddress] = useState("");
    const types = ['Credit Card', 'Debit Card', 'Paypal'];
    const [selectedType, setSelectedType] = useState("");
    const [totalCost, setTotalCost] = useState(location.state.vehicle.total_cost||0);
    const [isBooked, setIsBooked] = useState(false);

    console.log(location.state);
    const handleSubmit = (e) => {
        setIsBooked(true);
        console.log(days);
    }

    const handleOnChange = (e) => {
        setSelectedType(e.target.value)
        //console.log(e.target.value);
    }

    const onChangeDays = (days) => {
        setDays(days);
        const totalcost = (location?.state?.vehicle.total_cost)*parseInt(days);
        setTotalCost(totalcost);
    }

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        loggedInUser && setUser(loggedInUser);
    
    },[]);

    return (
        <div className="main">
            <Header user={user}/>
            <div className="row loginpage">
                <div className="col login-div">
                    <h3>Booking Details</h3>
                    {!isBooked && <Form noValidate>
                        <Form.Group className="mb-3" controlId="days">
                            <Form.Label>Enter number of days required</Form.Label>
                            <Form.Control type="text" placeholder="Enter days" 
                            value={days} onChange={(e) => onChangeDays(e.currentTarget.value)} required/>
                        </Form.Group>
                        {<Form.Group className="mb-3" controlId="totalcost">
                            <Form.Label>Total Cost: {isNaN(totalCost) ? 0 : totalCost}</Form.Label>
                        </Form.Group>}
                        <Form.Group className="mb-3" controlId="address">
                            <Form.Label>Shipping Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter address"
                            value={address} onChange={(e) => setAddress(e.currentTarget.value)} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="paymenttype">
                            <Form.Label>Payment Type</Form.Label>
                            <div>
                            {types.map((type) => (
                                <Form.Check
                                    inline
                                    label={type}
                                    name="paymentType"
                                    type="radio"
                                    id={`inline-${type}-1`}
                                    onChange={handleOnChange}
                                    value={type}
                                />   
                            ))}
                            </div>
                        </Form.Group>
                        
                        <Button variant="primary" onClick={handleSubmit} className='loginButton'>
                            Submit
                        </Button> &nbsp;
                    </Form>
                    }
                    {isBooked && <div>
                        <h3 className="bookSucessDiv">Vehicle Booked Successfully</h3>
                        <h6>Total Price: {totalCost}</h6> 
                        <h6>Shipping Address:</h6> { address}
                        <h6>Payment Type:</h6>{selectedType}
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default BookingDetails;
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Payment = (props) => {
    const navigate = useNavigate();

    const onBookVehicle = () => {
        navigate('/bookingdetails', { state: {vehicle: props.vehicle}})
        
    };

    return (<div className="mainDivPayment">
            <div className="row paymentDiv">
                <div className="col-3 vehicleImage">
                    <img src={require(`./images/vehicles/${props.vehicle.model_name}.jpg`)} alt="for vehicle" style={{width:"300px",height:"200px"}}/>
                </div>
                <div className="col-7 vehicleNameDesc">
                    <div className="vehicleName"><b>{props.vehicle.model_name}</b></div>
                    <div className="vehicleDesc">{props.vehicle.vehicle_description}</div>
                </div>
            </div>
            <div className="row vehicleTotalPrice">
                <div className="col-4"></div>
                <div className="col-2"> <b>Price: ${props.vehicle.vehicle_cost}</b></div>   
                <div className="col-2 vehicleBook">
                    <Button variant="primary" onClick={() => onBookVehicle()}>Book</Button>
                </div>     
            </div>
        </div>)
}

export default Payment;
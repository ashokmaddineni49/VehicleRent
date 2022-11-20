import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Payment = (props) => {
    const [isVehicleBooked, setIsVehicleBooked] = useState(false);

    const onBookVehicle = () => {
        console.log(props.vehicle);
        setIsVehicleBooked(true);
        
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
                <div className="col-2"> <b>Total Price: ${props.vehicle.total_cost}</b></div>   
                <div className="col-2 vehicleBook">
                    <Button variant="primary" onClick={() => onBookVehicle()}>Book</Button>
                </div>     
            </div>
            {isVehicleBooked && <div className="bookSucessDiv"><h3>Vehicle booked successfully</h3></div>}
        </div>)
}

export default Payment;
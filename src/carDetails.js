import React from "react";
import { Button } from "react-bootstrap";

const CarDetails = (props) => {

    const list = [{ name: "HF Dawn",description: "HF Dawn is the most affordable bike", price: 10000},
        {name: "Honda Active", description: "Honda active 6G is powered by 109.51 cc", price: 5000}]

    return (
        list.map((car, index) => {
            return (
                <div index={index} className="row vehicleDetails">
                    <div className="col vehicleImage">
                        <img src="" alt="for car" style={{width:"200px",height:"200px"}}/>
                    </div>
                    <div className="col vehicleNameDesc">
                        <div className="vehicleName"><b>{car.name}</b></div>
                        <div className="vehicleDesc">{car.description}</div>
                    </div>
                    <div className="col vehiclePrice">
                        <div> ${car.price}</div>        
                    </div>
                    <div className="col vehicleBook">
                        <Button variant="primary">Book</Button>
                    </div>
                </div>
            )
        })
    )
}

export default CarDetails;
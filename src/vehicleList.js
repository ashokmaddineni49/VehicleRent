import React, { useEffect, useState} from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const VehicleList = (props) => {
    const [list, setList] = useState([]);
    const [selectedVehicle, setSelectedVehicle] = useState({});

    const getVehiclesBySubype = async (subtype) => {
        const vehicleList = await axios.get('http://localhost:8080/vehicle/list', {
            params: {
                subtype
            }
            });
            setList(vehicleList.data);
    }

    useEffect(() => {
        getVehiclesBySubype(props.subtype);
    }, [props.subtype]);

    const onSelectVehicle = (vehicle) => {
        console.log(vehicle);
        setSelectedVehicle(vehicle);
    };

    return (
        list.map((vehicle, index) => {
            return (
                <div key={index} className="row vehicleDetails">
                    <div className="col vehicleImage">
                        <img src="" alt="for vehicle" style={{width:"200px",height:"200px"}}/>
                </div>
                    <div className="col vehicleNameDesc">
                        <div className="vehicleName"><b>{vehicle.model_name}</b></div>
                        <div className="vehicleDesc">{vehicle.vehicle_description}</div>
                    </div>
                    <div className="col vehiclePrice">
                        <div> ${vehicle.vehicle_cost}</div>        
                    </div>
                    <div className="col vehicleBook">
                        <Button variant="primary" onClick={() => onSelectVehicle(vehicle)}>Select</Button>
                    </div>
                </div>
            )
        })
    )
}

export default VehicleList;
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import VehicleList from "./vehicleList";
import Titles from "./titles";
import axios from "axios";

const Cartypes = () => {    

    const [carSubtype, setCarSubtype] = useState("");
    const [canShowCarDetails, setCanShowCarDetails] = useState(false);
    const [carTypes, setCartypes] = useState([]);

    const handleClick = (e) => {
        const type = e.target.innerText;
        setCarSubtype(type);
        setCanShowCarDetails(true);
    }

    useEffect(() => {
        getAllCarTypes();
    },[]);

    const getAllCarTypes = async () => {
        const cars = await axios.get('http://localhost:8080/vehicle/subtypes', {
            params: {
              type: 'car'
            }
          });
          setCartypes(cars.data);
    }

    return (
        <div class="main">
            {canShowCarDetails ? <Titles title={`Please select from available ${carSubtype} cars`}/> : <Titles title={`Please select the type of Car you want`}/>}
             {!canShowCarDetails && <div className="row images-home">

             {carTypes.map((type, index) => {
                    return  (<div key={"cartype"+index} className="col-4 vehicletypes-home">
                        <div><img src={require(`./images/${type.subtype}.png`)} alt={""}></img></div>
                        <div><Button onClick={e => handleClick(e)}>{type.subtype}</Button></div>
                    </div>)
                })}
             </div>}
             <div>
                 {  canShowCarDetails && <VehicleList subtype={carSubtype}/>}
                </div>
        </div>)
}

export default Cartypes;
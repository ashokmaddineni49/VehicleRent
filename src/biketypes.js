import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import VehicleList from "./vehicleList";
import Titles from "./titles";
import axios from "axios";

const Biketypes = (props) => {
    const [bikeSubtype, setBikeSubtype] = useState("");
    const [canShowBikeDetails, setCanShowBikeDetails] = useState(false);
    const [canShowTitle, setCanShowTitle] = useState(true);
    const [bikeTypes, setBiketypes] = useState([]);
    const handleClick = (e) => {
        const type = e.target.innerText;
        setBikeSubtype(type);
        setCanShowBikeDetails(true);
        //props.addBikeTypesLinkHome(true);
    }

    useEffect(() => {
        getAllBikeTypes();
    },[]);

    const getAllBikeTypes = async () => {
        const bikes = await axios.get('http://localhost:8080/vehicle/subtypes', {
            params: {
              type: 'bike'
            }
          });
          setBiketypes(bikes.data);
    }

    const onVehicleSelect = () => {
        setCanShowTitle(false);
    }

    return (
        <div className="main">
             {(canShowBikeDetails && canShowTitle) ? <Titles title={`Please select from available ${bikeSubtype} bikes`}/> :  (canShowTitle && <Titles title={`Please select the type of Bike you want`}/>)}
             {!canShowBikeDetails && <div className="row images-home">
                {bikeTypes.map((type, index) => {
                    return  (<div key={"biketype"+index} className="col-4 vehicletypes-home">
                        <div><img src={require(`./images/${type.subtype}.png`)} alt={""}></img></div>
                        <div><Button onClick={e => handleClick(e)}>{type.subtype}</Button></div>
                    </div>)
                })}
             </div>}
            {canShowBikeDetails && <VehicleList vehicleSelect={onVehicleSelect} subtype={bikeSubtype}/>}
        </div>
    )
}
export default Biketypes;
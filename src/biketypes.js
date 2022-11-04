import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import commuter_bike from "./images/commuter_bike.jpg";
import mountain_bike from "./images/Mountain_Bike.png";
import sports_bike from "./images/Sports_Bike.png";
import BikeDetails from "./bikeDetails";
//import { useNavigate } from "react-router-dom";

const Biketypes = () => {

    //const navigate = useNavigate();
    const [biketype, setBiketype] = useState("");
    const [canShowBikeDetails, setCanShowBikeDetails] = useState(false);
    const handleClick = (e) => {
        const type = e.target.innerText;
        //console.log(e.target.innerText);
        setBiketype(type);
        setCanShowBikeDetails(true);
    }

    return (
        <div class="main">
            <div className="row title">
                <h2>Welcome to Vehicle Renting System</h2>
                {canShowBikeDetails ? <h3>Please select the {biketype} bike</h3>:<h3>Please select the type of Bike you want</h3>}
             </div>
             {!canShowBikeDetails && <div className="row images-home">
                <div className="col-3 vehicletypes-home">
                    <div><img src={commuter_bike} alt={""}></img></div>
                    <div><Button onClick={e => handleClick(e)}>Commuter</Button></div>
                </div>
                <div class="col-1 vertical-line_types" ></div>
                <div className="col-3 vehicletypes-home">
                    <div><img src={mountain_bike} alt={""}></img></div>
                    <Button onClick={e => handleClick(e)}>Mountain</Button>
                </div>
                <div class="col-1 vertical-line_types"></div>
                <div className="col-3 vehicletypes-home">
                    <div><img src={sports_bike} alt={""}></img></div>
                    <Button onClick={e => handleClick(e)}>Sports</Button>
                </div>
             </div>}
             {canShowBikeDetails && (<div>
                    <BikeDetails biketype={biketype}/>
                </div>)}
        </div>
    )
}
export default Biketypes;
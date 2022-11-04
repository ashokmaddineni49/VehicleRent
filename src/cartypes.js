import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Sedan from "./images/Sedan.png";
import SUV from "./images/SUV.jpg";
import Van from "./images/Van.png";

const Cartypes = () => {    
    return (
        <div class="main">
            <div className="row title">
                <h2>Welcome to Vehicle Renting System</h2>
                <h3>Please select the type of Car you want</h3>
             </div>
             <div className="row images-home">
                <div className="col-3 vehicletypes-home">
                    <img src={Sedan} alt={"Sedan"}></img>
                </div>
                <div class="col-1 vertical-line_types"></div>
                <div className="col-3 vehicletypes-home">
                    <img src={SUV} alt={""}></img>
                </div>
                <div class="col-1 vertical-line_types"></div>
                <div className="col-2 vehicletypes-home">
                    <img src={Van} alt={""}></img>
                </div>
             </div>
        </div>
    )
}
export default Cartypes;
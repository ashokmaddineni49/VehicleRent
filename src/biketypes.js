import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import commuter_bike from "./images/commuter_bike.jpg";
import mountain_bike from "./images/Mountain_Bike.png";
import sports_bike from "./images/Sports_Bike.png";

const Biketypes = () => {
    const [user, setUser] = useState("");

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        loggedInUser && setUser(loggedInUser);
    
    },[]);
    return (
        <div class="main">
            <div className="row header">
                <div className="col welcomeUser">
                    Welcome {user}
                </div>
                <div className="col Homebutton">
                <Link to="/Home" id='homeButton'>Home</Link>
                </div>
                <div className="col logout">
                    <Link to="/logout" id='logoutButton'>Logout</Link>
                </div>
            </div>
            <div className="row title">
                <h2>Welcome to Vehicle Renting System</h2>
                <h3>Please select the type of Bike you want</h3>
             </div>
             <div className="row images-home">
                <div className="col-3 vehicletypes-home">
                    <img src={commuter_bike} alt={""}></img>
                </div>
                <div class="col-1 vertical-line_types" ></div>
                <div className="col-3 vehicletypes-home">
                    <img src={mountain_bike} alt={""}></img>
                </div>
                <div class="col-1 vertical-line_types"></div>
                <div className="col-3 vehicletypes-home">
                    <img src={sports_bike} alt={""}></img>
                </div>
             </div>
        </div>
    )
}
export default Biketypes;
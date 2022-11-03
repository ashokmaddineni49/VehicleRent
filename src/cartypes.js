import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Sedan from "./images/Sedan.png";
import SUV from "./images/SUV.jpg";
import Van from "./images/Van.png";

const Cartypes = () => {
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
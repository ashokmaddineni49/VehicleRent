import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bike from "./images/bike.jpg";
import car from "./images/car.png";
import Biketypes from "./biketypes";
import { Button } from "react-bootstrap";
import Cartypes from "./cartypes";

const Home = () => {
    const [user, setUser] = useState("");
    const [showBikeDetails, setShowBikeDetails] = useState(false);
    const [showCarDetails, setShowCarDetails] = useState(false);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        loggedInUser && setUser(loggedInUser);
    
    },[]);

    const handleBikeClick = () => {
        setShowBikeDetails(true);
        setShowCarDetails(false);
    }

    const handleHomeClick = () => {
        setShowCarDetails(false);
        setShowBikeDetails(false);
    }

    const handleCarClick = () => {
        setShowCarDetails(true);
        setShowBikeDetails(false);
    }

    return (
        <div class="main">
            <div className="row header">
                <div className="col welcomeUser">
                    Welcome {user}
                </div>
                { (showBikeDetails||showCarDetails)  && (<div className="col Homebutton">
                    <Button onClick={handleHomeClick}>Home</Button>
                </div>)}
                <div className="col logout">
                    <Link to="/logout" id='logoutButton'>Logout</Link>
                </div>
            </div>
            
            {!showBikeDetails && !showCarDetails && <><div className="row title">
                <h2>Welcome to Vehicle Renting System</h2>
                <h3>Select the type of Vehicle you want</h3>
             </div>
             <div className="row images-home">
                <div className="col-6 bike-home">
                    <img src={bike} alt={""} onClick={handleBikeClick}></img>
                </div>
                <div class="col-1 vertical-line"></div>
                <div className="col-5 car-home">
                    <img src={car} alt={""} onClick={handleCarClick}></img>
                </div>
             </div></>}
             
            {showBikeDetails && <Biketypes/>}
            { showCarDetails && <Cartypes/>}
            
        </div>
    )
}

export default Home;
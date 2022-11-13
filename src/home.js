import React, { useEffect, useState } from "react";
import bike from "./images/bike.jpg";
import car from "./images/car.png";
import Biketypes from "./biketypes";
import { Button } from "react-bootstrap";
import Cartypes from "./cartypes";
import Header from "./header";
import Titles from "./titles";

const Home = () => {
    const [user, setUser] = useState("");
    const [showBikeDetails, setShowBikeDetails] = useState(false);
    const [showCarDetails, setShowCarDetails] = useState(false);
    // const [canShowBikeTypesLink, setCanShowBikeTypesLink] = useState(false);

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
            <Header user={user}/>
            { (showBikeDetails||showCarDetails)  && (<div className="col Homebutton">
                    <Button onClick={handleHomeClick}>Home</Button>
                </div>)}
            {!showBikeDetails && !showCarDetails && <>
            <Titles title={"Select the type of Vehicle you want"}/>
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
            {showCarDetails && <Cartypes/>}           
        </div>
    )
}

export default Home;
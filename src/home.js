import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bike from "./images/bike.jpg";
import car from "./images/car.png"

const Home = () => {
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
                <div className="col logout">
                    <Link to="/logout" id='logoutButton'>Logout</Link>
                </div>
            </div>
            <div className="row title">
                <h2>Welcome to Vehicle Renting System</h2>
                <h3>Select the type of Vehicle you want</h3>
             </div>
             <div className="row images-home">
                <div className="col-6 bike-home">
                    <img src={bike} alt={""}></img>
                </div>
                <div class="col-1 vertical-line"></div>
                <div className="col-5 car-home">
                    <img src={car} alt={""}></img>
                </div>
             </div>
        </div>
    )
}

export default Home;
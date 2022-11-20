import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Logout = () => {

    useEffect(() => {
        localStorage.clear();
    });

    return (
        <div className="logoutDiv">
            <div><h3>User logged out successfully</h3></div>
            Login Again? <Link to="/">Login</Link>
        </div>
    )
}

export default Logout;
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = (props) => {

    return(
        <div className="row header">
            <div className="col welcomeUser">
                Welcome {props.user}
            </div>
            <div className="col logout">
                <Link to="/logout" id='logoutButton'>Logout</Link>
            </div>
        </div>
    )
}

export default Header;
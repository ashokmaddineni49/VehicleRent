import React from "react";

const Titles = (props) => {
    return (
        <div className="row title">
            <h2>Welcome to Vehicle Renting System</h2>
            <h3 className="titleText">{props.title}</h3>
        </div>
    )
}

export default Titles;
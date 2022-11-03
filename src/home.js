import React, { useEffect, useState } from "react";

const Home = () => {
    const [user, setUser] = useState("");

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        loggedInUser && setUser(loggedInUser);
    
    },[]);

    return (
        <div>
            Welcome {user}
        </div>
    )
}

export default Home;
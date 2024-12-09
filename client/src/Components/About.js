import React from "react";
import userImage from "../Images/user.png";

const About=()=>{
    return(
        <div>
            <h1>About this project</h1>
            <p>Tis project is developed by: Utas-Ibra.</p>
            <p>Email: Ibra@utas.edu.om</p>
            <img src={userImage} alt="devimage" className="userImage"/>
            <button>Contact developer</button>
        </div>
    );
};
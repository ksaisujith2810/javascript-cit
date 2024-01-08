import React from "react";
import logo from  './images/logo.jpg';



export const Header = () => {
    return(
        <div className="container App">
            <div className="row">
                <div className="col-2">
                    <img src={logo} alt="logo"  width={"80%"}/>
                </div>
                <div className="col">
                    <h1>My React Project</h1>
                </div>
            </div>
        </div>
    )
}
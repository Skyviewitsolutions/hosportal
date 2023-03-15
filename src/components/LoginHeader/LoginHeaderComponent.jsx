// This is the login header Component ;

import React from "react";
import "./loginHeader.css"

const LoginHeaderComponent = () =>{
    return(<>
        <div className="loginheader">
            <img src={require("../../assets/loginHeader/logo.png")} alt="logo" />
            <div className="lg_items">
                <a href="">HOS</a>
                <a href="">Nupco Outbound</a>
                <a href="">3PL</a>
                <a href="">Inventory</a>
            </div>
        </div>
    </>)
}

export default LoginHeaderComponent ;
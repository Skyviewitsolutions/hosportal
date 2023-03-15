// This is the login Component ;

import React from "react";
import "./login.css";
import LoginHeaderContainer from "../../components/LoginHeader/LoginHeaderContainer";
import LoginCardContainer from "../../components/LoginCard/LoginCardContainer";

const LoginComponent = () => {
  return (
    <>
      <div className="logincontainer">
        <video loop autoPlay muted className="videoContainer" playsInline>
          <source
            src={require("../../assets/video/videoplayback.mp4")}
            type="video/mp4"
          />
        </video>
        <div className="overLay">
          <LoginHeaderContainer />
          <LoginCardContainer />
        </div>
        
      </div>
    </>
  );
};

export default LoginComponent;

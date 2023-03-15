// This is our header Component ;
import React, { useState } from "react";
import "./header.css";
import { HiOutlineLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const hideLogout = () =>{
    if(showLogout){

      setShowLogout(false)
    }
  }

  const logoutUser = () =>{
    localStorage.removeItem("adminUsersData");
    localStorage.removeItem("selectedAdminMenu");
    localStorage.removeItem("activeMenuItem")
    navigate("/")
  }

  return (
    <>
      <div className="header" onClick={hideLogout}>
        <div className="logo">
          <img src={require("../../assets/header/nupcoLogo.png")} alt="" />
        </div>
        <div className="user">
          <h6>Mohammad Zubair</h6>
          <img src={require("../../assets/header/user.png")} alt=""  onClick={() => setShowLogout(!showLogout)} />
          {showLogout && (
            <div className="userLogout" onClick={logoutUser}>
              <HiOutlineLogout color="grey" />
              <h6>Logout</h6>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;

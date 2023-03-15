import React from "react";
import "./home.css";
import SideBarComponent from "../../components/SideBar/SideBarComponent";
import HeaderContainer from "../../components/Header/HeaderContainer";
import FooterComponent from "../../components/Footer/FooterComponent"
import CountryMasterList from "../CountryMaster/CountryMasterList";

const HomeComponent = () => {
  return (
    <>
      <div className="home">
        <SideBarComponent />
        <div className="homeContent">
          <HeaderContainer />
          {/* <CountryMasterList /> */}
          {/* <AddUserContainer /> */}
          {/* <EditUserContainer /> */}
          <FooterComponent />
        </div>
        
      </div>
    </>
  );
};

export default HomeComponent;

import React from 'react';
import Loader from "../../elements/loader/Loader";
import Phone from "../../assets/supplier/header/blackPhone.svg";
import Mail from "../../assets/supplier/header/blackMail.svg";
import SignOut from "../../assets/supplier/header/blackLogout.svg";
import Logo from "../../assets/loginHeader/logo.png";
import UserIcon from "../../assets/supplier/header/user.svg";

const RgrHeaderComponent = (props) => {

  const { loading, logout, vendorCode, name } = props;

  return (
    <div className="supp2ndHead">
        <div className="sup2ndHeadCont">
          <div>
            <img src={UserIcon} alt="user icon" style={{ width: "25px" }} />
            <h6 style={{ fontSize: "14px", color: "#545353" }}>
              {vendorCode} - {name}
            </h6>
          </div>
          <div>
            {/* <h6>{date} | 01:23:23 PM</h6> */}
            <h6>{ new Date().toLocaleString()}</h6>

            <div className="sup2ndinner">
              <img src={Mail} alt="" />
              <h6>nupcocare@nupco.com</h6>
            </div>
            <div className="sup2ndinner">
              <img src={Phone} alt="" />
              <h6>9200028423</h6>
            </div>
          </div>
        </div>
        <div className="sup2ndHeadCon2">
          <div onClick={logout} style={{ cursor: "pointer" }}>
            {loading ? (
              <Loader />
            ) : (
              <img src={SignOut} alt="" style={{ width: "20px" }} />
            )}
            <h5>Sign Out</h5>
          </div>
        </div>
      </div>
  )
}

export default RgrHeaderComponent
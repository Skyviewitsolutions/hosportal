import React, { useState } from "react";
import "./asn2ndheader.css";
import Loader from "../../elements/loader/Loader";
import Phone from "../../assets/supplier/header/blackPhone.svg";
import Mail from "../../assets/supplier/header/blackMail.svg";
import SignOut from "../../assets/supplier/header/blackLogout.svg";
import { endpoints } from "../../services/endpoints,";
import axios from "axios";
import Logo from "../../assets/loginHeader/logo.png";
import UserIcon from "../../assets/supplier/header/user.svg";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Asn2ndHeader = (props) => {

  const {  headersData } = props;
  const {vendorName , vendorCode , region ,stock ,storage } = headersData;
  const users = localStorage.getItem("usersData");
  const usersData = JSON.parse(users);
  const [loading , setLoading] = useState();

  const logoutUrl = endpoints.supplier.logOut;
  const navigate = useNavigate();

  const logout = () =>{
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };
    setLoading(true);
    const val = {
      UserId: usersData.UserId,
      AcceessToken: usersData.MemberToken,
    };

    axios
      .post(logoutUrl, val, { headers: headers })
      .then((res) => {
        setLoading(false);
        if (res.data.status === "Success") {
          localStorage.removeItem("usersData");
          localStorage.removeItem("selectedSupplier");
          navigate("/supplier/login");
        } else if (res.data.status === "Failed") {
          toast(res.data.statusText, { type: "error" });
        }
      })
      .catch((err) => {
        setLoading(false);
        toast("Something went wrong", { type: "error" });
      });
  }

  return <>
  <div className="supp2ndHead">
        <div className="sup2ndHeadCont">
          <div>
            <img src={UserIcon} alt="user icon" style={{ width: "25px" }} />
            <h6 style={{ fontSize: "14px", color: "#545353" }}>
              {/* {vendorCode} - {name} */}
              v{vendorCode} - {vendorName}
            </h6>
          </div>
          <div>
            {/* <h6>{date} | 01:23:23 PM</h6> */}
            <h6>{ new Date().toLocaleString()}</h6>

            <div className="sup2ndinner ">
              <img src={Mail} alt="" />
              <h6>nupcocare@nupco.com</h6>
            </div>
            <div className="sup2ndinner">
              <img src={Phone} alt="" />
              <h6>9200028423</h6>
            </div>
          </div>
        </div>
        <div className="sup2ndHeadCon2 ansHead">
          <div>
            <h6>{region} - {stock} - {storage}</h6>
          </div>
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
  </>;
};

export default Asn2ndHeader;

import React from "react";
import "./supplierHeader.css";
import Mail from "../../assets/supplier/mail.svg";
import Phone from "../../assets/supplier/phone.svg";
import Logo from "../../assets/loginHeader/logo.png";
import SignOut from "../../assets/supplier/signOut.svg";
import Loader from "../../elements/loader/Loader";

const SupplierHeaderComponent = (props) => {
  const { logout, loading } = props;
  return (
    <>
      <div className="supheader">
        <div className="supHeadCont">
          <h6>2022/02/20 | 01:23:23 PM</h6>
          <div>
            <img src={Phone} alt="" />
            <h6>NUPCO Care</h6>
          </div>
          <div>
            <img src={Mail} alt="" />
            <h6>nupcocare@nupco.com</h6>
          </div>
          <div>
            <img src={Phone} alt="" />
            <h6>9200028423</h6>
          </div>
        </div>
        <div className="supHeadCon2">
          <div>
            <img src={Logo} alt="" style={{ width: "80px" }} />
            <h2>Supplier Portal</h2>
          </div>
          <div onClick={logout} style={{cursor : "pointer"}}>
            {loading ? (
              <Loader />
            ) : (
              <img src={SignOut} alt="" style={{ width: "21px" }} />
            )}
            <h5>Sign Out</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupplierHeaderComponent;

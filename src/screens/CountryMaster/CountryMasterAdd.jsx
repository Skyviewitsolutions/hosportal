import React, { useState, useEffect } from "react";
import AddFormContainer from "../../components/AddForm/AddFormContainer";
import Input from "../../elements/Input/Input";
import { useNavigate } from "react-router-dom";
import Button from "../../elements/button/Button";
import BackButton from "../../elements/button/BackButton";
import SelectBox from "../../elements/SelectBox/SelectBox";
import FooterComponent from "../../components/Footer/FooterComponent";
import HeaderContainer from "../../components/Header/HeaderContainer";
import SideBarComponent from "../../components/SideBar/SideBarComponent";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CountryMasterAdd = () => {

  const [countryName, setCountryName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const [countryActive, setCountryActive] = useState(true);
  const navigate = useNavigate();
  const users = localStorage.getItem("adminUsersData");

  const saveForm = () => {
    const url = "http://hos.team-suit.com/api/country/add";
   
    const usersData = JSON.parse(users);
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };

    const val = {
      CountryId: "",
      CountryName: countryName,
      CountryCode: countryCode,
      PhoneCode: phoneCode,
      UserId: usersData.UserId,
      IsActive: countryActive,
    };

    axios
      .post(url, val, { headers: headers })
      .then((res) => {
        if (res.data.status === "Success") {
          toast("Country added successfully", { type: "success" });
          navigate("/countryMaster/list");
        } else if ((res.data.status = "Failed")) {
          toast("Country added failed", { type: "error" });
        }
      })
      .catch((err) => {
        console.log(err, "this is the error");
      });
  };

  useEffect(() =>{
    if(!users){
      navigate("/")
    }
  },[])
  return (
    <>
      <div className="home">
        <SideBarComponent />
        <div className="homeContent">
          <HeaderContainer />
          <AddFormContainer title="Country">
            <div className="addForm">
              <Input
                type="text"
                labels="Country Name"
                onChange={(e) => setCountryName(e.target.value)}
                value={countryName}
                required
                placeholder="Enter country name"
              />
              <Input
                type="text"
                labels="Country Code"
                onChange={(e) => setCountryCode(e.target.value)}
                value={countryCode}
                required
                placeholder="Enter country code"
              />
              <Input
                type="text"
                labels="Phone Code"
                onChange={(e) => setPhoneCode(e.target.value)}
                value={phoneCode}
                required
                placeholder="Enter phone code"
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Button text="Save" onClick={saveForm} />
                <BackButton text="Go Back" onClick={() => navigate(-1)} />
              </div>
            </div>

            {/* here we are adding the button */}

           
          </AddFormContainer>
          <FooterComponent />
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default CountryMasterAdd;

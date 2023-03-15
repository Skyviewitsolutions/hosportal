import React, { useEffect, useState } from "react";
import EditFormContainer from "../../components/EditForm/EditFormContainer";
import Input from "../../elements/Input/Input";
import { useLocation } from "react-router-dom";
import Button from "../../elements/button/Button";
import BackButton from "../../elements/button/BackButton";
import SelectBox from "../../elements/SelectBox/SelectBox";
import axios from "axios";
import FooterComponent from "../../components/Footer/FooterComponent";
import HeaderContainer from "../../components/Header/HeaderContainer";
import SideBarComponent from "../../components/SideBar/SideBarComponent";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CountryMasterEdit = () => {
  const [editRecordsData, setEditRecordsData] = useState({});
  const [countryName, setCountryName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const [countryActive, setCountryActive] = useState(true);
  const navigate = useNavigate();
  const users = localStorage.getItem("adminUsersData");

  const updateForm = () =>{
    const records = localStorage.getItem("editRecords");
    const editRecords = JSON.parse(records);
    setEditRecordsData(editRecords);
    setCountryName(editRecords.CountryName);
    setCountryCode(editRecords.CountryCode);
    setPhoneCode(editRecords.PhoneCode);
    setCountryActive(editRecords.IsActive);
  }

  useEffect(() =>{
    if(!users){
      navigate("/")
    }
    else {
      updateForm();
    }
  })

  const saveForm = () => {
    const url = "http://hos.team-suit.com/api/country/add";
    const usersData = JSON.parse(users);
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };

    const val = {
      CountryId: editRecordsData.CountryId,
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
          toast("Country updated successfully", { type: "success" });
          navigate("/countryMaster/list");
        } else if ((res.data.status = "Failed")) {
          toast("Country updation successfully", { type: "error" });
        }
      })
      .catch((err) => {
        console.log(err, "this is the error");
      });
  };

 
  return (
    <>
      <div className="home">
        <SideBarComponent />
        <div className="homeContent">
          <HeaderContainer />
          <EditFormContainer title="Country">
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

              {/* <div className="allOrder">
            <h5>Active Status</h5>
            <input
              type="checkbox"
              value={countryActive}
              defaultChecked={countryActive}
              onChange={(e) => setCountryActive(!countryActive)}
              name=""
              id=""
              style={{
                width: "25px",
                height: "25px",
                margin: "14px",
                marginLeft: "33px",
              }}
            />
          </div> */}
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
          </EditFormContainer>
          <FooterComponent />
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default CountryMasterEdit;

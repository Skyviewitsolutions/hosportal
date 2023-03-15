import React, { useState, useEffect } from "react";
import AddFormContainer from "../../components/AddForm/AddFormContainer";
import Input from "../../elements/Input/Input";
import { useNavigate } from "react-router-dom";
import EditFormContainer from "../../components/EditForm/EditFormContainer";
import Button from "../../elements/button/Button";
import BackButton from "../../elements/button/BackButton";
import SelectBox from "../../elements/SelectBox/SelectBox";
import axios from "axios";
import FooterComponent from "../../components/Footer/FooterComponent";
import HeaderContainer from "../../components/Header/HeaderContainer";
import SideBarComponent from "../../components/SideBar/SideBarComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PlantEdit = () => {
  const [editRecordsData, setEditRecordsData] = useState({});
  const [plantName, setPlantName] = useState("");
  const [plantArabicName, setPlantArabicName] = useState("");
  const [plantCode, setPlantCode] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [plantActive, setPlantActive] = useState(true);
  const navigate = useNavigate();
  const users = localStorage.getItem("adminUsersData");
    const usersData = JSON.parse(users);

  
  const updateForm = () =>{
    const records = localStorage.getItem("editRecords");
    const editRecords = JSON.parse(records);
    setEditRecordsData(editRecords);
    setPlantName(editRecords.PlantName);
    setPlantArabicName(editRecords.PlantNameArrabic);
    setPlantCode(editRecords.PlantCode);
    setLocation(editRecords.Address);
    setCity(editRecords.City);
    setPlantActive(editRecords.IsActive);
  }

  const saveForm = () => {
    const url = "http://hos.team-suit.com/api/Plant/add";
    
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };

    const val = {
      PlantId: editRecordsData.PlantId,
      PlantName: plantName,
      PlantNameArrabic: plantArabicName,
      PlantCode: plantCode,
      Address: location,
      City: city,
      UserId: usersData.UserId,
      IsActive: plantActive,
    };

    axios
      .post(url, val, { headers: headers })
      .then((res) => {
        if (res.data.status === "Success") {
          toast("Plant edited successfully" , {type : "success"})
          navigate("/plant/list");
        } else if ((res.data.status = "Failed")) {
          toast("Plant edited failed" , {type : 'error'})
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
    else{
      updateForm();
    }
  })
  return (
    <>
      <div className="home">
        <SideBarComponent />
        <div className="homeContent">
          <HeaderContainer />
          <EditFormContainer title="Plant">
            <div className="addForm">
              <Input
                type="text"
                labels="Plant Name"
                onChange={(e) => setPlantName(e.target.value)}
                value={plantName}
                required
                placeholder="Enter plant name"
              />

              <Input
                type="text"
                labels="Plant Arabic Name"
                onChange={(e) => setPlantArabicName(e.target.value)}
                value={plantArabicName}
                required
                placeholder="Enter plant in arabic"
              />

              <Input
                type="text"
                labels="Plant Code"
                onChange={(e) => setPlantCode(e.target.value)}
                value={plantCode}
                required
                placeholder="Enter plant code"
              />

              <Input
                type="text"
                labels="Location"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
                required
                placeholder="Enter Location"
              />

              <Input
                type="text"
                labels="City"
                onChange={(e) => setCity(e.target.value)}
                value={city}
                required
                placeholder="Enter City"
              />

              {/* <div className="allOrder">
            <h5>Active Status</h5>
            <input
              type="checkbox"
              value={plantActive}
              defaultChecked={plantActive}
              onChange={(e) => setPlantActive(!plantActive)}
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

export default PlantEdit;

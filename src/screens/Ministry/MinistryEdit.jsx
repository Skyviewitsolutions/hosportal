import React, { useState, useEffect } from "react";
import EditFormContainer from "../../components/EditForm/EditFormContainer";
import Input from "../../elements/Input/Input";
import { useNavigate } from "react-router-dom";
import Button from "../../elements/button/Button";
import BackButton from "../../elements/button/BackButton";
import SelectBox from "../../elements/SelectBox/SelectBox";
import axios from "axios";
import FooterComponent from "../../components/Footer/FooterComponent";
import HeaderContainer from "../../components/Header/HeaderContainer";
import SideBarComponent from "../../components/SideBar/SideBarComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateLocale } from "moment";

const MinistryEdit = () => {

  const [editRecordsData, setEditRecordsData] = useState({});
  const [ministryName, setMinistryName] = useState("");
  const [ministryCode, setMinistryCode] = useState("");
  const [ministryActive, setMinistryActive] = useState(true);
  const users = localStorage.getItem("adminUsersData");
  const navigate = useNavigate();


  const updatForm = () =>{
    const records = localStorage.getItem("editRecords");
    const editRecords = JSON.parse(records);
    setEditRecordsData(editRecords);
    setMinistryName(editRecords.MinistryName);
    setMinistryCode(editRecords.MinistryCode);
    setMinistryActive(editRecords.IsActive);
  }

  useEffect(() =>{
    if(!users){
      navigate("/")
    }
    else{
      updatForm();
    }
  },[])

  const saveForm = () => {
    const url = "http://hos.team-suit.com/api/ministry/add";
    
    const usersData = JSON.parse(users);
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };

    const val = {
      MinistryId: editRecordsData.MinistryId,
      MinistryName: ministryName,
      MinistryCode: ministryCode,
      UserId: usersData.UserId,
      IsActive: ministryActive,
    };

    axios
      .post(url, val, { headers: headers })
      .then((res) => {
        if (res.data.status === "Success") {
          toast("Ministery edited successfully", { type: "success" });
          navigate("/ministry/list");
        } else if ((res.data.status = "Failed")) {
          toast("Ministry edited failed", { type: "error" });
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
          <EditFormContainer title="Ministry">
            <div className="addForm">
              <Input
                type="text"
                labels="Ministry Name"
                onChange={(e) => setMinistryName(e.target.value)}
                value={ministryName}
                required
                placeholder="Enter name"
              />

              <Input
                type="text"
                labels="Ministry Code"
                onChange={(e) => setMinistryCode(e.target.value)}
                value={ministryCode}
                required
                placeholder="Enter code"
              />

              {/* <div className="allOrder">
            <h5>Active Status</h5>
            <input
              type="checkbox"
              value={ministryActive}
              defaultChecked={ministryActive}
              onChange={(e) => setMinistryActive(!ministryActive)}
              name=""
              id=""
              style={{
                width: "25px",
                height: "25px",
                margin: "14px",
                marginLeft: "33px",
              }}
            /> 
          </div>*/}
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

export default MinistryEdit;

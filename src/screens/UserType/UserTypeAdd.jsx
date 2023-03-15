import React, { useState, useEffect } from "react";
import AddFormContainer from "../../components/AddForm/AddFormContainer";
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
import Confirm from "../../elements/Confirm/Confirm";

const UserTypeAdd = () => {

  const [loading , setLoading] = useState(false)
  const [errors , setErrors] = useState({})
  const [typeHeadValue, setTypeHeadValue] = useState("");
  const [typeHeadActive, setTypeHeadActive] = useState(true);
  const navigate = useNavigate();
  const users = localStorage.getItem("adminUsersData");

  const saveForm = () => {
    const url = "http://hos.team-suit.com/api/usertype/add";
    
    const usersData = JSON.parse(users);
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };

    if(typeHeadValue.length < 1){
        setErrors({typeHead : "Type head is required"})
    } 
    else if(typeHeadValue.length < 3){
      setErrors({typeHead : "Type head must be greater than 2 char"})
    }
    else {
      setErrors({})
      setLoading(true)
    const val = {
      TypeId: "",
      TypeHead: typeHeadValue,
      UserId: usersData.UserId,
      IsActive: typeHeadActive,
    };

    axios
      .post(url, val, { headers: headers })
      .then((res) => {
        setLoading(false)
        if (res.data.status === "Success") {
          toast("UserType added successfully", { type: "success" });
          setTypeHeadValue("")
        } else if ((res.data.status = "Failed")) {
          toast("UserType add failed", { type: "error" });
        }
      })
      .catch((err) => {
        setLoading(false)
        toast("Something went wrong" , {type : "error"})
        console.log(err, "this is the error");
      });
  };
}

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
          <AddFormContainer title="UserType">
            <div className="addForm">
              <Input
                type="text"
                errors={errors.typeHead}
                labels="Type Head"
                onChange={(e) => setTypeHeadValue(e.target.value)}
                value={typeHeadValue}
                required
                placeholder="Enter name"
              />

              {/* <div className="allOrder">
            <h5>Active Status</h5>
            <input
              type="checkbox"
              value={typeHeadActive}
              defaultChecked={typeHeadActive}
              onChange={(e) => setTypeHeadActive(!typeHeadActive)}
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
                <Button text="Save" onClick={saveForm} loading={loading}/>
                <BackButton text="Go Back" onClick={() => navigate(-1)} />
              </div>
            </div>
          </AddFormContainer>
         
          <FooterComponent />
          <ToastContainer />
        </div>
      </div>
      
    </>
  );
};

export default UserTypeAdd;

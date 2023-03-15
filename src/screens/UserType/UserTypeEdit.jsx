import React, { useEffect, useState } from "react";
import EditFormContainer from "../../components/EditForm/EditFormContainer";
import Input from "../../elements/Input/Input";
import { useLocation } from "react-router-dom";
import Button from "../../elements/button/Button";
import BackButton from "../../elements/button/BackButton";
import SelectBox from "../../elements/SelectBox/SelectBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FooterComponent from "../../components/Footer/FooterComponent";
import HeaderContainer from "../../components/Header/HeaderContainer";
import SideBarComponent from "../../components/SideBar/SideBarComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toast } from "bootstrap";

const UserTypeEdit = () => {

  const [loading, setLoading] = useState(false);
  const [errors , setErrors] = useState({})
  const [editRecordsData, setEditRecordsData] = useState({});
  const [typeHeadValue, setTypeHeadValue] = useState("");
  const [typeHeadActive, setTypeHeadActive] = useState(true);
  const navigate = useNavigate();
  const users = localStorage.getItem("adminUsersData");

 

  const updateForm  = () =>{
    const records = localStorage.getItem("editRecords");
    const editRecords = JSON.parse(records);
    setEditRecordsData(editRecords);
    setTypeHeadValue(editRecords.TypeHead);
    setTypeHeadActive(editRecords.IsActive);
  }

  useEffect(() =>{
    if(!users){
      navigate("/")
    }else {
      updateForm()
    }
  },[])

  const saveForm = () => {
    const url = "http://hos.team-suit.com/api/usertype/add";
    
    const usersData = JSON.parse(users);
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };

    if (typeHeadValue.length < 1) {
      setErrors({ typeHead: "Type head is required" });
    } else if (typeHeadValue.length < 3) {
      setErrors({ typeHead: "Type head must be greater than 2 char" });
    } else {
      setErrors({});
      setLoading(true);
      const val = {
        TypeId: editRecordsData.TypeId,
        TypeHead: typeHeadValue,
        UserId: usersData.UserId,
        IsActive: typeHeadActive,
      };

      axios
        .post(url, val, { headers: headers })
        .then((res) => {
          setLoading(false)
          if (res.data.status === "Success") {
            toast("UserType edited successfully", { type: "success" });
            // navigate("/userType/list");
          } else if ((res.data.status = "Failed")) {
            toast( res.data.statusText, { type: "error" });
          }
        })
        .catch((err) => {
          setLoading(false)
          console.log(err, "this is the error");
        });
    }
  };

 


  return (
    <>
      <div className="home">
        <SideBarComponent />
        <div className="homeContent">
          <HeaderContainer />
          <EditFormContainer title="UserType">
            <div className="addForm">
              <Input
                type="text"
                labels="Type Head"
                errors={errors.typeHead}
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
                <Button text="Save" onClick={saveForm} loading={loading} />
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

export default UserTypeEdit;

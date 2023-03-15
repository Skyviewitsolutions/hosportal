import React, { useState , useEffect} from "react";
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

const MinistryAdd = () => {
  const [ministryName, setMinistryName] = useState("");
  const [ministryCode, setMinistryCode] = useState("");
  const [ministryActive, setMinistryActive] = useState(true);
  const navigate = useNavigate();
  const users = localStorage.getItem("adminUsersData");


  const saveForm = () => {
    const url = "http://hos.team-suit.com/api/ministry/add";
    const usersData = JSON.parse(users);
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };

    const val = {
      MinistryId: "",
      MinistryName: ministryName,
      MinistryCode: ministryCode,
      UserId: usersData.UserId,
      IsActive: ministryActive,
    };

    axios
      .post(url, val, { headers: headers })
      .then((res) => {
        if (res.data.status === "Success") {
          toast("Ministy added successfully", { type: "success" });
          navigate("/ministry/list");
        } else if ((res.data.status = "Failed")) {
          toast("Ministry added failed", { type: "error" });
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
          <AddFormContainer title="Ministry">
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

          
          </AddFormContainer>
          <FooterComponent />
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default MinistryAdd;

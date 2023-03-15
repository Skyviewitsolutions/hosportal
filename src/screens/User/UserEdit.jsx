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
import { endpoints } from "../../services/endpoints,";

const UserEdit = () => {

  const [loading , setLoading] = useState(false)
  const [supplierSelected, setSupplierSelected] = useState(false);
  const [errors, setErrors] = useState({});
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginId, setLoginId] = useState("");
  const [guidId, setGuidId] = useState("");
  const [vendors, setVendors] = useState([]);
  const [userType, setUserType] = useState([]);
  const [supplyingPlant, setSupplyingPlant] = useState([]);
  const [storageLocation, setStorageLocation] = useState([]);

  const [selectedSupplyingPlant, setSelectedSupplyingPlant] = useState({
    id: null,
    value: "",
  });

  const [selectedStorageLocation, setSelectedStorageLocation] = useState({
    id: null,
    value: "",
  });

  const [selectedUserType, setSelectedUserType] = useState({
    id: null,
    value: "",
  });
  
  const [selectedVendor, setSelectedVendor] = useState({
    id: null,
    value: "",
  });

  const navigate = useNavigate();
  const users = localStorage.getItem("adminUsersData");
  const usersData = JSON.parse(users);

 

  // here we are getting vendor data and userType data & supplying plant data here;
  const records = localStorage.getItem("editRecords");
  const editRecords = JSON.parse(records);

  useEffect(() => {
   
    
  },[])

  const updateForm = () =>{

    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };
    setEmail(editRecords.Email)
    setFullName(editRecords.FullName)
    setPassword(editRecords.Password)
    
    const plantName =  `${editRecords.PlantCode} - ${editRecords.PlantName}`
    const supplyingPlantss = {id : editRecords.PlantId , value : plantName , label : plantName}

    setSelectedSupplyingPlant(supplyingPlantss);

    const vendorName = `${editRecords.VendorCode} - ${editRecords.VendorName}`
    const vendorss = {id : editRecords.VendorId , value : vendorName , label : vendorName} ;
    console.log(vendorss , "vendorssss")
    setSelectedVendor(vendorss)

    const userTypes = { id : editRecords.TypeId , value : editRecords.TypeHead , label : editRecords.TypeHead}

    setSelectedUserType(userTypes)

    const storageLocations = {id : editRecords.SlocId , value : editRecords.SlocName , label : editRecords.SlocName};

    console.log(storageLocations , "storage location")
    setSelectedStorageLocation(storageLocations);

    setGuidId(editRecords.GUID)
    setLoginId(editRecords.LoginId);


    setVendors([]);
    setUserType([]);
    setSupplyingPlant([]);

    const vendorUrl = endpoints.admin.vendor.list;
    const val = {
      VendorId: null,
      CountryId: null,
      UserId: usersData.UserId,
      IsActive: true,
    };

    axios
      .post(vendorUrl, val, { headers: headers })
      .then((res) => {
        if (res.data.status === "Success") {
          var response = res.data.VendorList;
          setVendors(response);
        } else if (res.data.status === "Failed") {
          toast("Vendor list not fetched", { type: "error" });
        }
      })
      .catch((err) => {});

    // user Type ;
    const userTypeUrl = endpoints.admin.userType.list;
    const vall = {
      TypeId: "",
      UserId: usersData.UserId,
      IsActive: true,
    };

    axios
      .post(userTypeUrl, vall, { headers: headers })
      .then((res) => {
        if (res.data.status === "Success") {
          var response = res.data.UTypes;
          for (var i = 0; i < response.length; i++) {
            setUserType((item) => {
              return [
                ...item,
                {
                  id: response[i].TypeId,
                  label: response[i].TypeHead,
                  value: response[i].TypeHead,
                },
              ];
            });
          }
        } else if (res.data.status === "Failed") {
          toast("Vendor list not fetched", { type: "error" });
        }
      })
      .catch((err) => {});

    // supplying plant ;

    const plantUrl = endpoints.admin.supplyingPlant.list;
    const valll = {
      PlantId: "",
      UserId: usersData.UserId,
      IsActive: true,
    };

    axios
      .post(plantUrl, valll, { headers: headers })
      .then((res) => {
        if (res.data.status === "Success") {
          var response = res.data.PlantList;
          for (var i = 0; i < response.length; i++) {
            const nam = `${response[i].PlantCode} - ${response[i].PlantName}`;
            setSupplyingPlant((item) => {
              return [
                ...item,
                {
                  id: response[i].PlantId,
                  label: nam,
                  value: nam,
                },
              ];
            });
          }
        } else if (res.data.status === "Failed") {
          toast("Vendor list not fetched", { type: "error" });
        }
      })
      .catch((err) => {});

  }

 

  ;

  useEffect(() =>{
    if(!users){
      navigate("/")
    }else {
      updateForm();
    }
  },[])

  const updateSupplyingPlant = (e) => {
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };
    setSelectedSupplyingPlant(e);

    // getting storage location data ;
    const strUrl = endpoints.admin.storageLocation.list;
    const val = {
      LocationId: "",
      PlantId: e.id,
      UserId: usersData.UserId,
      IsActive: null,
    };

    axios
      .post(strUrl, val, { headers: headers })
      .then((res) => {
        if (res.data.status === "Success") {
          var response = res.data.StoreList;
          for (var i = 0; i < response.length; i++) {
            setStorageLocation((item) => {
              return [
                ...item,
                {
                  id: response[i].LocationId,
                  label: response[i].LocName,
                  value: response[i].LocName,
                },
              ];
            });
          }
        } else if (res.data.status === "Failed") {
          toast("Vendor list not fetched", { type: "error" });
        }
      })
      .catch((err) => {});
  };

  const updateUserType = (e) => {
    setSelectedUserType(e);
    if (e.value === "Supplier") {
      setSupplierSelected(true);
    } else {
      setSupplierSelected(false);
    }
  };

  const saveForm = () => {

    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };
    if (fullName.length < 1) {
      setErrors({ fullName: "Name is required" });
    } else if (fullName.length < 3) {
      setErrors({ fullName: "Name must be greater than 2 char" });
    } else if (email.length < 1) {
      setErrors({ email: "Email is required" });
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrors({ email: "Invalid email" });
    } else if (password.length < 1) {
      setErrors({ password: "Password is required" });
    } else if (password.length < 4) {
      setErrors({ password: "Password must be greater than 4 char" });
    } else if (selectedUserType.value.length < 1) {
      setErrors({ userType: "Please Select UserType" });
    } else if (selectedSupplyingPlant.value.length < 1) {
      setErrors({ supplyingPlant: "Please select supplying plant" });
    } else if (selectedStorageLocation.value.length < 1) {
      setErrors({ storageLocation: "Please select storage location" });
    } else if (supplierSelected && loginId.length < 2) {
      setErrors({ loginId: "LoginID is required" });
    } else if (supplierSelected && guidId.length < 2) {
      setErrors({ guidId: "Guid ID is required" });
    } else {
      setErrors({});

      setLoading(true)
      
      const url = endpoints.admin.users.list;
      const users = localStorage.getItem("usersData");
      const usersData = JSON.parse(users);

      const val = {
        CUserId: usersData.UserId,
        UserId: editRecords.UserId,
        FullName: fullName,
        Email: email,
        Mobile: "",
        Password: password,
        MemberToken: usersData.MemberToken,
        HospitalId: "",
        MinistryId: "",
        PlantId: selectedSupplyingPlant.id,
        SlocId: selectedStorageLocation.id,
        CategotyId: "1",
        GUID: guidId,
        LoginId: loginId,
        VendorId: selectedVendor.id,
        TypeId: selectedUserType.id,
        AppSequence: "1",
        AllowChangeOrder: true,
        AllowOrder: true,
      };

      axios
        .post(url, val, { headers: headers })
        .then((res) => {
          setLoading(false)
          if (res.data.status === "Success") {
            toast("User edited successfully", { type: "success" });
          } else if ((res.data.status = "Failed")) {
            toast(res.data.statusText, { type: "error" });
          }
        })
        .catch((err) => {
          setLoading(false)
          console.log(err, "this is the error");
          toast("Something went wrong" , {type : "error"})
        });
    }
  };

  

  return (
    <>
      <div className="home">
        <SideBarComponent />
        <div className="homeContent">
          <HeaderContainer />
          <EditFormContainer title="User">
            <div className="addForm">
              <SelectBox
                allOptions={userType}
                labels="UserType"
                value={selectedUserType.value}
                defaultValue={selectedUserType.value}
                onChange={(e) => updateUserType(e)}
                required
                errors={errors.userType}
                placeholder="Select User Type"
              />

              <SelectBox
                allOptions={vendors}
                labels="Vendor"
                value={selectedVendor.value}
                errors={errors.vendor}
                onChange={(e) => setSelectedUserType(e)}
                placeholder="Select Vendor"
              />

              <Input
                type="text"
                labels="Name"
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
                errors={errors.fullName}
                required
                placeholder="Enter name"
              />

              <Input
                type="email"
                labels="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                errors={errors.email}
                required
                placeholder="Enter e-mail id"
              />

              <Input
                type="password"
                labels="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                errors={errors.password}
                placeholder="Enter password"
              />

              {supplierSelected && (
                <Input
                  type="text"
                  labels="LOGIN ID"
                  onChange={(e) => setLoginId(e.target.value)}
                  value={loginId}
                  errors={errors.loginId}
                  required
                  placeholder="Enter Login ID"
                />
              )}

              {supplierSelected && (
                <Input
                  type="text"
                  labels="GUID ID"
                  onChange={(e) => setGuidId(e.target.value)}
                  value={guidId}
                  required
                  errors={errors.guidId}
                  placeholder="Enter Guid ID"
                />
              )}

              <SelectBox
                allOptions={supplyingPlant}
                labels="Supplying Plant"
                value={selectedSupplyingPlant.value}
                required
                errors={errors.supplyingPlant}
                placeholder="Select Suppling Plant"
                onChange={(e) => updateSupplyingPlant(e)}
              />

              <SelectBox
                allOptions={storageLocation}
                required
                labels="Storage Location"
                value={selectedStorageLocation.value}
                errors={errors.storageLocation}
                onChange={(e) => {
                  setSelectedStorageLocation(e);
                }}
                placeholder="Select Storage Location"
              />

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

            {/* here we are adding the button */}
          </EditFormContainer>
          <FooterComponent />
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default UserEdit;

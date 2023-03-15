import React, { useEffect, useState } from "react";
import AsnHomeComponent from "./AsnHomeComponent";
import { endpoints } from "../../../../services/endpoints,";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const AsnHomeContainer = () => {
  
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState("");
  const [region, setRegion] = useState([]);
  const [customer , setCustomer] = useState([])

  const users = localStorage.getItem("usersData");
  const usersData = JSON.parse(users);
  
  const getRegion = () => {
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };

    const url = endpoints.supplier.asn.region;
    const val = {
      userId: usersData.UserId,
    };

    axios
      .post(url, val, { headers: headers })
      .then((res) => {
        
        if (res.data.status === "Success") {
          const response = res.data.region;
          setRegion(response);
        } else if (res.data.status === "Failed") {
          toast(res.data.statusText , {type : "error"})
        }
      })
      .catch(() => {});
  };

  useEffect(() => {
    if (!usersData) {
      navigate("/supplier/login");
    } else {
      getRegion();
    }
  }, []);

  const handleRegion = (e) => {
    console.log(e.target.value)
    const value = e.target.value;
    setSelectedRegion(value);

    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };

    const url = endpoints.supplier.asn.customer;
    const val = {
      userId: null,
      region: selectedRegion,
    };

    axios.post(url , val , {headers : headers})
    .then((res) =>{
    
      if(res.data.status === "Success"){
        const response = res.data.cl ;
        setCustomer(response);
        
      }
      else if(res.data.status === "Failed"){

      }
    })
    .catch((err) =>{

    })
  };

  return (
    <>
      <AsnHomeComponent
        region={region}
        selectedRegion={selectedRegion}
        handleRegion={handleRegion}
        customer={customer}
      />
    </>
  );
};

export default AsnHomeContainer;

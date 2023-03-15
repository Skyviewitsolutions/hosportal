import React, { useState } from 'react';
import AsnHeaderComponent from './AsnHeaderComponent';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { endpoints } from '../../services/endpoints,';


const AsnHeaderContainer = () => {

  const navigate = useNavigate();
  const [loading , setLoading] = useState(false);
  const users = localStorage.getItem("usersData");
  const usersData = JSON.parse(users);

  const logout = () =>{

    const logoutUrl = endpoints.supplier.logOut;
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };
    setLoading(true);
    const val = {
      UserId: usersData.UserId,
      AcceessToken: usersData.MemberToken,
    };

    axios
      .post(logoutUrl, val, { headers: headers })
      .then((res) => {
        setLoading(false);
        if (res.data.status === "Success") {
          localStorage.removeItem("usersData");
          localStorage.removeItem("selectedSupplier");
          navigate("/supplier/login");
        } else if (res.data.status === "Failed") {
          toast(res.data.statusText, { type: "error" });
        }
      })
      .catch((err) => {
        setLoading(false);
        toast("Something went wrong", { type: "error" });
      });

  } 
  return (
    <>
      <AsnHeaderComponent logout={logout} loading={loading}/>
    </>
  )
}

export default AsnHeaderContainer
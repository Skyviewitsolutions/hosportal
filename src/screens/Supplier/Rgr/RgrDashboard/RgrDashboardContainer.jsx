import React, { useState, useEffect } from "react";
import RgrDashboardComponent from "./RgrDashboardComponent";
import { useNavigate } from "react-router-dom";

const RgrDashboardContainer = () => {
  const navigate = useNavigate();
  const users = localStorage.getItem("usersData");
  const usersData = JSON.parse(users);

 
  const [data , setData] = useState([])

  const getList = (index) => {};

  const column = [
    {name : "RGR ID" ,label : "RGR ID"},
    {name : "PO NO" ,label : "PO NO"},
    {name : "Ship To" ,label : "Ship To"},
    {name : "Delivery Date" ,label : "Delivery Date"},
    {name : "Status" ,label : "Status"},
  ]


  useEffect(() => {
    if (!usersData) {
      navigate("/supplier/login");
    } else {
      getList(1);
    }
  }, []);

  return <RgrDashboardComponent  column={column} data={data}/>;
};

export default RgrDashboardContainer;

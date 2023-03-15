import React, { useState, useEffect } from "react";
import RgrPoListComponent from "./RgrPoListComponent";
import { useNavigate } from "react-router-dom";


const RgrPoListContainer = () => {

  const navigate = useNavigate();
  const users = localStorage.getItem("usersData");
  const usersData = JSON.parse(users);
 
  const [data , setData] = useState([]);

  const column = [
    {name : "All" , label : "All"},
    {name : "MOH PO No" , label : "MOH PO No"},
    {name : "Nupco PO No" , label : "Nupco PO No"},
    {name : "Total Value" , label : "Total Value"},
    {name : "PO Date" , label : "PO Date"},
    {name : "Ship To" , label : "Ship To"},
    {name : "PO Qty" , label : "PO Qty"},
    {name : "Delivered Qty" , label : "Delivered Qty"},
    {name : "Remaining Qty" , label : "Remaining Qty"},
  ];


  const getList = (index) => {};

  useEffect(() => {
    if (!usersData) {
      navigate("/supplier/login");
    } else {
      getList(1);
    }
  }, []);

  const handleCreateRgr = () =>{
    navigate("/supplier/rgr/rgr-po-list-item")
  }



  return (
    <RgrPoListComponent column={column} data={data} handleCreateRgr={handleCreateRgr} />
  )
}

export default RgrPoListContainer
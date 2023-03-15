import React, { useState } from 'react';
import CemDashboardComponent from './CemDashboardComponent';

const CemDashboardContainer = () => {
  const [data , setData] = useState([]);
  const column = [
    {name : "All" , label : "All"} ,
    {name : "Message Type" , label : "Message Type"} ,
    {name : "Tendor No" , label : "Tendor No"} ,
    {name : "PO No" , label : "PO No"} ,
    {name : "PO Item No" , label : "PO Item No"} ,
    {name : "Customer Name" , label : "Customer Name"} ,
    {name : "Material" , label : "Material"} ,
    {name : "Item Description" , label : "Item Description"} ,
    {name : "Plant" , label : "Plant"} ,
    {name : "UOM" , label : "UOM"} ,
    {name : "Ordered Qty" , label : "Ordered Qty"} ,
    {name : "Open Qty" , label : "Open Qty"} ,
    {name : "Net Order Value" , label : "Net Order Value"} ,
    {name : "Delivery Date" , label : "Delivery Date"} ,
    {name : "Tender Desc" , label : "Tender Desc"} ,
    {name : "Customer Po No" , label : "Customer Po No"} ,
    {name : "Customer Po Item" , label : "Customer Po Item"} ,
    {name : "Importance" , label : "Importance"} ,
    {name : "Created Date" , label : "Created Date"} ,
    {name : "Add Feedback" , label : "Add Feedback"} ,
  ]
  return (
    <CemDashboardComponent column={column} data={data}/>
  )
}

export default CemDashboardContainer
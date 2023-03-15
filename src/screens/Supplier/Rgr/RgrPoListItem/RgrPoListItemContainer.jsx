import React , {useState} from 'react';
import RgrPoListItemComponent from './RgrPoListItemComponent';
import { useNavigate } from 'react-router-dom';

const RgrPoListItemContainer = (props) => {

  const [data , setData] = useState([]);
  const column = [
    {name : "Select" , label : "Select"} ,
    {name : "Nupco PO" , label : "Nupco PO"} ,
    {name : "Nupco PO Item" , label : "Nupco PO Item"} ,
    {name : "Item Description" , label : "Item Description"} ,
    {name : "Nupco Gen Code" , label : "Nupco Gen Code"} ,
    {name : "Trade Code" , label : "Trade Code"} ,
    {name : "Trade Code" , label : "Trade Code"} ,
    {name : "Customer PO" , label : "Customer PO"} ,
    {name : "Customer Mat Code" , label : "Customer Mat Code"} ,
    {name : "PO Qty" , label : "PO Qty"} ,
    {name : "Open Qty" , label : "Open Qty"} ,
    {name : "UOM Qty" , label : "UOM Qty"} ,
    {name : "Net Value" , label : "Net Value"} ,
    {name : "Price Unit" , label : "Price Unit"} ,
    {name : "Currency" , label : "Currency"} ,
  ]

  const navigate = useNavigate();

  const handleNextBtn = () =>{
    navigate("/supplier/asn/rgr-po-selected-list-item")
  } 

  return (
    <RgrPoListItemComponent {...props} column={column} data={data} handleNextBtn={handleNextBtn}/>
  )
}

export default RgrPoListItemContainer
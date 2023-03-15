import React, { useState } from "react";
import RgrItemsDetailsComponent from "./RgrItemsDetailsComponent";

const RgrItemsDetailsContainer = () => {
  const [data, setData] = useState([{ Batch: "hello" }]);
  const column = [
    { name: "Delete", label: "Delete" },
    { name: "Nupco PO", label: "Nupco PO" },
    { name: "Nupco PO Item", label: "Nupco PO Item" },
    { name: "Item Description", label: "Item Description" },
    { name: "Nupco Gen Code", label: "Nupco Gen Code" },
    { name: "Open Qty", label: "Open Qty" },
    { name: "UOM", label: "UOM" },
    { name: "Price Unit", label: "Price Unit" },
    { name: "Unit Order Price", label: "Unit Order Price" },
    { name: "Net Order Price", label: "Net Order Price" },
    { name: "Net Order Value", label: "Net Order Value" },
    { name: "PO Delivery Date", label: "PO Delivery Date" },
    { name: "Currency", label: "Currency" },
    { name: "Request Qty", label: "Request Qty" },
    { name: "Supplier Invoice", label: "Supplier Invoice" },
    { name: "Item Text", label: "Item Text" },
    {
      name: "Batch",
      label: "Batch",
      options: {
        customBodyRender: (value) => {
          return (
            <>
              <button className="posltbtn" style={{color : "white"}}>Batch</button>
            </>
          );
        },
      },
    },
  ];

  return <RgrItemsDetailsComponent data={data} column={column} />;
};

export default RgrItemsDetailsContainer;

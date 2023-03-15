import React, { useState } from "react";
import RgrPoSelectedItemListComponent from "./RgrPoSelectedItemListComponent";
import { AiFillFileText } from "react-icons/ai";
import AsnSaveText from "../../../../components/AsnSaveText/AsnSaveText";


const RgrPoSelectedItemListContainer = () => {
  const [showTextPopup, setShowTextPopup] = useState(false);
  const [data, setData] = useState([{ Batch: "heloo", Text: "text" }]);
  const column = [
    { name: "Select", label: "Select" },
    { name: "Nupco PO", label: "Nupco PO" },
    { name: "Nupco PO Item", label: "Nupco PO Item" },
    { name: "Item Description", label: "Item Description" },
    { name: "Nupco Gen Code", label: "Nupco Gen Code" },
    { name: "Nupco Trade Code", label: "Nupco Trade Code" },
    { name: "MOH PO", label: "MOH PO" },
    { name: "Currency", label: "Currency" },
    { name: "PO Qty", label: "PO Qty" },
    { name: "Open Qty", label: "Open Qty" },
    { name: "Request Qty", label: "Request Qty" },
    {
      name: "Batch",
      label: "Batch",
      options: {
        customBodyRender: (value) => {
          return (
            <>
              <button className="posltbtn" style={{ color: "white" }}>
                Batch
              </button>
            </>
          );
        },
      },
    },
    {
      name: "Text",
      label: "Text",
      options: {
        customBodyRender: (value) => {
          return (
            <>
              <AiFillFileText
                size={25}
                onClick={() => setShowTextPopup(true)}
              />
            </>
          );
        },
      },
    },
  ];
  return (
    <>
      <RgrPoSelectedItemListComponent data={data} column={column} />
      <AsnSaveText
        showTextPopup={showTextPopup}
        setShowTextPopup={setShowTextPopup}
      />
    </>
  );
};

export default RgrPoSelectedItemListContainer;

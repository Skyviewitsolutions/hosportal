import React, { useState, useEffect } from "react";
import AsnPoSelectedItemListComponent from "./AsnPoSelectedItemListComponent";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./asnPoSelectItem.css";
import { AiFillFileText } from "react-icons/ai";
import AsnSaveText from "../../../../components/AsnSaveText/AsnSaveText";
import { endpoints } from "../../../../services/endpoints,";
import {toast} from "react-toastify";

const AsnPoSelectedPoItemListContainer = () => {
  const users = localStorage.getItem("usersData");
  const usersData = JSON.parse(users);
  const navigate = useNavigate();
  const [data, setData] = useState([{}]);
  const [showTextPopup, setShowTextPopup] = useState(false);
  const [loading ,setLoading] = useState(false)

  const [headersData, setheadersData] = useState({
    vendorCode: "",
    vendorName: "",
    region: "",
    stock: "",
    storage: "",
  });

  // here some of the input fields data ;
  const [supplierName ,setSupplierName] = useState("");
  const [supplierEmail ,setSupplierEmail] = useState("");
  const [headerText , setHeaderText] = useState("");
  const [deliveryDate , setDeliveryDate] = useState();
  const [deliveryTime ,setDeliveryTime]  = useState("");
  const [truckNo ,setTruckNo] = useState("");
  const [noOfTruck ,setNoOfTrucks] = useState("");
  const [palletCount , setPalletCount] = useState(0);


  const column = [
    {
      name: "All",
      label: "Select",
      options: {
        customBodyRender: (value) => {
          return (
            <>
              <input
                type="checkbox"
                name=""
                id=""
                style={{ transform: "scale(1.3)" }}
              />
            </>
          );
        },
      },
    },
    { name: "Nupco PO", label: "Nupco PO" },
    { name: "Nupco PO Item", label: "Nupco PO Item" },
    { name: "Item Description", label: "Item Description" },
    { name: "Nupco Trade Code", label: "Nupco Trade Code" },
    { name: "Customer PO", label: "Customer PO" },
    { name: "Cust Mat Code", label: "Cust Mat Code" },
    { name: "PO Delivery Date", label: "PO Delivery Date" },
    { name: "Currency", label: "Currency" },
    {
      name: "Pallet Count",
      label: "Pallet Count",
      options: {
        customBodyRender: (value) => {
          return (
            <>
              <input
                type="text"
                name=""
                id=""
                style={{ transform: "scale(1.3)" }}
                disabled={true}
                className="posltinput"
              />
            </>
          );
        },
      },
    },
    {
      name: "Storage Type",
      label: "Storage Type",
      options: {
        customBodyRender: (value) => {
          return (
            <>
              <select className="posltselect">
                <option value="">None</option>
              </select>
            </>
          );
        },
      },
    },
    {
      name: "Invoice",
      label: "Invoice",
      options: {
        customBodyRender: (value) => {
          return (
            <>
              <input
                type="text"
                name=""
                id=""
                style={{ transform: "scale(1.3)" }}
                disabled={true}
                className="posltinput"
              />
            </>
          );
        },
      },
    },
    { name: "PO Qty", label: "PO Qty" },
    { name: "Open Qty", label: "Open Qty" },
    {
      name: "Request Qty",
      label: "Request Qty",
      options: {
        customBodyRender: (value) => {
          return (
            <>
              <input
                type="text"
                name=""
                id=""
                style={{ transform: "scale(1.3)" }}
                disabled={true}
                className="posltinput"
              />
            </>
          );
        },
      },
    },
    {
      name: "Batch",
      label: "Batch",
      options: {
        customBodyRender: (value) => {
          return (
            <>
              <button className="posltbtn">Batch</button>
            </>
          );
        },
      },
    },
    {
      name: "Item Text",
      label: "Item Text",
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

  const updateheader = () => {
    const selectedStockVal = localStorage.getItem("selectedStockVal");
    const orgSelectedStockVal = JSON.parse(selectedStockVal);

    const selectedStorageLocation = localStorage.getItem(
      "selectedStorageLocation"
    );
    setheadersData({
      vendorCode: usersData.VendorCode,
      vendorName: usersData.VendorName,
      region: orgSelectedStockVal.region,
      stock: orgSelectedStockVal.selectedStock,
      storage: selectedStorageLocation,
    });
  };

  const getList = (index) => {
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };
  };

  useEffect(() => {
    if (!usersData) {
      navigate("/supplier/login");
    } else {
      getList(1);
      updateheader();
    }
  }, []);

  const handleSubmitAsn = () => {

    const url = endpoints.supplier.asn.asnSubmit;
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };
    const val = {
      id: null,
      asn_id: null,
      ship_to: null,
      cust_ship_to: null,
      cust_ship_to_name: null,
      warehouse: null,
      user_id: null,
      vendor_no: null,
      vendor_name: null,
      str_type:  null,
      plant: null,
      invoice_no: null,
      moh_po_no: null,
      moh_description: null,
      moh_generic_code: null,
      nupco_po_no: null,
      nupco_po_item: null,
      nupco_material_description: null,
      nupco_material: null,
      trade_code: null,
      open_qty: null,
      order_unit: null,
      price_unit: null,
      net_order_price: null,
      net_order_value: null,
      currency: null,
      po_delivery_date: null,
      name: null,
      email: null,
      delivery_date: null,
      delivery_time: null,
      pallet_count: null,
      total_pallet_count: null,
      truck_no: null,
      no_of_truck: 35,
      batch_no: null,
      delivery_qty: null,
      mfg_date: null,
      expiry_date: null,
      rejection_reason: null,
      rejection_date: null,
      delivered_date: null,
      delivery_region: null,
      customer_no: null,
      status: null,
      gr_status: null,
      comment: null,
      approve_date: null,
      resubmit_date: null,
      last_updated_user: null,
      header_text: null,
      item_text: null,
      po_type: null,
      inbound_note: null,
    };

    setLoading(true)

    axios.post(url , val , {headers : headers })
    .then((res) =>{
      console.log(res);
      setLoading(false);
      if(res.data.status === "Success"){
       
      }
      else if(res.data.status === "Failed"){
        setLoading(false);
        const textStatus = res.data.textStatus
        toast(textStatus ,{type : "error"})
      }
    })
    .catch((err) =>{
      console.log(err , "error")
      setLoading(false)
    })

  };

  return (
    <>
      <AsnPoSelectedItemListComponent
        headersData={headersData}
        data={data}
        column={column}
        setShowTextPopup={setShowTextPopup}
        handleSubmitAsn={handleSubmitAsn}
        isLoading={loading}
        supplierName={supplierName}
        setSupplierName={setSupplierName}
        supplierEmail={supplierEmail}
        setSupplierEmail={setSupplierEmail}
        headerText={headerText}
        setHeaderText={setHeaderText}
        deliveryDate={deliveryDate}
        setDeliveryDate={setDeliveryDate}
        deliveryTime={deliveryTime}
        setDeliveryTime={setDeliveryTime}
        truckNo={truckNo}
        setTruckNo={setTruckNo}
        noOfTruck={noOfTruck}
        setNoOfTrucks={setNoOfTrucks}
        palletCount={palletCount}
        setPalletCount={setPalletCount}
      />
      <AsnSaveText
        showTextPopup={showTextPopup}
        setShowTextPopup={setShowTextPopup}
      />
    </>
  );
};

export default AsnPoSelectedPoItemListContainer;

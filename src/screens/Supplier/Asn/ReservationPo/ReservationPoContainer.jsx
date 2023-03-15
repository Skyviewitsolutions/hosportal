import React ,  { useState, useEffect } from 'react';
import ReservationPoComponent from './ReservationPoComponent';
import { useNavigate } from "react-router-dom";

const ReservationPoContainer = () => {

  const users = localStorage.getItem("usersData");
  const usersData = JSON.parse(users);
  const navigate = useNavigate();
  const [headersData, setheadersData] = useState({
    vendorCode: "",
    vendorName: "",
    region: "",
    stock: "",
    storage: "",
  });

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

  useEffect(() => {
    if (!usersData) {
      navigate("/supplier/login");
    } else {
      // getList(1);
      updateheader();
    }
  }, []);

  return (
    <ReservationPoComponent headersData={headersData}/>
  )
}

export default ReservationPoContainer
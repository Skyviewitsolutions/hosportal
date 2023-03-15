import React, { useEffect } from "react";
import SupplierHomeComponent from "./SupplierHomeComponent";
import { useNavigate } from "react-router-dom";

const SupplierHomeContainer = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const users = localStorage.getItem("usersData");
    const usersLogedIn = JSON.parse(users);
    if (!usersLogedIn) {
      navigate("/supplier/login");
    }
  }, []);

  const openDashboard = () => {
    const selectedSupplier = localStorage.getItem("selectedSupplier");

    if (selectedSupplier === "MedicalPo") {
      navigate("/supplier/medical-Po");
    } else if (selectedSupplier === "Dashboard") {
      navigate("/supplier/dashboard");
    } else if (selectedSupplier === "MarketPlacePo") {
      navigate("/supplier/marketPlace-Po");
    } else if (selectedSupplier === "NonMedicalPo") {
      navigate("/supplier/nonMedical-Po");
    } else if (selectedSupplier === "WasfatyPo") {
      navigate("/supplier/wasfaty-Po");
    } else {
      navigate("/supplier/dashboard");
    }
  };

  return (
    <>
      <SupplierHomeComponent openDashboard={openDashboard} />
    </>
  );
};

export default SupplierHomeContainer;

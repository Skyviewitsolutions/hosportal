import React, { useEffect, useState } from "react";
import AsnSlocListComponent from "./AsnSlocListComponent";
import axios from "axios";
import { endpoints } from "../../../../services/endpoints,";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AsnSlocListContainer = () => {
  const users = localStorage.getItem("usersData");
  const usersData = JSON.parse(users);
  const navigate = useNavigate();

  const [storageLocation, setStorageLocation] = useState([]);
  const [selectedStorageLocation, setSelectedStorageLocation] = useState("");

  const getStorageLocation = () => {
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };
    const url = endpoints.supplier.asn.storageLocation;

    const selectedStockVal = localStorage.getItem("selectedStockVal");
    const orgSelectedStockVal = JSON.parse(selectedStockVal);

    const val = {
      userId: usersData.UserId,
      region: orgSelectedStockVal.region,
      customer: orgSelectedStockVal.selectedStock,
    };

    console.log(val ,"value")

    axios
      .post(url, val, { headers: headers })
      .then((res) => {
        console.log(res, "response of storage location");
        if (res.data.status === "Success") {
          const response = res.data.list;
          setStorageLocation(response);
        } else if ((res.data.status = "Failed")) {
          toast(res.data.statusText, { type: "error" });
        }
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  useEffect(() => {
    if (!usersData) {
      navigate("/supplier/login");
    } else {
      getStorageLocation();
    }
  }, []);

  const handleSubmit = () => {
    if (selectedStorageLocation) {
      localStorage.setItem("selectedStorageLocation", selectedStorageLocation);
      navigate("/supplier/asn/dashboard");
    } else {
      toast("Please select storage location", { type: "warning" });
    }
  };

  return (
    <>
      <AsnSlocListComponent
        storageLocation={storageLocation}
        handleSubmit={handleSubmit}
        selectedStorageLocation={selectedStorageLocation}
        setSelectedStorageLocation={setSelectedStorageLocation}
      />
    </>
  );
};

export default AsnSlocListContainer;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PodPdfPrintComponent from "./PodPdfPrintComponent";
import axios from "axios";
import { endpoints } from "../../../../services/endpoints,";


const PodPdfPrintContainer = () => {
  const users = localStorage.getItem("usersData");
  const usersData = JSON.parse(users);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [totalData, setTotalData] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [column, setColumn] = useState([]);
  const [loading, setLoading] = useState(false);
  const [arrayData, setArrayData] = useState([]);

  const [headersData, setheadersData] = useState({
    vendorCode: "",
    vendorName: "",
    region: "",
    stock: "",
    storage: "",
  });

  const getList = (index) => {
    const url = endpoints.supplier.asn.asnDetails;
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };

    const selectedAsnId = localStorage.getItem("selectedAsnId");

    const val = {
      userId: null,
      vendor_no: null,
      asn_id: selectedAsnId,
      plant: null,
      sloc: null,
      itemCount: 10,
      indexNumber: index,
      SearchText: null,
    };

    axios
      .post(url, val, { headers: headers })
      .then((res) => {
        setLoading(false);
        if (res.data.status === "Success") {
          const response = res.data.cl;
          setArrayData(response);
          const dat = res.data.cl[0];
          setData(dat);
          const totalDatas = res.data.recordCount;
          setTotalData(totalDatas);
          setPageCount(res.data.PageCount);
        } else if (res.data.status === "Failed") {
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

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
      updateheader();
      getList(1);
    }
  }, []);

  return (
    <PodPdfPrintComponent
      headersData={headersData}
      data={data}
      isLoading={loading}
      getList={getList}
      totalData={totalData}
      pageCount={pageCount}
      arrayData={arrayData}
    />
  );
};

export default PodPdfPrintContainer;

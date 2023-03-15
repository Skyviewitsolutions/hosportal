import React, { useState, useEffect } from "react";
import AsnDashboardComponent from "./AsnDashboardComponent";
import { FaDownload, FaPrint, FaTruck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { endpoints } from "../../../../services/endpoints,";
import axios from "axios";

const AsnDashboardContainer = () => {
  const navigate = useNavigate();
  const users = localStorage.getItem("usersData");
  const usersData = JSON.parse(users);

  const [headersData, setheadersData] = useState({
    vendorCode: "",
    vendorName: "",
    region: "",
    stock: "",
    storage: "",
  });

  const [data, setData] = useState([{ Report: "hello" }]);
  const [column, setColumn] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalData, setTotalData] = useState("");
  const [pageCount, setPageCount] = useState("");

  const handleAsnPdf = (value) => {
    localStorage.setItem("selectedAsnId", value);
    navigate("/supplier/asn/asn-pdf-print");
  };

  const handlePodPdf = (value) => {
    localStorage.setItem("selectedAsnId", value);
    navigate("/supplier/asn/pod-pdf-print");
  };

  const getList = (index) => {
    const url = endpoints.supplier.asn.asnDetails;
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };

    const val = {
      userId: null,
      vendor_no: null,
      asn_order_id: null,
      plant: null,
      sloc: null,
      itemCount: 10,
      indexNumber: index,
      SearchText: null,
    };

    setLoading(true);

    axios
      .post(url, val, { headers: headers })
      .then((res) => {
        setLoading(false)
        console.log(res , "response")
        if (res.data.status === "Success") {
          const response = res.data.cl;
          setData(response);
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

    const columns = [
      { name: "asn_id", label: "ASN ID" },
      { name: "ship_to", label: "Ship To" },
      { name: "delivery_date", label: "Delivery Date" },
      { name: "pallet_count", label: "Pallet Count" },
      { name: "status", label: "Status" , options : {
        sort : true ,
        customBodyRender : (value) =>{
          return (<>
          <span>Reserved</span>
          </>)
        }
      } },
      {
        name: "asn_id",
        label: "Report",
        options: {
          sort: true,
          customBodyRender: (value) => {
            return (
              <>
                <div
                  style={{
                    display: "flex",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      background: "#5873fe",
                      display: "flex",
                      marginRight: "8px",
                      alignItems: "center",
                      padding: "6px 8px",
                      width: "70px",
                      justifyContent: "space-between",
                      borderRadius: "4px",
                    }}
                    onClick={() => handleAsnPdf(value)}
                  >
                    <FaDownload color="white" size={16} />
                    <span style={{ color: "white" }}>/</span>
                    <FaPrint color="white" size={16} />
                  </div>
                  <div
                    style={{
                      background: "#5873fe",
                      marginLeft: "8px",
                      marginRight: "8px",
                      alignItems: "center",
                      padding: "6px 8px",
                      width: "35px",
                      justifyContent: "space-between",
                      borderRadius: "4px",
                    }}
                    onClick={() => handlePodPdf(value)}
                  >
                    <FaTruck color="white" size={16} />
                  </div>
                </div>
              </>
            );
          },
        },
      },
    ];

    setColumn(columns);
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
      getList(1);
      updateheader();
    }
  }, []);
  return (
    <>
      <AsnDashboardComponent
        data={data}
        column={column}
        headersData={headersData}
        isLoading={loading}
        getList={getList}
        totalData={totalData}
        pageCount={pageCount}
      />
    </>
  );
};

export default AsnDashboardContainer;

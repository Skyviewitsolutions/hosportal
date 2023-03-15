import React, { useState, useEffect } from "react";
import AsnCustomerPoListComponent from "./AsnCustomerPoListComponent";
import { endpoints } from "../../../../services/endpoints,";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const AsnCustomerPoListContainer = () => {

  const navigate = useNavigate();
  const users = localStorage.getItem("usersData");
  const usersData = JSON.parse(users);
  const [totalData, setTotalData] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [loading, setLoading] = useState(false);

  const [headersData, setheadersData] = useState({
    vendorCode: "",
    vendorName: "",
    region: "",
    stock: "",
    storage: "",
  });

  const [data, setData] = useState([]);
  const [column, setColumn] = useState([]);

  const getList = (index) => {
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };

    const url = endpoints.supplier.asn.customerPoList;

    const val = {
      vendor_no: usersData.VendorCode,
      plant: null,
      res_no: null,
      itemCount: 10,
      indexNumber: index,
      SearchText: null,
    };

    setLoading(true)

    axios
      .post(url, val, { headers: headers })
      .then((res) => {
        setLoading(false)
        if (res.data.status === "Success") {
          const response = res.data.DL;
          setData(response);
          const totalDatas = res.data.recordCount;
          setTotalData(totalDatas);
          setPageCount(res.data.PageCount);

          const columns = [
            {
              name: "All",
              label: "All",
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
            { name: "moh_po_no", label: "MOH PO No" },
            { name: "res_no", label: "Nupco PO No" },
            { name: "net_order_price", label: "Total Value" },
            { name: "res_date", label: "PO Date" },
            { name: "plant", label: "Plant" },
            { name: "open_qty", label: "PO Qty" },
            { name: "asn_qty", label: "Delivered Qty" },
            { name: "asn_open_qty", label: "Remaining Qty" },
          ];

          setColumn(columns);
        } else if (res.data.status === "Failed") {
          toast(res.data.statusText, { type: "warning" });
          setLoading(false)
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
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
      getList(1);
      updateheader();
    }
  }, []);

  const createInvoice = () => {
    navigate("/supplier/asn/asn-po-list-item");
  };

  const handleCreateAsn = () =>{
    navigate("/supplier/asn/asn-po-list-item");
  }

  return (
    <>
      <AsnCustomerPoListComponent
        data={data}
        column={column}
        headersData={headersData}
        isLoading={loading}
        getList={getList}
        totalData={totalData}
        pageCount={pageCount}
        handleCreateAsn={handleCreateAsn}
      />
    </>
  );
};

export default AsnCustomerPoListContainer;

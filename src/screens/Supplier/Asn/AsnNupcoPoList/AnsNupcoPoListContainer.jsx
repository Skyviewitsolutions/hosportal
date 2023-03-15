import React, { useState, useEffect } from "react";
import AsnNupcoPoListComponent from "./AsnNupcoPoListComponent";
import { useNavigate } from "react-router-dom";
import { endpoints } from "../../../../services/endpoints,";
import axios from "axios";
import { toast } from "react-toastify";

function AnsNupcoPoListContainer() {
  const users = localStorage.getItem("usersData");
  const usersData = JSON.parse(users);
  const navigate = useNavigate();
  const [totalData, setTotalData] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  const [headersData, setheadersData] = useState({
    vendorCode: "",
    vendorName: "",
    region: "",
    stock: "",
    storage: "",
  });

  const [data, setData] = useState([]);
  const [column, setColumn] = useState([]);

  const handleSelection = (val) => {
    if (selectedItem.includes(val)) {
      const index = selectedItem.indexOf(val);
      selectedItem.splice(index, 1);
    } else {
      selectedItem.push(val);
    }

  };

  const handleCreateAsn = () => {
    if (selectedItem.length > 0) {
      var arrays = "";
      for (var i = 0; i < selectedItem.length; i++) {
        arrays = arrays + "'" + selectedItem[i] + "',";
      }
      arrays = '"' + arrays + '"';

      localStorage.setItem("poNumberArray", arrays);
      navigate("/supplier/asn/asn-po-list-item");
    } else {
      toast("Please select item", { type: "warning" });
    }
  };

  const getList = (index) => {
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };

    const url = endpoints.supplier.asn.nupcoPoList;

    const val = {
      vendor_no: usersData.VendorCode,
      plant: null,
      sloc: null,
      nupco_po_no: null,
      moh_po_no: null,
      POType: null,
      itemCount: 10,
      indexNumber: index,
      SearchText: null,
    };
    setLoading(true);

    axios
      .post(url, val, { headers: headers })
      .then((res) => {
        setLoading(false);

        if (res.data.status === "Success") {
          const response = res.data.HL;
          setData(response);
          const totalDatas = res.data.recordCount;
          setTotalData(totalDatas);
          setPageCount(res.data.PageCount);

          const columns = [
            {
              name: "nupco_po_no",
              label: "All",
              options: {
                customBodyRender: (value) => {
                  return (
                    <>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        defaultChecked={
                          selectedItem.indexOf(value) !== -1 ? true : false
                        }
                        style={{ transform: "scale(1.2)" }}
                        onChange={() => {
                          handleSelection(value);
                        }}
                      />
                    </>
                  );
                },
              },
            },
            { name: "", label: "Customer Po No" },
            { name: "nupco_po_no", label: "Nupco PO No" },
            { name: "total_po_value", label: "Total Value" },
            { name: "po_date", label: "PO Date" },
            { name: "plant", label: "Plant" },
            { name: "", label: "Ship To" },
            { name: "total_po_qty", label: "PO Qty" },
            { name: "total_qty_delivered", label: "Delivered Qty" },
            { name: "total_open_qty", label: "Remaining Qty" },
          ];

          setColumn(columns);
        } else if (res.data.status === "Failed") {
          toast(res.data.statusText, { type: "warning" });
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err, "error");
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
      getList(1);
      updateheader();
    }
  }, []);

  const createInvoice = () => {
    console.log("hello world here");
    navigate("/supplier/asn/asn-po-list-item");
  };

  return (
    <>
      <AsnNupcoPoListComponent
        data={data}
        column={column}
        headersData={headersData}
        createInvoice={createInvoice}
        isLoading={loading}
        getList={getList}
        totalData={totalData}
        pageCount={pageCount}
        handleCreateAsn={handleCreateAsn}
      />
    </>
  );
}

export default AnsNupcoPoListContainer;

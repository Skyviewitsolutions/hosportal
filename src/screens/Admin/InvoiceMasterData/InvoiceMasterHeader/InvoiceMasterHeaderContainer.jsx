import React, { useState, useEffect } from "react";
import InvoiceMasterHeaderComponent from "./InvoiceMasterHeaderComponent";
import { endpoints } from "../../../../services/endpoints,";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InvoiceMasterHeaderContainer = () => {
  const usersData = localStorage.getItem("adminUsersData");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [column, setColumn] = useState([]);
  const [totalData, setTotalData] = useState("");
  const [arrayItems ,setArrayItems] = useState("");
  const [searchText, setSearchText] = useState(null);
  const [ItemsInOnePage, setItemsInOnePage] = useState(10);

  const getList = (
    index,
    selectedItems = ItemsInOnePage,
    text = searchText
  ) => {
    const usersDetails = JSON.parse(usersData);
    const url = endpoints.admin.invoiceMasterData.invoiceMasterHeader;
    const headers = { Authorization: `NUPCO=${usersDetails.MemberToken}` };

    const val = {
      HeaderId: null,
      VendorId: null,
      VendorCode: null,
      itemCount: selectedItems,
      indexNumber: index,
      SearchText: text,
      POType: null,
      IsActive: true,
    };

    setLoading(true)

    axios
      .post(url, val, { headers: headers })
      .then((res) => {
        console.log(res , "this is the another response ")
        setLoading(false);
        if (res.data.status === "Success") {
          const response = res.data.InvHeaders;
          setData(response);
          setTotalData(res.data.recordCount);
          setArrayItems(response.length)


          const columns = [
            { name: "SN", label: "#" },
            { name: "VendorCode", label: "Vendor No" },
            { name: "VendorName", label: "Vendor Name" },
            { name: "TenderCode", label: "Tender No" },
            { name: "TenderName", label: "Tender Name" },
            { name: "PayTermCode", label: "Pay Term Code" },
            { name: "Pay Term Desc", label: "Pay Term Desc" },
            { name: "PONumber", label: "Nupco PO No" },
            { name: "Currency", label: "Currency" },
            { name: "Qty_Ordered", label: "Qty Ordered" },
            { name: "Val_Ordered", label: "Val Ordered" },
            { name: "Tax_Amount", label: "TAX Amount" },
            { name: "Qty_Delivered", label: "Qty Delivered" },
            { name: "Val_Delivered", label: "Val Delivered" },
            { name: "Qty_Left", label: "Yet to Deliver Qty" },
            { name: "Val_Left", label: "Yet to Deliver Val" },
            { name: "Qty_Invoice", label: "Invoice Qty" },
            { name: "Val_Invoice", label: "Invoice Val" },
            { name: "Qty_Left_Invoice", label: "Yet to Invoice Qty" },
            { name: "Val_Left_Invoice", label: "Yet to Invoice Val" },
            { name: "POType", label: "PO Type" },
            { name: "POTypeName", label: "PO Type Name" },
            { name: "Created At", label: "Created At" },
            { name: "Updated At", label: "Updated At" },
          ];

          setColumn(columns)
        }
         else if (res.data.status === "Failed") {
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  

  useEffect(() => {
    if (usersData) {
      getList(1);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <InvoiceMasterHeaderComponent
        column={column}
        isLoading={loading}
        data={data}
        totalData={totalData}
        searchText={searchText}
        setSearchText={setSearchText}
        ItemsInOnePage={ItemsInOnePage}
        setItemsInOnePage={setItemsInOnePage}
        placeholder="Po No / Vendor No/ status"
        getList={getList}
        arrayItems={arrayItems}

      />
    </>
  );
};

export default InvoiceMasterHeaderContainer;

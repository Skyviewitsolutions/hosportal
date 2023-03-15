import React, { useEffect, useState } from "react";
import InvoiceCreateLogComponent from "./InvoiceCreateLogComponent";
import { endpoints } from "../../../../services/endpoints,";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./invoiceCreateLog.css"

const InvoiceCreateLogContainer = () => {
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
    const url = endpoints.admin.invoiceMasterData.invoiceCreateLog;
    const headers = { Authorization: `NUPCO=${usersDetails.MemberToken}` };

    const val = {
      itemCount: selectedItems,
      indexNumber: index,
      InvoiceLogId: null,
      Vendor_No: null,
      Invoice_No: null,
      Vendor_Invoice_No: null,
      SearchText: text,
      POFromDate: null,
      POToDate: null,
      SubmitFromDate: null,
      SubmitToDate: null,
    };

    setLoading(true);

    axios
      .post(url, val, { headers: headers })
      .then((res) => {
        setLoading(false);
       
        if (res.data.status === "Success") {
          const response = res.data.InvLog;
          setData(response);
          setTotalData(res.data.recordCount);
          setArrayItems(response.length)

          const columns = [
            { name: "SN", label: "#" },
            { name: "Vendor_No", label: "Vendor No" },
            { name: "Invoice_No", label: "Invoice No" },
            { name: "Doc_Date", label: "DOC Date" },
            { name: "Posting_Date", label: "Posting Date" },
            { name: "GR_Num", label: "GR Num" },
            { name: "GR_Year", label: "GR Year" },
            { name: "IR_Num", label: "IR Num" },
            {
              name: "Status",
              label: "Status",
              // options: {
              //   sort: true,
              //   customBodyRender: (value) => {
              //     return (
              //       <>
              //         {value == "1" && <h6 className="spcl">Saved</h6>}
              //         {value == "2" && <h6 className="spcl">Submitted</h6>}
              //         {value == "3" && <h6 className="spcl">Approved</h6>}
              //         {value == "4" && <h6 className="spcl">Rejected</h6>}
              //         {value == "5" && <h6 className="spcl">Rejected</h6>}
                     
              //       </>
              //     );
              //   },
              // },
            },
            { name: "Added_By", label: "Added By" },
            { name: "created_at", label: "Created At" },
            { name: "updated_at", label: "Updated At" },
          ];

          setColumn(columns);
        } else if (res.data.status === "Failed") {
          setLoading(false);
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

  console.log(totalData , "total data")
  console.log(ItemsInOnePage , "itemsInOnePages")
  console.log(arrayItems , "arrayItems")

  return (
    <>
      <InvoiceCreateLogComponent
        column={column}
        isLoading={loading}
        data={data}
        totalData={totalData}
        searchText={searchText}
        setSearchText={setSearchText}
        ItemsInOnePage={ItemsInOnePage}
        setItemsInOnePage={setItemsInOnePage}
        getList={getList}
        arrayItems={arrayItems}
        placeholder="Search here..."


      />
    </>
  );
};

export default InvoiceCreateLogContainer;

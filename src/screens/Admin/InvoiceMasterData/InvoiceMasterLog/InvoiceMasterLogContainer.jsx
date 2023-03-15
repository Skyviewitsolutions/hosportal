import React, { useEffect, useState } from "react";
import InvoiceMasterLogComponent from "./InvoiceMasterLogComponent";
import axios from "axios";
import { endpoints } from "../../../../services/endpoints,";
import { useNavigate } from "react-router-dom";

const InvoiceMasterLogContainer = () => {
  const usersData = localStorage.getItem("adminUsersData");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [column, setColumn] = useState([]);
  const [totalData, setTotalData] = useState("");
  const [searchText, setSearchText] = useState(null);
  const [ItemsInOnePage, setItemsInOnePage] = useState(10);
  const [arrayItems ,setArrayItems] = useState("");


  const getList = (
    index,
    selectedItems = ItemsInOnePage,
    text = searchText
  ) => {
    const usersDetails = JSON.parse(usersData);
    const headers = { Authorization: `NUPCO=${usersDetails.MemberToken}` };

    const url = endpoints.admin.invoiceMasterData.invoiceMasterLog;

    const val = {
      itemCount: selectedItems,
      indexNumber: index,
      Id: null,
      Vendor_No: null,
      Invoice_No: null,
      SearchText: text,
    };

    setLoading(true);

    axios
      .post(url, val, { headers: headers })
      .then((res) => {
        console.log(res, "this is the response which we are getting here ");
        setLoading(false);
        if (res.data.status === "Success") {
          const response = res.data.log;
          setData(response);
          setTotalData(res.data.recordCount);
          setArrayItems(response.length)


          const columns = [
            { name: "SN", label: "#" },
            { name: "vendor_no", label: "Vendor No" },
            { name: "fisc_year", label: "FISC Year" },
            { name: "gr_no", label: "GR No" },
            { name: "invoice_no", label: "Invoice No" },
            { name: "from_date", label: "From Date" },
            { name: "to_date", label: "To Date" },
            { name: "po_no", label: "PO No" },
            { name: "po_doc_type", label: "PO Doc Type" },
            { name: "added_by", label: "Added By" },
            { name: "status", label: "Status" },
            { name: "message", label: "Result" , options: {
              sort: true,
              customBodyRender: (value) => {
                return (
                  <>
                    <h6
                      style={{
                        width: "320px",
                        textAlign: "center",
                        width: "260px ",
                        textAlign: "center",
                        textTransform: "capitalize",
                        margin: "0px !important",
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "12px",
                        color: "#858796",
                        fontWeight: "400",
                        marginBottom: "-5px",
                      }}
                    >
                      {value}
                    </h6>
                  </>
                );
              },
            },},
            { name: "po_item", label: "Item Count" },
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


  return (
    <>
      <InvoiceMasterLogComponent column={column}
      isLoading={loading}
      data={data}
      totalData={totalData}
      searchText={searchText}
      setSearchText={setSearchText}
      ItemsInOnePage={ItemsInOnePage}
      setItemsInOnePage={setItemsInOnePage}
      placeholder="Invoice No /Vendor No /Po NO /Status"
      getList={getList} 
      arrayItems={arrayItems}
      />
    </>
  );
};

export default InvoiceMasterLogContainer;

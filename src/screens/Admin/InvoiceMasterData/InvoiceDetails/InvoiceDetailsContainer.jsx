import React, { useEffect, useState } from "react";
import InvoiceDetailscomponent from "./InvoiceDetailsComponent";
import { endpoints } from "../../../../services/endpoints,";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const InvoiceDetailsContainer = () => {

  const usersData = localStorage.getItem("adminUsersData");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [column, setColumn] = useState([]);
  const [totalData, setTotalData] = useState("");
  const [searchText , setSearchText] = useState(null)
  const [arrayItems ,setArrayItems] = useState("");
  const [ItemsInOnePage, setItemsInOnePage] = useState(10);

  const getList = (index , selectedItems =  ItemsInOnePage , text = searchText) => {
    
    const usersDetails = JSON.parse(usersData);
    const url = endpoints.admin.invoiceMasterData.invoiceDetails;
    const headers = { Authorization: `NUPCO=${usersDetails.MemberToken}` };

    const val = {
      InvDetailId: null,
      VendorCode: null,
      invoice_no: null,
      Vendor_Invoice_no: null,
      PONumber: null,
      PlantCode: null,
      SlocCode: null,
      itemCount: selectedItems,
      indexNumber: index,
      PostFromDate: null,
      PostToDate: null,
      SubmitFromDate: null,
      SubmitToDate: null,
      Status: null,
      SearchText: text,
    };

    console.log(JSON.stringify(val) ,"value")

    setLoading(true)

    axios
      .post(url, val, { headers: headers })
      .then((res) => {
        setLoading(false)
        if (res.data.status === "Success") {
          const response = res.data.InvList;
          setData(response);
          setTotalData(res.data.recordCount);
          setArrayItems(response.length)

          const columns = [
            {
              name: "SN",
              label: "#",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "30px ",
                          textAlign: "center",
                          textTransform: "capitalize",
                          margin: "0px !important",
                        }}
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
              },
            },
            { name: "invoice_no", label: "Invoice No." },
            { name: "invoice_item", label: "Invoice Item No" },
            {
              name: "vendor_invoice_no",
              label: "Vendor Invoice No",
              options: {
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
              },
            },
            { name: "total_amount", label: "Total Amount" },
            { name: "posting_date", label: "Posting Date" },
            { name: "vendor_no", label: "Vendor No" },
            { name: "vendor_name", label: "Vendor Name" },
            { name: "plant", label: "Plant" },
            { name: "sloc", label: "SLOC" },
            { name: "ship_to", label: "Ship To" },
            { name: "po_no", label: "PO No" },
            { name: "po_item", label: "PO Item" },
            { name: "material", label: "Material" },
            { name: "trade_code", label: "Trade Code" },
            { name: "customer_code", label: "Customer Code" },
            { name: "movement_type", label: "Moment Type" },
            { name: "gr_posting_date", label: "GR Posting Date" },
            { name: "gr_document_date", label: "GR Document Date" },
            { name: "batch", label: "Batch" },
            { name: "qty_in_opun", label: "Qty in Opun" },
            { name: "amount_in_lc", label: "amount_in_lc" },
            { name: "delivery_completed", label: "Delivery Completed" },
            { name: "reference", label: "Refernce" },
            { name: "fisc_year_ref_doc", label: "FISC Year REF Doc" },
            { name: "gr_num", label: "GR Num" },
            { name: "gr_item", label: "GR Item" },
            { name: "gr_year", label: "GR Year" },
            { name: "gr_qty", label: "GR Qty" },
            { name: "uom", label: "UOM" },
            { name: "currency", label: "Currency" },
            { name: "ir_num", label: "IR Num" },
            { name: "ir_qty", label: "IR Qty" },
            { name: "ir_val", label: "IR Val" },
            { name: "gr_ir_match", label: "GR IR Match" },
            { name: "created_at", label: "Created At" },
            { name: "updated_at", label: "Updated At" },
          ];

          setColumn(columns);
        } else if (res.data.status === "Failed") {
          setLoading(false)
        }
      })
      .catch((err) => {setLoading(false)});
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
      <InvoiceDetailscomponent
        column={column}
        isLoading={loading}
        data={data}
        totalData={totalData}
        searchText={searchText}
        setSearchText={setSearchText}
        ItemsInOnePage={ItemsInOnePage}
        setItemsInOnePage={setItemsInOnePage}
        arrayItems={arrayItems}
        getList={getList}
        placeholder="Search here ..."
      />
    </>
  );
};

export default InvoiceDetailsContainer;

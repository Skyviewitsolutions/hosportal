import React, { useState, useEffect } from "react";
import { endpoints } from "../../../services/endpoints,";
import SupplierInvoiceComponent from "./SupplierInvoiceComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import SupplierDashboardFilter from "../../../components/SupplierDashboardFilter/SupplierDashboardFilter";

const SupplierInvoiceContainer = () => {
  const [loading, setLoading] = useState(false);
  const users = localStorage.getItem("usersData");
  const [column, setColumn] = useState([]);
  const [data, setData] = useState([]);
  const [totalData, setTotalData] = useState("");
  const [pageCount, setPageCount] = useState("");
  const usersData = JSON.parse(users);
  const [searchText, setSearchText] = useState(null);
  const navigate = useNavigate();

  const url = endpoints.supplier.invoiceList;

  const [postingFrom, setPostingFrom] = useState(null);
  const [postingTo, setPostingTo] = useState(null);
  const [submittedFrom, setSubmittedFrom] = useState(null);
  const [submittedTo, setSubmittedTo] = useState(null);
  const [invoiceId, setInvoiceId] = useState(null);
  const [vendorInvoiceNo, setVendorInvoiceNo] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const updateDate = (value) => {
    if (value) {
      let newValue = value.replace(/[^0-9]/g, "").replace(/(\..*)\./g, "$1");

      const updatedValue = `${newValue[6]}${newValue[7]}/${newValue[4]}${newValue[5]}/${newValue[0]}${newValue[1]}${newValue[2]}${newValue[3]}`;
      return updatedValue;
    } else {
      return null;
    }
  };

  const invoiceList = (index, Text = searchText) => {
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };

    const val = {
      InvDetailId: null,
      HeaderId: null,
      PONumber: null,
      VendorId: null,
      VendorCode: usersData.VendorCode,
      // VendorCode: 400027,
      PlantId: null,
      PlantCode: null,
      SlocId: null,
      SlocCode: null,
      invoice_no: invoiceId == "" ? null : invoiceId,
      Vendor_Invoice_no: vendorInvoiceNo == "" ? null : vendorInvoiceNo,
      itemCount: 20,
      indexNumber: index,
      PostFromDate: updateDate(postingFrom),
      PostToDate: updateDate(postingTo),
      SubmitFromDate: updateDate(submittedFrom),
      SubmitToDate: updateDate(submittedTo),
      SearchText: Text,
      Status : selectedStatus == "" ? null : selectedStatus,
      IsActive: true,
    };

    setLoading(true);

    axios
      .post(url, val, { headers: headers })
      .then((res) => {
        setLoading(false);
        if (res.data.status === "Success") {
          const response = res.data.InvList;
          setData(response);
          const totalDatas = res.data.recordCount;
          setTotalData(totalDatas);
          setPageCount(res.data.PageCount);

          const columns = [
            {
              name: "invoice_no",
              label: "Invoice No",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "70px ",
                          textAlign: "center",
                          textTransform: "capitalize",
                          margin : "auto"
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
              },
            },
            {
              name: "po_no",
              label: "PO NO",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "70px ",
                          textAlign: "center",
                          textTransform: "capitalize",
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
              },
            },
            {
              name: "amount_in_lc",
              label: "TaxAmount",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "70px ",
                          textAlign: "center",
                          textTransform: "capitalize",
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
              },
            },
            {
              name: "total_tax_amount",
              label: "Total VAT Amount",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "120px ",
                          textAlign: "center",
                          textTransform: "capitalize",
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
              },
            },
            {
              name: "total_amount",
              label: "Total Amount",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "90px ",
                          textAlign: "center",
                          textTransform: "capitalize",
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
              },
            },
            {
              name: "vendor_invoice_no",
              label: "Vendor Invoice No",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "110px ",
                          textAlign: "center",
                          textTransform: "capitalize",
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
              },
            },
            {
              name: "payment_date",
              label: "Payment Date",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "100px ",
                          textAlign: "center",
                          textTransform: "capitalize",
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
              },
            },
            {
              name: "created_at",
              label: "Submitted Date",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "100px ",
                          textAlign: "center",
                          textTransform: "capitalize",
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
              },
            },
            {
              name: "posting_date",
              label: "Updated Date",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "100px ",
                          textAlign: "center",
                          textTransform: "capitalize",
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
              },
            },
            {
              name: "status",
              label: "Status",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "70px ",
                          textAlign: "center",
                          textTransform: "capitalize",
                         
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
                customBodyRender: (value) => {
                  return (
                    <>
                      {value == "1" && (
                        <span
                          style={{
                            padding: "5px 8px",
                            borderRadius: "4px",
                            color: "#67c3d0",
                            background: "#f0f8fa",
                            fontSize: "12px",
                            fontWeight: "bold",
                          }}
                        >
                          Saved
                        </span>
                      )}
                      {value == "2" && (
                        <span
                          style={{
                            padding: "5px 8px",
                            borderRadius: "4px",
                            color: "#f2c600",
                            background: "#f0f8fa",
                            fontSize: "12px",
                            fontWeight: "bold",
                          }}
                        >
                          Submitted
                        </span>
                      )}
                      {value == "3" && (
                        <span
                          style={{
                            padding: "5px 8px",
                            borderRadius: "4px",
                            color: "#f2c600",
                            background: "#f0f8fa",
                            fontSize: "12px",
                            fontWeight: "bold",
                          }}
                        >
                          Approved
                        </span>
                      )}
                      {value == "4" && (
                        <span
                          style={{
                            padding: "5px 8px",
                            borderRadius: "4px",
                            color: "#f2c600",
                            background: "#f0f8fa",
                            fontSize: "12px",
                            fontWeight: "bold",
                          }}
                        >
                          Rejected
                        </span>
                      )}
                    </>
                  );
                },
              },
            },
          ];

          setColumn(columns);
        } else if (res.data.status === "Failed") {
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err, "this is the error");
      });
  };

  useEffect(() => {
    const usersLogedIn = JSON.parse(users);
    if (!usersLogedIn) {
      navigate("/supplier/login");
    } else {
      invoiceList(1);
    }
  }, []);

  const handleSearch = () => {
    invoiceList(1, searchText);
  };

  useEffect(() => {
    if (!searchText) {
      invoiceList(1);
    }
  }, [searchText]);

  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const showFilterModal = () => {
    setShowFilterPopup(true);
  };

  const cutFilterModal = () => {
    setShowFilterPopup(false);
  };

  const rowClicked = (val) => {
    const InvoiceNumber = val[0];

    localStorage.setItem(
      "selectedInvoiceNumber",
      JSON.stringify(InvoiceNumber)
    );

    navigate("/supplier/invoice-details");
  };

  return (
    <>
      <SupplierInvoiceComponent
        column={column}
        data={data}
        isLoading={loading}
        getList={invoiceList}
        totalData={totalData}
        handleSearch={handleSearch}
        inputValue={searchText}
        setInputValue={setSearchText}
        showFilterModal={showFilterModal}
        rowClicked={rowClicked}
        pageCount={pageCount}
      />

      <SupplierDashboardFilter
        show={showFilterPopup}
        cutFilterModal={cutFilterModal}
        postingFrom={postingFrom}
        postingTo={postingTo}
        setPostingFrom={setPostingFrom}
        setPostingTo={setPostingTo}
        submittedFrom={submittedFrom}
        submittedTo={submittedTo}
        setSubmittedFrom={setSubmittedFrom}
        setSubmittedTo={setSubmittedTo}
        invoiceId={invoiceId}
        setInvoiceId={setInvoiceId}
        vendorInvoiceNo={vendorInvoiceNo}
        selectedStatus={selectedStatus}
        setVendorInvoiceNo={setVendorInvoiceNo}
        setSelectedStatus={setSelectedStatus}
        filterList={invoiceList}
      />
    </>
  );
};

export default SupplierInvoiceContainer;

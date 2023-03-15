import React, { useState, useEffect } from "react";
import SupplierInvoiceListItemComponent from "./SupplierInvoiceListItemComponent";
import { useLocation } from "react-router-dom";
import { endpoints } from "../../../services/endpoints,";
import axios from "axios";
import SupplierInvoiceListItemFilter from "../../../components/SupplierInvoiceListItemFilter/SupplierInvoiceListItemFilter";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SupplierInvoiceListItemContainer = () => {
  const navigate = useNavigate();
  const [column, setColumn] = useState([]);
  const [data, setData] = useState([]);
  const [groupBy, setGroupBy] = useState(null);
  const users = localStorage.getItem("usersData");
  const [loading, setLoading] = useState(false);
  const [totalData, setTotalData] = useState("");
  const [pageCount, setPageCount] = useState("");

  const [selectedPo, setSelectedPo] = useState("");

  const usersData = JSON.parse(users);
  var selected_Po = localStorage.getItem("selectedPo");
  selected_Po = JSON.parse(selected_Po);

  const [poItemFrom, setPoItemFrom] = useState(null);
  const [poItemTo, setPoItemTo] = useState(null);
  const [materialFrom, setMaterialFrom] = useState(null);
  const [materialTo, setMaterialTo] = useState(null);
  const [customerMaterialFrom, setCustomerMaterialFrom] = useState(null);
  const [customerMaterialTo, setCustomerMaterialTo] = useState(null);
  const [materialDocumentFrom, setMaterialDocumentFrom] = useState(null);
  const [materialDocumentTo, setMaterialDocumentTo] = useState(null);
  const [asnFrom, setAsnFrom] = useState(null);
  const [asnTo, setAsnTo] = useState(null);

  const handleChange = (e, val) => {
    setSelectedPo(val);
  };

  const getList = (index) => {
    const url = endpoints.supplier.invoiceListItem;
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };

    const val = {
      InvDetailId: null,
      HeaderId: null,
      PONumber: selected_Po,
      VendorId: null,
      VendorCode: usersData.VendorCode,
      PlantId: null,
      PlantCode: null,
      SlocId: null,
      SlocCode: null,
      itemCount: 20,
      indexNumber: index,
      SearchText: null,
      GroupBy: groupBy,
      poItemFrom: poItemFrom,
      poItemTo: poItemTo,
      materialFrom: materialFrom,
      materialTo: materialTo,
      CustMaterialFrom: customerMaterialFrom,
      CustMaterialTo: customerMaterialTo,
      MaterialDocFrom: materialDocumentFrom,
      MaterialDocTo: materialDocumentTo,
      ASNFrom: asnFrom,
      ASNTo: asnTo,
      IsActive: true,
    };

    setLoading(true);

    axios
      .post(url, val, { headers: headers })
      .then((res) => {
        setLoading(false);
        console.log(res , "responsees");
        if (res.data.status === "Success") {
          const response = res.data.InvDetails;
          setData(response);

          const totalDatas = res.data.recordCount;
          setTotalData(totalDatas);
          setPageCount(res.data.PageCount);

          const columns = [
            {
              name: "PONumber",
              label: "Select",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "70px ",
                          textAlign: "left",
                          textTransform: "capitalize",
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
                customBodyRender: (value, i) => {
                  const index = i.rowIndex;
                  const statuss = response[index].Enabled;

                  return (
                    <>
                      <input
                        type="radio"
                        name="value"
                        disabled={!statuss ? true : false}
                        onChange={(e) => handleChange(e, value)}
                      />
                    </>
                  );
                },
              },
            },
            {
              name: "GR_Num",
              label: "Material Document",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "120px ",
                          textAlign: "left",
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
              name: "GR_Year",
              label: "Document Year",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "100px ",
                          textAlign: "left",
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
              name: "PONumber",
              label: "PO #",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "60px ",
                          textAlign: "left",
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
              name: "POItem",
              label: "PO Item",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "70px ",
                          textAlign: "left",
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
              name: "Material",
              label: "Material",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "70px ",
                          textAlign: "left",
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
              name: "CustMaterialCode",
              label: "Customer Material",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "120px ",
                          textAlign: "left",
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
              name: "MaterialDisc",
              label: "Description",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "70px ",
                          textAlign: "left",
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
              name: "QtyOrdered",
              label: "PO Qty",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "70px ",
                          textAlign: "left",
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
              name: "GR_Num",
              label: "GR Num",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "60px ",
                          textAlign: "left",
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
              name: "GR_Qty",
              label: "GR Qty",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "60px ",
                          textAlign: "left",
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
              name: "GR_Val",
              label: "GR Value",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "60px ",
                          textAlign: "left",
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
              name: "TaxAmount",
              label: "VAT Amount",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "80px ",
                          textAlign: "left",
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
              name: "TaxAmount",
              label: "Total Amount",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "90px ",
                          textAlign: "left",
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
              name: "VatPercent",
              label: "VAT Percentage",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "100px ",
                          textAlign: "left",
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
              name: "Supplier_Ref",
              label: "Supplier Ref.",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "100px ",
                          textAlign: "left",
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
              name: "IR_Qty",
              label: "IR Qty",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "60px ",
                          textAlign: "left",
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
              name: "IR_Value",
              label: "IR Value",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "60px ",
                          textAlign: "left",
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
            
          ];

          setColumn(columns);
        } else if (res.data.status === "Failed") {
        }
      })
      .catch((err) => {
        console.log(err, "invoice list error");
        setLoading(false);
      });
  };

  useEffect(() => {
    const usersLogedIn = JSON.parse(users);
    if (!usersLogedIn) {
      navigate("/supplier/login");
    } else {
      getList(1);
    }
  }, [groupBy]);

  const [showFilterPopup, setShowFilterPopup] = useState(false);
  const showFilterModal = () => {
    setShowFilterPopup(true);
  };

  const cutFilterModal = () => {
    setShowFilterPopup(false);
  };

  const handleNextBtn = () => {
    if (selectedPo) {
      localStorage.setItem("choosedPo", JSON.parse(selectedPo));
      localStorage.removeItem("selectedInvoiceNumber");
      navigate("/supplier/invoice-details");
    } else {
      toast("Please select one item", { type: "warning" });
    }
  };

  return (
    <>
      <SupplierInvoiceListItemComponent
        data={data}
        column={column}
        showFilterModal={showFilterModal}
        groupBy={groupBy}
        setGroupBy={setGroupBy}
        handleNextBtn={handleNextBtn}
        totalData={totalData}
        isLoading={loading}
        pageCount={pageCount}
      />
      <SupplierInvoiceListItemFilter
        show={showFilterPopup}
        cutFilterModal={cutFilterModal}
        poItemFrom={poItemFrom}
        setPoItemFrom={setPoItemFrom}
        poItemTo={poItemTo}
        setPoItemTo={setPoItemTo}
        materialFrom={materialFrom}
        setMaterialFrom={setMaterialFrom}
        materialTo={materialTo}
        setMaterialTo={setMaterialTo}
        customerMaterialFrom={customerMaterialFrom}
        setCustomerMaterialFrom={setCustomerMaterialFrom}
        customerMaterialTo={customerMaterialTo}
        setCustomerMaterialTo={setCustomerMaterialTo}
        materialDocumentFrom={materialDocumentFrom}
        setMaterialDocumentFrom={setMaterialDocumentFrom}
        materialDocumentTo={materialDocumentTo}
        setMaterialDocumentTo={setMaterialDocumentTo}
        asnFrom={asnFrom}
        setAsnFrom={setAsnFrom}
        asnTo={asnTo}
        setAsnTo={setAsnTo}
        filterData={getList}
        groupBy={groupBy}
        setGroupBy={setGroupBy}
      />
    </>
  );
};

export default SupplierInvoiceListItemContainer;

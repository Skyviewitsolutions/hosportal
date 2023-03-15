import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { endpoints } from "../../../services/endpoints,";
import SupplierInvoiceDetailsComponent from "./SupplierInvoiceDetailsComponent";
import { useNavigate } from "react-router-dom";
import RejectedReasonModal from "../../../components/RejectedReason/RejectedReasonModal";

const SupplierInvoiceDetailsContainer = () => {
  const navigate = useNavigate();
  const [column, setColumn] = useState([]);
  const [data, setData] = useState([]);
  const users = localStorage.getItem("usersData");
  const usersData = JSON.parse(users);

  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState({});
  const [totalData, setTotalData] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [docDate, setDocDate] = useState("");
  const [vendorInvoice, setVendorInvoice] = useState(item.vendor_invoice_no);
  const [selectedInvoiceNumber, setSelectedInvoiceNumber] = useState("");
  const [selectedPoNumber, setSelectedPoNumber] = useState("");
  const [rejectedReasonText, setRejectedReasonText] = useState("");

  const [supplierInvoicePdf, setUpplierInvoicePdf] = useState("");
  const [podPdf, setPodPdf] = useState("");
  const [additionalDocPdf, setAdditionalDocPdf] = useState("");

  const [itemSubmitted, setItemSubmitted] = useState(false);

  const [savedId, setSavedId] = useState(null);

  const getData = () => {
    const selectedInvoice = localStorage.getItem("selectedInvoiceNumber");

    if (selectedInvoice) {
      setSelectedInvoiceNumber(selectedInvoice);
    } else {
      setSelectedInvoiceNumber(null);
    }

    const selectedPo = localStorage.getItem("choosedPo");
    setSelectedPoNumber(selectedPo);

    const url = endpoints.supplier.invoiceList;
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };

    const val = selectedInvoice
      ? {
          InvDetailId: null,
          HeaderId: null,
          PONumber: null,
          VendorId: null,
          VendorCode: usersData.VendorCode,
          PlantId: null,
          PlantCode: null,
          SlocId: null,
          SlocCode: null,
          invoice_no: JSON.parse(selectedInvoice),
          Vendor_Invoice_no: null,
          itemCount: 20,
          indexNumber: 1,
          PostFromDate: null,
          PostToDate: null,
          SubmitFromDate: null,
          SubmitToDate: null,
          SearchText: null,
          IsActive: true,
        }
      : {
          InvDetailId: null,
          HeaderId: null,
          PONumber: selectedPo,
          VendorId: null,
          VendorCode: usersData.VendorCode,
          PlantId: null,
          PlantCode: null,
          SlocId: null,
          SlocCode: null,
          invoice_no: null,
          Vendor_Invoice_no: null,
          itemCount: 20,
          indexNumber: 1,
          PostFromDate: null,
          PostToDate: null,
          SubmitFromDate: null,
          SubmitToDate: null,
          SearchText: null,
          IsActive: true,
        };

    setLoading(true);

    axios
      .post(url, val, { headers: headers })
      .then((res) => {
        setLoading(false);

        if (res.data.status === "Success") {
          const response = res.data.InvList[0];

          setVendorInvoice(response.vendor_invoice_no);
          setItem(response);
          setRejectedReasonText(response.rejection_reason);
          setData(res.data.InvList);
          const totalDatas = res.data.recordCount;
          setTotalData(totalDatas);
          setPageCount(res.data.PageCount);
          setSelectedInvoiceNumber(response.invoice_no);

          const columns = [
            {
              name: "po_no",
              label: "PO #",
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
              name: "po_item",
              label: "Po Item",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "50px ",
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
              name: "material",
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
              name: "customer_material_code",
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
              name: "material_desc",
              label: "Description",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "200px ",
                          textAlign: "left",
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
              name: "",
              label: "Po Qty",
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
              name: "gr_num",
              label: "GR Num",
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
              name: "gr_qty",
              label: "GR Qty",
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
              name: "gr_val",
              label: "GR Value",
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
              name: "tax_amount",
              label: "VAT Amount",
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
              name: "total_amount",
              label: "Total Amount",
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
              name: "vat_percentage",
              label: "VAT Percentage",
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
              name: "supplier_ref",
              label: "Supplier Ref.",
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
              name: "ir_qty",
              label: "IR Qty",
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
              name: "ir_val",
              label: "IR Value",
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
              name: "currency",
              label: "Currency",
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
              name: "ir_num",
              label: "IR Num",
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
              name: "asn_ref",
              label: "ASN Ref.",
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
              name: "updated_at",
              label: "Delivered Date",
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
              name: "invoice_text",
              label: "Invoice Text",
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
              name: "payment_date",
              label: "Payment Date",
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
          ];

          setColumn(columns);
        } else if (res.data.status === "Failed") {
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const usersLogedIn = JSON.parse(users);
    if (!usersLogedIn) {
      navigate("/supplier/login");
    } else {
      getData();
    }
  }, []);

  const saveList = () => {
    const saveUrl = endpoints.supplier.saveList;
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };

    if (!podPdf) {
      toast("Please selecte pod pdf", { type: "warning" });
    }
    // else if(!additionalDocPdf){
    //   toast("Please select additional document" , { type : "warning"})
    // }
    else if (!supplierInvoicePdf) {
      toast("Please select supplier invoice pdf", { type: "warning" });
    } else if (vendorInvoice.length < 2) {
      toast("Please enter vendor invoice number");
    } else {
      const val = {
        id: savedId,
        plant: item.plant,
        sloc: item.sloc,
        Vendor_No: item.vendor_no,
        Invoice_No: item.invoice_no,
        invoice_original_attch: "",
        invoice_attch: supplierInvoicePdf,
        pod_original_attach: "",
        pod_attach: podPdf,
        additional_doc_original_attach: "",
        additional_doc_attach: additionalDocPdf,
        inv_source: "hos",
      };

      setLoading(true);

      axios
        .post(saveUrl, val, { headers: headers })
        .then((res) => {
          console.log(res, "responmse");
          if (res.data.status === "Success") {
            toast(res.data.statusText, { type: "success" });
            navigate("/supplier/dashboard");
          } else if (res.data.status === "Failed") {
            toast(res.data.statusText, { type: "error" });
          }
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    const urll = endpoints.supplier.getSavedInvoiceList;
    if (usersData) {
      const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };

      setLoading(true);

      const val = {
        Vendor_No: item.vendor_no,
        Invoice_No: item.invoice_no,
        itemCount: 1,
        indexNumber: 1,
        IsActive: true,
      };

      axios
        .post(urll, val, { headers: headers })
        .then((res) => {
          setLoading(false);

          if (res.data.status === "Success") {
            const response = res.data.InvHeaders[0];
            setUpplierInvoicePdf(response.invoice_attch);
            setPodPdf(response.pod_attach);
            setAdditionalDocPdf(response.additional_doc_attach);

            setSavedId(response.id);
          } else if (res.data.status == "Failed") {
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    
      }
  }, []);

  const submitList = () => {
    const urll = endpoints.supplier.submitList;

    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };

    if (!podPdf) {
      toast("Please selecte pod pdf", { type: "warning" });
    }
    // else if(!additionalDocPdf){
    //   toast("Please select additional document" , { type : "warning"})
    // }
    else if (!supplierInvoicePdf) {
      toast("Please select supplier invoice pdf", { type: "warning" });
    } else if (vendorInvoice.length < 2) {
      toast("Please enter vendor invoice number");
    } else {
      setLoading(true);

      const val = {
        InvoiceLogId: null,
        Vendor_No: item.vendor_no,
        Invoice_No: item.invoice_no,
        Vendor_Invoice_No: item.vendor_invoice_no,
        IR_Num: item.ir_num,
        Doc_Date: item.doc_date,
        Posting_Date: item.posting_date,
        GR_Num: item.gr_num,
        GR_Year: item.gr_year,
        Status: 2,
        Message: "Date Submitted",
        Added_By: usersData.UserId,
        UserId: usersData.UserId,
      };

      axios
        .post(urll, val, { headers: headers })
        .then((res) => {
          setLoading(false);
          if (res.data.status === "Success") {
            toast(res.data.statusText, { type: "success" });
            navigate("/supplier/dashboard");
          } else if (res.data.status === "Failed") {
            toast(res.data.statusText, { type: "error" });
          }
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  };

  const [showReasonPopup, setshowReasonPopup] = useState(false);

  const handleRejectedReason = () => {
    setshowReasonPopup(true);
  };

  const hideRejectedModal = () => {
    setshowReasonPopup(false);
  };

  return (
    <>
      <SupplierInvoiceDetailsComponent
        column={column}
        data={data}
        item={item}
        docDate={docDate}
        setDocDate={setDocDate}
        isLoading={loading}
        vendorInvoice={vendorInvoice}
        setVendorInvoice={setVendorInvoice}
        totalData={totalData}
        pageCount={pageCount}
        selectedInvoiceNumber={selectedInvoiceNumber}
        saveList={saveList}
        handleRejectedReason={handleRejectedReason}
        submitList={submitList}
        supplierInvoicePdf={supplierInvoicePdf}
        podPdf={podPdf}
        additionalDocPdf={additionalDocPdf}
        setUpplierInvoicePdf={setUpplierInvoicePdf}
        setPodPdf={setPodPdf}
        setAdditionalDocPdf={setAdditionalDocPdf}
      />

      <RejectedReasonModal
        hideRejectedModal={hideRejectedModal}
        showReasonPopup={showReasonPopup}
        reasonText={rejectedReasonText}
      />
    </>
  );
};

export default SupplierInvoiceDetailsContainer;

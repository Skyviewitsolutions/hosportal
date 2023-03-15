import React, { useEffect, useState } from "react";
import "./supplierInvoiceDetailss.css";
import StepProgressBar, { StepStates } from "react-step-progress";
import "react-step-progress/dist/index.css";
import SupplierDataTableContainer from "../SupplierDataTable/SupplierDataTableContainer";
import SupplierInvoiceListDataTable from "../SupplierInvoiceListDataTable/SupplierInvoiceListDataTable.";
import { endpoints } from "../../services/endpoints,";
import axios from "axios";

const Steeps = () => {
  <div className="">
    <h2>bhola gupta</h2>
  </div>;
};

const SupplierInvoiceDetails = (props) => {
  const {
    column,
    data,
    item,
    docDate,
    setDocDate,
    isLoading,
    vendorInvoice,
    setVendorInvoice,
    selectedInvoiceNumber,
    selectedPoNumber,
    supplierInvoicePdf,
    podPdf,
    handleRejectedReason,
    additionalDocPdf,
    setUpplierInvoicePdf,
    setPodPdf,
    setAdditionalDocPdf,
  } = props;

  const selectedNum = selectedInvoiceNumber
    ? selectedInvoiceNumber.replaceAll('"', "")
    : selectedPoNumber;

  const [steps, setSteps] = useState(-2);

  const status = parseInt(item.status);

  useEffect(() => {
    if (status == 1) {
      setSteps(1);
    } else if (status == 2) {
      setSteps(2);
    } else if (status == 3) {
      setSteps(3);
    } else if (status == 4) {
      setSteps(3);
    } else if (status == 5) {
      setSteps(0);
    } else if (status == 0) {
      setSteps(0);
    }
  }, [item]);

  const [formEditable, setFormEditable] = useState(true);

  useEffect(() => {
    if (item.status == "1") {
      setFormEditable(true);
    } else if (item.status == "0") {
      setFormEditable(true);
    } else if (item.status == "4") {
      setFormEditable(true);
    } else {
      setFormEditable(false);
    }
  }, [item]);

  return (
    <>
      <div className="spInvDtls">
        <div className="spInDthead">
          <h5>Invoice {selectedNum} Details</h5>
        </div>
        <div className="stepPrBar">
        {status === 4 ? (
          <div className="_53Ji7 stepWrapper" >
            <ul className="_1Lo2h ">
              <li className="_2Jtxm _2ZUAI stepProgress">
                <span className="_2JvrO">
                  <svg
                    width="1.5rem"
                    viewBox="0 0 13 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 3.5L4.5 7.5L12 1"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
                <div className="_1hzhf ">SAVED</div>
              </li>
              <li className="_2Jtxm _2ZUAI stepProgress">
                <span className="_2JvrO">
                  <svg
                    width="1.5rem"
                    viewBox="0 0 13 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 3.5L4.5 7.5L12 1"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
                <div className="_1hzhf ">SUBMITTED FOR APPROVAL</div>
              </li>
              <li className="_2Jtxm _35Ago stepProgress" >
                <span className="_2kL0S" style={{background : "red"}}>X</span>
                <div className="_1hzhf ">REJECTED</div>
              </li>
              <li className="_2Jtxm stepProgress">
                <span className="_2kL0S">4</span>
                <div className="_1hzhf ">PROCESSING</div>
              </li>
              <li className="_2Jtxm stepProgress">
                <span className="_2kL0S">5</span>
                <div className="_1hzhf ">PAYMENT PROCESS</div>
              </li>
            </ul>
            <div className="_2_g61 " />
            <div className="_3uApM "></div>
          </div>
        ) : 
         
            steps > -1 && (
              <StepProgressBar
                startingStep={steps}
                wrapperClass="stepWrapper"
                steps={[
                  {
                    name: "Step 1",
                    label: "SAVED",
                  },
                  {
                    name: "Step 2",
                    label: "SUBMITTED FOR APPROVAL",
                  },
                  {
                    name: "Step 3",
                    label: status == "4" ? "REJECTED" : "APPROVED",
                  },
                  {
                    name: "Step 4",
                    label: "PROCESSING",
                  },
                  {
                    name: "Step 5",
                    label: "PAYMENT PROCESS",
                  },
                ]}
              ></StepProgressBar>
            )}
          </div>
        

        {/* here we are adding the table part */}
        <div className="sup2ndBox">
          <div className="sup2ndrow">
            <div className="sup2ndrow1">
              <h6>Vendor</h6>: <span> {item.vendor_no}</span>
            </div>
            <div className="sup2ndrow1">
              <h6>Vendor Name</h6>: <span> {item.vendor_name}</span>
            </div>
            <div className="sup2ndrow1">
              <h6>Plant Name</h6>: <span> {item.plant}</span>
            </div>
            <div className="sup2ndrow1">
              <h6>Customer</h6>: <span> {item.customer_code}</span>
            </div>
            <div className="sup2ndrow1">
              <h6>Document Date</h6>:
              {formEditable ? (
                <input
                  type="date"
                  value={docDate}
                  onChange={(e) => setDocDate(e.target.value)}
                />
              ) : (
                <span>{docDate}</span>
              )}
            </div>
          </div>

          <div className="sup2ndrow" style={{ width: "30% !important" }}>
            <div className="sup2ndrow1">
              <h6>
                Vendor Invoice No{" "}
                <span
                  style={{ color: "red", marginLeft: "-0px", fontSize: "16px" }}
                >
                  *
                </span>
              </h6>
              :
              {formEditable ? (
                <input
                  type="text"
                  value={vendorInvoice}
                  onChange={(e) => setVendorInvoice(e.target.value)}
                />
              ) : (
                <span>{vendorInvoice}</span>
              )}
            </div>
            <div className="sup2ndrow1">
              <h6>
                Net Amount{" "}
                <span
                  style={{ color: "red", marginLeft: "-0px", fontSize: "16px" }}
                >
                  *
                </span>
              </h6>
              :<span>{item.total_amount - item.tax_amount}</span>
            </div>
            <div className="sup2ndrow1">
              <h6>
                Total Vat Amount{" "}
                <span
                  style={{ color: "red", marginLeft: "-0px", fontSize: "16px" }}
                >
                  *
                </span>
              </h6>
              :<span> {item.total_tax_amount}</span>
            </div>
            <div className="sup2ndrow1">
              <h6>
                Total Amount{" "}
                <span
                  style={{ color: "red", marginLeft: "-0px", fontSize: "16px" }}
                >
                  *
                </span>
              </h6>
              :<span> {item.total_amount}</span>
            </div>
            <div className="sup2ndrow1">
              <h6>Posting Date </h6>:
              {item.status == "1" ? (
                <input type="text" value={item.posting_date} readOnly={true} />
              ) : (
                <span>{item.posting_date}</span>
              )}
            </div>
          </div>

          <div className="sup2ndroww" style={{ width: "37% !important" }}>
            <div className="sup2ndrow1">
              <h6>Status</h6>:{item.status == "1" && <span>SAVED</span>}
              {item.status == "2" && <span>SUBMITTED</span>}
              {item.status == "3" && <span>APPROVED</span>}
              {item.status == "4" && <span>REJECTED</span>}
            </div>
            <div className="sup2ndrow1">
              <h6>
                Supplier Invoice{" "}
                <span
                  style={{ color: "red", marginLeft: "-0px", fontSize: "16px" }}
                >
                  *
                </span>
              </h6>
              :
              <input
                type="file"
                name=""
                id="supInvoice"
                accept="application/pdf"
                onChange={(e) => setUpplierInvoicePdf(e.target.files[0].name)}
                style={{ display: "none" }}
              />
              {formEditable ? (
                <label htmlFor="supInvoice">
                  <h6>choose file</h6>
                  {supplierInvoicePdf ? (
                    <span>{supplierInvoicePdf}</span>
                  ) : (
                    <span> No file choosen</span>
                  )}
                </label>
              ) : (
                <div className="filessss">
                  <span>{supplierInvoicePdf}</span>
                </div>
              )}
            </div>
            <div className="sup2ndrow1">
              <h6>
                POD (Delivery Note){" "}
                <span
                  style={{ color: "red", marginLeft: "-0px", fontSize: "16px" }}
                >
                  *
                </span>
              </h6>
              :{" "}
              <input
                type="file"
                name=""
                id="pod"
                accept="application/pdf"
                onChange={(e) => setPodPdf(e.target.files[0].name)}
                style={{ display: "none" }}
              />
              {formEditable ? (
                <label htmlFor="pod">
                  <h6>choose file</h6>
                  {podPdf ? (
                    <span>{podPdf}</span>
                  ) : (
                    <span> No file choosen</span>
                  )}
                </label>
              ) : (
                <div className="filessss">
                  <span>{podPdf}</span>
                </div>
              )}
            </div>
            <div className="sup2ndrow1">
              <h6>Additional Document </h6>:{" "}
              <input
                type="file"
                name=""
                id="addDoc"
                accept="application/pdf"
                onChange={(e) => setAdditionalDocPdf(e.target.files[0].name)}
                style={{ display: "none" }}
              />
              {formEditable ? (
                <label htmlFor="addDoc">
                  <h6>choose file</h6>
                  {additionalDocPdf ? (
                    <span>{additionalDocPdf}</span>
                  ) : (
                    <span> No file choosen</span>
                  )}
                </label>
              ) : (
                <div className="filessss">
                  <span>{supplierInvoicePdf}</span>
                </div>
              )}
            </div>

            {item.status == "4" && (
              <button className="rejectBtn" onClick={handleRejectedReason}>
                Reason
              </button>
            )}
          </div>
        </div>
        {/* adding the datatables */}

        <div className="supDtaTabless">
          <SupplierInvoiceListDataTable
            column={column}
            data={data}
            showNextBtn={true}
            {...props}
            isLoading={isLoading}
            status={item.status}
          />
        </div>
      </div>
    </>
  );
};

export default SupplierInvoiceDetails;

import React, { useState } from "react";
import "./supplierDashboardFilter.css";
import { Modal } from "react-bootstrap";

const SupplierDashboardFilter = (props) => {

  const {postingFrom ,setPostingFrom,postingTo ,setPostingTo,submittedFrom ,setSubmittedFrom ,submittedTo ,setSubmittedTo ,invoiceId ,setInvoiceId ,vendorInvoiceNo ,setVendorInvoiceNo ,selectedStatus ,setSelectedStatus , filterList} = props;

  const { show, cutFilterModal } = props;
  const [inputType, setInputType] = useState("text");


  const resetForm = () =>{
    setPostingFrom("")
    setPostingTo("")
    setSubmittedFrom("")
    setSubmittedTo("")
    setInvoiceId("")
    setVendorInvoiceNo("")
    setSelectedStatus("")
  }

  const updateList = () =>{
    filterList(1)
    cutFilterModal()
  }
  
  return (
    <>
      <Modal
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        size="lg"
      >
        <div className="suppfilt">
          <h3>Search Bar</h3>
          <div className="suppfiltBox">
            <div className="suppfiltrow">
              <h6 className="suppDate">Select Posting Date Range</h6>

              <div className="inputBox">
                <input
                  type={inputType}
                  placeholder="From Date"
                  required
                  id="calendar"
                  onFocus={() => setInputType("date")}
                  onBlur= {() => setInputType("text")}
                  value={postingFrom}
                  data-date-format="DD/MM/YYYY"
                  onChange={(e) =>{ setPostingFrom(e.target.value)}}
                  
                />
              </div>
              <div className="inputBox">
                <input
                  type={inputType}
                  placeholder="To Date"
                  required
                  id="calendar"
                  onFocus={() => setInputType("date")}
                  onBlur= {() => setInputType("text")}
                  value={postingTo}
                  onChange={(e) =>{ setPostingTo(e.target.value)}}
                />
              </div>

            </div>
            <div className="suppfiltrow">
              <h6 className="suppDate">Select Submitted Date Range</h6>
              <div className="inputBox">
                <input
                  type={inputType}
                  placeholder="From Date"
                  required
                  id="calendar"
                  onFocus={() => setInputType("date")}
                  onBlur= {() => setInputType("text")}
                  value={submittedFrom}
                  onChange={(e) =>{ setSubmittedFrom(e.target.value)}}
                />
              </div>

              <div className="inputBox">
                <input
                  type={inputType}
                  placeholder="To Date"
                  required
                  id="calendar"
                  onFocus={() => setInputType("date")}
                  onBlur= {() => setInputType("text")}
                  value={submittedTo}
                  onChange={(e) =>{ setSubmittedTo(e.target.value)}}
                />
              </div>

            </div>
            <div className="suppfiltrow2">
              <input type="text" className="inpt2" placeholder="Invoice Id" value={invoiceId} onChange={(e) => setInvoiceId(e.target.value)}/>
              <input
                type="text"
                className="inpt2"
                placeholder="Vendor Invoice No"
                value={vendorInvoiceNo}
                onChange={(e) => setVendorInvoiceNo(e.target.value)}
              />
              <select name="" id="" className="inpt2" value={selectedStatus} onChange={(e) => {setSelectedStatus(e.target.value)}}>
                <option value="Select Status">Select Status</option>
                <option value="2">SUBMITTED</option>
                <option value="1">SAVED</option>
                <option value="3">APPROVED</option>
                <option value="4">REJECTED</option>
                <option value="5">PAYMENT PROCESS</option>
              </select>
            </div>

            <div className="suppBtn">
              <button className="supSearch" onClick={updateList}>Search</button>
              <button className="supCancel" onClick={cutFilterModal}>Cancel</button>
              <button className="supReset" onClick={resetForm}>Reset</button>
            </div>
          </div>
          <div className="cutOption" onClick={cutFilterModal}>
            <img src={require("../../assets/supplier/cancel.png")} alt="" />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SupplierDashboardFilter;

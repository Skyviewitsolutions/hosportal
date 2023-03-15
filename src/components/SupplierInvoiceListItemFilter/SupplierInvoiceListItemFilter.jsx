import React from "react";
import "./supplierInvoiceListItemFilter.css";
import { Modal } from "react-bootstrap";
import "./supplierInvoiceListItemFilter.css";

const SupplierInvoiceListItemFilter = (props) => {
  const {
    cutFilterModal,
    show,
    poItemFrom,
    setPoItemFrom,
    poItemTo,
    setPoItemTo,
    materialFrom,
    setMaterialFrom,
    materialTo,
    setMaterialTo,
    customerMaterialFrom,
    setCustomerMaterialFrom,
    customerMaterialTo,
    setCustomerMaterialTo,
    materialDocumentFrom,
    setMaterialDocumentFrom,
    materialDocumentTo,
    setMaterialDocumentTo,
    asnFrom,
    setAsnFrom,
    asnTo,
    setAsnTo,
    filterData
  } = props;

  const resetForm = () =>{

    setPoItemFrom("")
    setPoItemTo("")
    setMaterialFrom("")
    setMaterialTo("")
    setCustomerMaterialFrom("")
    setCustomerMaterialTo("")
    setMaterialDocumentFrom("")
    setMaterialDocumentTo("")
    setAsnFrom("")
    setAsnTo("")
  }

  const filterDatas = () =>{
    filterData(1)
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
        <div className="supltFlter">
          <h3>Search Bar</h3>
          <div className="suppfiltBox suppfiltbox2">
            <div className="supFiltRow">
              <h5>PO Item</h5>
              <input type="text" placeholder="From" value={poItemFrom} onChange={(e) => setPoItemFrom(e.target.value)}/>
              <input type="text" placeholder="To" value={poItemTo} onChange={(e) => setPoItemTo(e.target.value)}/>
            </div>

            <div className="supFiltRow">
              <h5>Material</h5>
              <input type="text" placeholder="From" value={materialFrom} onChange={(e) => setMaterialFrom(e.target.value)}/>
              <input type="text" placeholder="To" value={materialTo} onChange={(e) => setMaterialTo(e.target.value)}/>
            </div>

            <div className="supFiltRow">
              <h5>Customer Material</h5>
              <input type="text" placeholder="From" value={customerMaterialFrom} onChange={(e) => setCustomerMaterialFrom(e.target.value)}/>
              <input type="text" placeholder="To" value={customerMaterialTo} onChange={(e) => setCustomerMaterialTo(e.target.value)}/>
            </div>

            <div className="supFiltRow">
              <h5>Material Document</h5>
              <input type="text" placeholder="From" value={materialDocumentFrom} onChange={(e) => setMaterialDocumentFrom(e.target.value)}/>
              <input type="text" placeholder="To" value={materialDocumentTo} onChange={(e) => setMaterialDocumentTo(e.target.value)}/>
            </div>

            <div className="supFiltRow">
              <h5>ASN</h5>
              <input type="text" placeholder="From" value={asnFrom} onChange={(e) => setAsnFrom(e.target.value)}/>
              <input type="text" placeholder="To" value={asnTo} onChange={(e) => setAsnTo(e.target.value)}/>
            </div>

            <div className="suppBtn">
              <button className="supSearch" onClick={filterDatas}>Search</button>
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

export default SupplierInvoiceListItemFilter;

import React from "react";
import SupplierSideBarComponent from "../../../components/SupplierSideBar/SupplierSideBarComponent";
import "./supplierInvoice.css";
import Supplier2ndHeaderContianer from "../../../components/Supplier2ndHeader/Supplier2ndHeaderContianer";
import SupplierDataTableContainer from "../../../components/SupplierDataTable/SupplierDataTableContainer";

const SupplierInvoiceComponent = (props) => {
  return (
    <>
      <div className="supInv">
        <SupplierSideBarComponent />
        <div className="supInvRight">
          <Supplier2ndHeaderContianer />
          <SupplierDataTableContainer {...props} title="My - e - Invoice" {...props}  showSearch={false}
            showFilter={true}/>
        </div>
        <div className="faq">
          <h6>FAQ</h6>
        </div>
        <div className="guide">
          <h6>Supplier's Journey Guide</h6>
        </div>
      </div>
    </>
  );
};

export default SupplierInvoiceComponent;

import React from 'react'
import Supplier2ndHeaderContianer from "../../../components/Supplier2ndHeader/Supplier2ndHeaderContianer";
import SupplierSideBarComponent from "../../../components/SupplierSideBar/SupplierSideBarComponent";
import SupplierInvoiceDetails from '../../../components/SupplierInvoiceDetails/SupplierInvoiceDetails';

const SupplierInvoiceDetailsComponent = (props) => {
  return (
    <>
        <div className="supInv">
        <SupplierSideBarComponent />
        <div className="supInvRight">
          <Supplier2ndHeaderContianer />
          <SupplierInvoiceDetails {...props}/>
        </div>
        <div className="faq">
          <h6>FAQ</h6>
        </div>
        <div className="guide">
          <h6>Supplier's Journey Guide</h6>
        </div>
      </div>
    </>
  )
}

export default SupplierInvoiceDetailsComponent
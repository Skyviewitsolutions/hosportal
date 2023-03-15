import React from "react";
import Supplier2ndHeaderContianer from "../../../components/Supplier2ndHeader/Supplier2ndHeaderContianer";
import SupplierSideBarComponent from "../../../components/SupplierSideBar/SupplierSideBarComponent";
import SupplierDataTableContainer from "../../../components/SupplierDataTable/SupplierDataTableContainer"

const SupplierMarketPlacePoComponent = (props) => {
  const { column, data, getList } = props;
  return (
    <>
      <div className="supInv">
        <SupplierSideBarComponent />
        <div className="supInvRight">
          <Supplier2ndHeaderContianer />
          <SupplierDataTableContainer
            title="PO List"
            column={column}
            data={data}
            createInvoiceBtn={true}
            getList={getList}
            showSearch={true}
            showFilter={false}
            {...props}
            downloadPo={true}
          />
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

export default SupplierMarketPlacePoComponent;

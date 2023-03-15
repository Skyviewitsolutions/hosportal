import React from "react";
import Supplier2ndHeaderContianer from "../../../components/Supplier2ndHeader/Supplier2ndHeaderContianer";
import SupplierSideBarComponent from "../../../components/SupplierSideBar/SupplierSideBarComponent";
import SupplierDataTableContainer from "../../../components/SupplierDataTable/SupplierDataTableContainer";

const SupplierInvoiceListItemComponent = (props) => {
  const { column, data, getList , handleNextBtn} = props;

  return (
    <>
      <div className="supInv">
        <SupplierSideBarComponent />
        <div className="supInvRight">
          <Supplier2ndHeaderContianer />
          <SupplierDataTableContainer
            title="Select Item"
            column={column}
            data={data}
            createInvoiceBtn={false}
            getList={getList}
            showSearch={false}
            showFilter = {true}
            showNextBtn={true}
            handleNextBtn={handleNextBtn}
            showSelectBox={true}
            {...props}
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

export default SupplierInvoiceListItemComponent;

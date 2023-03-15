import React from "react";
import FooterComponent from "../../../../components/Footer/FooterComponent";
import HeaderContainer from "../../../../components/Header/HeaderContainer";
import SideBarComponent from "../../../../components/SideBar/SideBarComponent";
import { toast } from "react-toastify";
import InvoiceMasterDataTable from "../../../../components/InvoiceMasterDataTable/InvoiceMasterDataTable";
import "./invoiceMasterLog.css";
import Input2 from "../../../../elements/Input2/Input2";
import InputDate from "../../../../elements/InputDate/InputDate";
import RunButton from "../../../../elements/RunButton/RunButton";


const InvoiceMasterLogComponent = (props) => {
  return (
    <>
      <div className="home">
        <SideBarComponent />
        <div className="homeContent">
          <HeaderContainer />
          <InvoiceMasterDataTable {...props} title="Invoice Master Log">
            <div className="mstLog">
              <div>
                <Input2 placeholder="Enter Vendor No" />
                <Input2 placeholder="GR No" />
                <Input2 placeholder="Invoice No" />
                <Input2 placeholder="FISC Year" />
                <Input2 placeholder="PO No" />
                <Input2 placeholder="PO Item" />
                <Input2 placeholder="PO Doc Type" />
                <Input2 placeholder="Supplier Ref" />
              </div>
              <div className="invMstDate">
                <InputDate label="From Date"/>
                <InputDate label="To Date" />
              </div>
              <div style={{width : "100%" , display: "flex" , justifyContent : 'center' , alignItems : "center" , alignSelf : 'center'}}>
              <RunButton />
              </div>
            </div>
            </InvoiceMasterDataTable>

          <FooterComponent />
        </div>
      </div>
    </>
  );
};

export default InvoiceMasterLogComponent;

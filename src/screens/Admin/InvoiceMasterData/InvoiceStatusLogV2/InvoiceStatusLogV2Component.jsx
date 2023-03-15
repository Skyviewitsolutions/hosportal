import React from 'react';
import FooterComponent from "../../../../components/Footer/FooterComponent";
import HeaderContainer from "../../../../components/Header/HeaderContainer";
import SideBarComponent from "../../../../components/SideBar/SideBarComponent";
import { toast } from "react-toastify";
import InvoiceMasterDataTable from "../../../../components/InvoiceMasterDataTable/InvoiceMasterDataTable";
import Input2 from "../../../../elements/Input2/Input2";
import InputDate from "../../../../elements/InputDate/InputDate";
import RunButton from "../../../../elements/RunButton/RunButton";

const InvoiceStatusLogV2Component = (props) => {
  return (
    <>
    <div className="home">
        <SideBarComponent />
        <div className="homeContent">
          <HeaderContainer />
          <InvoiceMasterDataTable {...props} title="Invoice Status Log V2">
          <div className='bordder'>
            <div className="invstatcont">
              <InputDate  />
              
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <RunButton />
            </div>
            </div>
          </InvoiceMasterDataTable>

          <FooterComponent />
        </div>
      </div>
    </>
  )
}

export default InvoiceStatusLogV2Component
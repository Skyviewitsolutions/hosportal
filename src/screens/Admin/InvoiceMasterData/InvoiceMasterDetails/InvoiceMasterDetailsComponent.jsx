import React from 'react';
import FooterComponent from "../../../../components/Footer/FooterComponent";
import HeaderContainer from "../../../../components/Header/HeaderContainer";
import SideBarComponent from "../../../../components/SideBar/SideBarComponent";
import { toast } from 'react-toastify';
import InvoiceMasterDataTable from '../../../../components/InvoiceMasterDataTable/InvoiceMasterDataTable';


const InvoiceMasterDetailsComponent = (props) => {
  return (
    <>
    <div className="home">
        <SideBarComponent />
        <div className="homeContent">
          <HeaderContainer />
          <InvoiceMasterDataTable {...props} title="Invoice Master Details"/>
          
          <FooterComponent />
        </div>
      </div></>
  )
}

export default InvoiceMasterDetailsComponent
import React from 'react';
import FooterComponent from "../../../../components/Footer/FooterComponent";
import HeaderContainer from "../../../../components/Header/HeaderContainer";
import SideBarComponent from "../../../../components/SideBar/SideBarComponent";
import { toast } from 'react-toastify';
import InvoiceMasterDataTable from '../../../../components/InvoiceMasterDataTable/InvoiceMasterDataTable';
import "./noGrLog.css";
import Input from '../../../../elements/Input/Input';
import Input2 from '../../../../elements/Input2/Input2';
import RunButton from '../../../../elements/RunButton/RunButton';


const NoGrLogComponent = (props) => {
  return (
    <>
    <div className="home">
        <SideBarComponent />
        <div className="homeContent">
          <HeaderContainer />
          <InvoiceMasterDataTable {...props} title="No GR PO's/ Invoice Master Log">
            <div className="searchCont" >
              <div>
                <Input2 placeholder="Enter Vendor No"/>
                <Input2 placeholder="Enter PO No"/>
                </div>
                <RunButton />
            </div>
          
          </InvoiceMasterDataTable>
          
          <FooterComponent />
        </div>
      </div></>
  )
}

export default NoGrLogComponent
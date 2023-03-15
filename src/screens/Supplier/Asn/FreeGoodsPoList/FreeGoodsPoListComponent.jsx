import React from 'react';
import Asn2ndHeader from "../../../../components/Asn2ndHeader/Asn2ndHeader";
import AsnSideBarComponent from "../../../../components/AsnSideBar/AsnSideBarComponent";
import ReservationPoListDatatable from '../../../../components/ReservationPoListDatatable/ReservationPoListDatatable';


const FreeGoodsPoListComponent = (props) => {
    const {headersData} = props ;
  return (
    <div className="supInv">
    <AsnSideBarComponent />
    <div className="supInvRight">
      <Asn2ndHeader headersData={headersData}/>
      <ReservationPoListDatatable title="Reservation Request" {...props}/>
    </div>
    <div className="faq">
      <h6>FAQ</h6>
    </div>
    <div className="guide">
      <h6>Supplier's Journey Guide</h6>
    </div>
  </div>
  )
}

export default FreeGoodsPoListComponent
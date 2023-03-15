import React from 'react';
import Asn2ndHeader from "../../../../components/Asn2ndHeader/Asn2ndHeader";
import AsnSideBarComponent from "../../../../components/AsnSideBar/AsnSideBarComponent";
import AsnPoSelectedItem from '../../../../components/AsnPoSelectedItem/AsnPoSelectedItem';

const AsnPoSelectedItemListComponent = (props) => {

    const {headersData} = props;

  return (
    <div className="supInv">
        <AsnSideBarComponent />
        <div className="supInvRight">
          <Asn2ndHeader headersData={headersData}/>
          <AsnPoSelectedItem {...props}/>
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

export default AsnPoSelectedItemListComponent
import React from "react";
import Asn2ndHeader from "../../../../components/Asn2ndHeader/Asn2ndHeader";
import AsnSideBarComponent from "../../../../components/AsnSideBar/AsnSideBarComponent";
import AsnDataTable from "../../../../components/AsnDataTable/AsnDataTable";

function AsnNupcoPoListComponent(props) {

  const {headersData} = props;
  return (
    <>
      <div className="supInv">
        <AsnSideBarComponent />
        <div className="supInvRight">
          <Asn2ndHeader headersData={headersData}/>
          <AsnDataTable {...props} title="PO List" PoBtn={true} createAsnBtn={true}/>
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
}

export default AsnNupcoPoListComponent;

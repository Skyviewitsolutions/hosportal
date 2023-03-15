import React from "react";
import Asn2ndHeader from "../../../../components/Asn2ndHeader/Asn2ndHeader";
import AsnSideBarComponent from "../../../../components/AsnSideBar/AsnSideBarComponent";
import AsnDataTable from "../../../../components/AsnDataTable/AsnDataTable";
import AsnHeader from "../../../../components/AsnHeader/AsnHeaderContainer";
import AsnPdf from "../../../../components/AsnPdf/AsnPdf";

const AsnPdfPrintComponent = (props) => {
  return (
    <div className="supInv ansPdf">
      <AsnHeader />
      <AsnPdf {...props}/>

      <div className="faq">
        <h6>FAQ</h6>
      </div>
      <div className="guide">
        <h6>Supplier's Journey Guide</h6>
      </div>
    </div>
  );
};

export default AsnPdfPrintComponent;

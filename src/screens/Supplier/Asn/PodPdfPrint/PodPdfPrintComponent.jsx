import React from 'react';
import Asn2ndHeader from "../../../../components/Asn2ndHeader/Asn2ndHeader";
import AsnSideBarComponent from "../../../../components/AsnSideBar/AsnSideBarComponent";
import AsnDataTable from "../../../../components/AsnDataTable/AsnDataTable";
import PodPdf from '../../../../components/PodPdf/PodPdf';
import "./podPdfPrint.css";

const PodPdfPrintComponent = (props) => {
  const {headersData} = props;
  
  return (
    <div className="supInv" style={{overflowY : "hidden" , height : "100vh"}}>
        <AsnSideBarComponent />
        <div className="supInvRight supInPodPdf" >
          <Asn2ndHeader headersData={headersData}/>
          <PodPdf {...props}/>
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

export default PodPdfPrintComponent
import React  from "react";
import AsnSideBarComponent from "../../../../components/AsnSideBar/AsnSideBarComponent"
import AsnDataTable from "../../../../components/AsnDataTable/AsnDataTable";
import CemHeaderContainer from "../../../../components/CemHeader/CemHeaderContainer"
import CemSideBarComponent from "../../../../components/CemSideBar/CemSideBarComponent";
import CemDatatable from "../../../../components/CemDatatable/CemDatatable";
import CemFeedbackModal from "../../../../components/CemFeedbackModal/CemFeedbackModal"

const CemDashboardComponent = (props) => {
  return (
    <div className="supInv">
      <CemSideBarComponent />
      <div className="supInvRight">
       <CemHeaderContainer />
       <CemDatatable {...props} title="Feedback Details" showFilter={true} showExport={true} showBack={true}/>
       <CemFeedbackModal/>
      </div>
      <div className="faq">
        <h6>FAQ</h6>
      </div>
      <div className="guide">
        <h6>Supplier's Journey Guide</h6>
      </div>
    </div>
  );
};

export default CemDashboardComponent;

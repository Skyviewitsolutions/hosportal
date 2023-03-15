import React from 'react';
import RgrSideBarComponent from '../../../../components/RgrSideBar/RgrSideBarComponent';
import RgrHeaderContainer from "../../../../components/RgrHeader/RgrHeaderContainer";
import RgrDashboardDatatable from "../../../../components/RgrDashboardDatatable/RgrDashboardDatatable";

const RgrDashboardComponent = (props) => {
  
  return (
    <div className="supInv">
          <RgrSideBarComponent />
        <div className="supInvRight ">
           <RgrHeaderContainer />
           <RgrDashboardDatatable title="Existing RGR List" showFilter={true} {...props} showExport={true}/>
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

export default RgrDashboardComponent
import React from "react";
import RgrSideBarComponent from "../../../../components/RgrSideBar/RgrSideBarComponent";
import RgrHeaderContainer from "../../../../components/RgrHeader/RgrHeaderContainer";
import RgrItemsDetails from "../../../../components/RgrItemsDetails/RgrItemsDetails";


const RgrItemsDetailsComponent = (props) => {
  return (
    <div className="supInv">
      <RgrSideBarComponent />
      <div className="supInvRight ">
        <RgrHeaderContainer />
        <RgrItemsDetails {...props}/>
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

export default RgrItemsDetailsComponent;

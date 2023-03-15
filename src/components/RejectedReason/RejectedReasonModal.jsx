import React from "react";
import "./rejectedReason.css";
import { Modal } from "react-bootstrap";

const RejectedReasonModal = (props) => {
    const {hideRejectedModal , showReasonPopup , reasonText} = props;
  return (
    <>
      <Modal show={showReasonPopup} centered>
        <div className="rejReason">
          <h4>
           {reasonText}
          </h4>

          <div className="cnBtnCont">
            <button className="canBtn" onClick={hideRejectedModal}>Cancel</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default RejectedReasonModal;

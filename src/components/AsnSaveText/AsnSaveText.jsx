import React from "react";
import "./asnSaveText.css";
import { Modal } from "react-bootstrap";
import Cut from "../../assets/supplier/asn/cut.svg"

const AsnSaveText = (props) => {

  const {showTextPopup , setShowTextPopup} = props;

  return (
    <Modal
      show={showTextPopup}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="md"
    >
      <div className="asnTxtmdl">
        <h5>Add Text</h5>
        <div className="asnTxtBox">
          <h6>Text : </h6>
          <textarea name="" id="" cols="30" rows="2"></textarea>
        </div>

         <button>Save</button>
         <div className="cut_opt" >
           <img src={Cut} alt="" style={{width : "15px"}} onClick={() => setShowTextPopup(false)}/>
         </div>
      </div>
    </Modal>
  );
};

export default AsnSaveText;

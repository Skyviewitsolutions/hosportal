import React , {useState} from "react";
import "./supplierWelcome.css";
import { Modal } from "react-bootstrap";

const SupplierWelcome = () => {

  const [openPopup ,setOpenPopup] = useState(true)
  return (
    <>
      <Modal show={openPopup}>
        <div className="wlcmModal">
          <div className="wlcmHeading">
            <h2>Welcome to Supplier Portal</h2>
          </div>
          <div className="wlcmimg">
            <img
              src={require("../../assets/supplier/SupplierAnnouncement.jpg")}
              alt=""
            />
          </div>
          <h5>Please refer the new use manual for new </h5>
          <h5>functionalities</h5>

          <div className="wlcmlink">
              <h6>1. <a href="">NUPCO Care Guid Engg.</a></h6>
              <h6>2. <a href="">NUPCO Care Guid Ar</a>
              </h6>
            </div>

            <div className="cut_opt" onClick={() => setOpenPopup(false)}>
                <h5>x</h5>
              </div>
        </div>
      </Modal>
    </>
  );
};

export default SupplierWelcome;

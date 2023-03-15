// here we are going to create a confirm box ;
import React from "react";
import "./confirm.css";
// import Modal from "react-modal";
import Button from "../button/Button";

const Confirm = (props) => {

  const {deny , confirm , loading , show} = props
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <>
      {/* <Modal isOpen={true}   style={customStyles}>
        <div className="confirmbox">
             <h4>Do you want to delete ? </h4>
             <div className="confrm_btn">
                  <button>Cancel</button>
                  <Button text="Delete" loading={loading}/>
               </div>
          </div>
      </Modal> */}
    </>
  );
};

// exporting the component ;
export default Confirm;

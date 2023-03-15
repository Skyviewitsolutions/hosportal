import React from "react";
import "./button.css";
import Loader from "../loader/Loader"

const BackButton = (props) => {
  const { text, onClick , loading } = props;
  return (
    <>
      <div className="special_btn ">
        <button  onClick={onClick} className="back">
          {text}
          {loading && <Loader /> }
        </button>
      </div>
    </>
  );
};

export default BackButton;

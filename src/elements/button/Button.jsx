// Here we are creating a custom button ;

import React from "react";
import "./button.css";
import Loader from "../loader/Loader"

const Button = (props) => {
  const { text, onClick , loading } = props;
  return (
    <>
      <div className="special_btn">
        <button  onClick={onClick}>
          {!loading && text}
          {loading && <Loader /> }
        </button>
      </div>
    </>
  );
};

export default Button;

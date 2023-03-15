import React from "react";
import "./backButton.css";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="bcbtn" onClick={goBack}>
        <button>Back</button>
      </div>
    </>
  );
};

export default BackButton;

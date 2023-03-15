import React from "react";
import "./runButton.css";

const RunButton = () => {
  return (
    <>
      <div className="runBtn">
        <button id="run_service" type="button" class="btn btn-success btn-sm">
          Run Service
        </button>
      </div>
    </>
  );
};

export default RunButton;

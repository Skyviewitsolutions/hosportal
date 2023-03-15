import React, { useState, useEffect } from "react";
import AsnHeaderContainer from "../../../../components/AsnHeader/AsnHeaderContainer";
import BackButton from "../../../../elements/backButton/BackButton";
import "./asnSlocList.css";


const AsnSlocListComponent = (props) => {

  const {storageLocation , handleSubmit , setSelectedStorageLocation , selectedStorageLocation} = props ;
  
  

  const selectedStockDesign = {
    background: "red",
    color: "white",
    borderColor: "red",
  };

  return (
    <>
      <div className="asnHome">
        <AsnHeaderContainer />
        <div className="asnCont">
          <BackButton />
          <div className="asnRegionBx">
            <div className="asnSlocBxCont">
              <h5>Select Storage Location ...</h5>

              <div className="asnItms asnSlocItms">

                {storageLocation && storageLocation.map((item ,index) =>{
                  return(<>
                    <div
                  className="asnItmsbox asnSlocItmsbx"
                  style={
                    selectedStorageLocation === item.sloc_name ? selectedStockDesign : null
                  }
                  onClick={() => setSelectedStorageLocation(item.sloc_name)}
                >
                  <h5>{item.sloc_name}</h5>
                  {selectedStorageLocation === item.sloc_name && (
                    <img
                      src={require("../../../../assets/supplier/asn/right.png")}
                      alt=""
                      className="asnRt"
                    />
                  )}
                </div>
                  </>)
                })}
                
              </div>
              <div className="asnSbmt">
                <button onClick={handleSubmit}>SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AsnSlocListComponent;

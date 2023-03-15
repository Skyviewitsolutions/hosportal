import React from 'react'
import SupplierLoginCardContainer from "../../../components/SupplierLoginCard/SupplierLoginCardContainer";

const SupplierLoginComponent = () => {
  return (
    <>
    <div className="logincontainer">
        <video loop autoPlay muted className="videoContainer" playsInline>
          <source
            src={require("../../../assets/video/videoplayback.mp4")}
            type="video/mp4"
          />
        </video>
        <div className="overLay">
         
          <SupplierLoginCardContainer />
        </div>
        
      </div>
    </>
  )
}

export default SupplierLoginComponent
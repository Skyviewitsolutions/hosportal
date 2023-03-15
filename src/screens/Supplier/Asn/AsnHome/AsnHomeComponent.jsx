import React, { useState } from "react";
import AsnHeaderContainer from "../../../../components/AsnHeader/AsnHeaderContainer";
import "./asnHome.css";
import BackButton from "../../../../elements/backButton/BackButton";
import { color } from "@mui/system";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"

const AsnHomeComponent = (props) => {
  const { region, selectedRegion, handleRegion, customer } = props;

  const navigate = useNavigate();

  const [selectedStock, setSelectedStock] = useState("");

  const selectedStockDesign = {
    background: "red",
    color: "white",
    borderColor: "red",
  };

  const handleSubmit = () => {
   
    if (selectedStock) {
      const selectedStockVal = {
        region: selectedRegion,
        selectedStock: selectedStock,
      };

      localStorage.setItem("selectedStockVal", JSON.stringify(selectedStockVal));
      navigate("/supplier/asn/sloc-list");
    }
    else {
      toast("Please select customer" , {type  : "warning"})
    }
  };

  return (
    <>
      <div className="asnHome">
        <AsnHeaderContainer />
        <div className="asnCont">
          <BackButton />
          <div className="asnRegionBx">
            <div className="asnRegionBxCont">
              <div className="asnRgHead">
                <select
                  name=""
                  id=""
                  onChange={(e) => handleRegion(e)}
                  value={selectedRegion}
                >
                  <option value="">Select Region</option>
                  {region &&
                    region.map((item, index) => {
                      return (
                        <>
                          <option value={item} key={index}>
                            {item}
                          </option>
                        </>
                      );
                    })}
                </select>
              </div>

              <h5>Select Customer ...</h5>

              <div className="asnItms">
                {customer &&
                  customer.map((item, index) => {
                    return (
                      <>
                        {item.IsActive ? (
                          <div
                            className="asnItmsbox"
                            style={
                              selectedStock === item.costumerName
                                ? selectedStockDesign
                                : null
                            }
                            onClick={() => setSelectedStock(item.costumerName)}
                            key={index}
                          >
                            <h5>{item.costumerName}</h5>

                            <img
                              src={require("../../../../assets/supplier/asn/right.png")}
                              alt=""
                              className="asnRt"
                            />
                          </div>
                        ) : (
                          <div className="asnItmsbo2">
                            <h5>{item.costumerName}</h5>
                          </div>
                        )}
                      </>
                    );
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

export default AsnHomeComponent;

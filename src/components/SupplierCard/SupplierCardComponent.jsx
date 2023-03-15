import React from "react";
import "./SupplierCard.css";

const SupplierCardComponent = (props) => {
  const { image, text1, text2, onclick } = props;
  return (
    <>
      <div className="supplier_card" onClick={onclick}>
        <button
          className="card-bg btn btn-default p-0"
          type="submit"
          name="module_type"
          value="asn"
        >
          <div className="card-body">
            <img src={image} alt height={50} width={50} />
            <p className="mb-0">
              <b>
                {text1} <br />
                {text2}
              </b>
            </p>
          </div>
        </button>
      </div>
    </>
  );
};

export default SupplierCardComponent;

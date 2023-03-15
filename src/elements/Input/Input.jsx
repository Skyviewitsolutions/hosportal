// Here we are creating a custom input box ;

import React from "react";
import "./input.css";

const Input = (props) => {
  const { type, value, required, labels, placeholder , onChange , errors} = props;
  return (
    <>
      <div className="input">
        <label htmlFor="inputText">
          {labels} {required && <span>*</span>}
        </label>
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} id="inputText"  autocomplete="off"/>
        {errors && <span className="input_errors">{errors}</span>}
      </div>
    </>
  );
};

export default Input;

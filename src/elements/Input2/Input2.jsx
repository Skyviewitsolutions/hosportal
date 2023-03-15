import React from 'react';
import "./input2.css"

const Input2 = (props) => {

    const { type, value, required, labels, placeholder , onChange , errors} = props;
  return (
    <>
    <div className="input2">
        <label htmlFor="inputText">
          {labels} {required && <span>*</span>}
        </label>
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} id="inputText"  autocomplete="off"/>
        {errors && <span className="input_errors">{errors}</span>}
      </div></>
  )
}

export default Input2 ;
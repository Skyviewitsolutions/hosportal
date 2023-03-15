// Here we are going to create selectBox ;
import React from "react";
import "./selectBox.css";
import Select , {components} from "react-select";

const SelectBox = (props) => {
  const {
    value,
    required,
    labels,
    onChange,
    allOptions,
    errors,
    placeholder,
    defaultValue,
  } = props;

  const Input = ({ ...rest }) => (
    <components.Input {...rest} autoComplete={"nope"} />
  );

  return (
    <>
      <div className="selectBox">
        <label htmlFor="SelectText">
          {labels} {required && <span>*</span>}
        </label>

        <Select
          defaultInputValue={defaultValue}
          value={value.value}
          onChange={onChange}
          options={allOptions}
          placeholder={placeholder}
          className="select"
        />
        {errors && <span className="select_errors">{errors}</span>}
      </div>
    </>
  );
};

export default SelectBox;

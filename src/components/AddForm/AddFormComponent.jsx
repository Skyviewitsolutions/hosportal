import React from "react";
import "./addForm.scss";
import Input from "../../elements/Input/Input";
import SelectBox from "../../elements/SelectBox/SelectBox";
import Button from "../../elements/button/Button";

const AddFormComponent = (props) =>{
   
    return(<>
        <div className="addUser">
        <div className="addCont">
          <div className="addHead">
            <h5>Add {props.title}</h5>
          </div>
            {props.children}
        </div>
      </div>
    </>)
}

// exporting the component ;
export default AddFormComponent ;
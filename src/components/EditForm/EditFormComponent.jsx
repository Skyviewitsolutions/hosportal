import React from "react";
import "./editForm.scss"

const EditFormComponent = (props) =>{
    
    return(<>
        <div className="addUser">
        <div className="addCont">
          <div className="addHead">
            <h5>Edit {props.title}</h5>
          </div>
            {props.children}
        </div>
      </div>
    </>)
}

export default EditFormComponent ;
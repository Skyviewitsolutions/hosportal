import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./cemFeedbackModal.css";

const CemFeedbackModal = () => {

    const [showInputDate , setShowInputDate] = useState(true)

  return (
    <Modal show={false} aria-labelledby="contained-modal-title-vcenter" centered>
      <div className="fdMdal">
        <h5>Select Feedback</h5>
        <select name="" id="">
          <option value="1">تم التوريد (يجب ارفاق مذكرة استلام)</option>
          <option value="2">سيتم التوريد (يجب تحديد التاريخ)</option>
          <option value="3">رفض استلام من الجهة (يجب ارفاق الرفض)</option>
          <option value="4">توريد جزئي</option>
          <option value="5">توريد جزئي حسب طلب الجهة (يجب ارفاق الطلب)</option>
          <option value="6">
            اعتذار عن توريد البند (يجب ارفاق خطاب أسباب الاعتذار)
          </option>
          <option value="7">طلب خطاب تمديد/ فتح دفعة (يجب ارفاق الطلب)</option>
          <option value="8">طلب اذن استيراد (يجب ارفاق الطلب)</option>
          <option value="9">الرد على خطاب الانذار</option>
        </select>
        <h6 className="ffedmdlTest">Upload File</h6>
        {showInputDate ?  <input type="date" name="" id="" /> : <input type="file" />}
        
        <button>Save</button>

        <div className="cutOptions">
            <span>x</span>
        </div>
      </div>
    </Modal>
  );
};

export default CemFeedbackModal;

import React, { useState, useRef } from "react";
import Calendar from "react-calendar";
import "./inputDatee.css";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { formatDate } from "@formatjs/intl";

const InputDate = (props) => {
  const { label } = props;

  const [showCalendar, setShowCalendar] = useState(false);

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join("/");
  }

  const [startDate, setStartDate] = useState(formatDate(new Date()));
  const [inputDate, setInputDate] = useState(new Date());

  const onChange = (date) => {
    setStartDate(formatDate(date));
    setInputDate(date);
    setShowCalendar(false);
  };

  return (
    <>
      <div className="inputDte">
        <div className="inptDteCont">
          <h4>{label}</h4>
          <div onClick={() => setShowCalendar(!showCalendar)}>
            <input type="text" readOnly={true} value={startDate} />
            <img src={require("../../assets/admin/calendar.png")} alt="" />
          </div>
        </div>
        {showCalendar && (
          <Calendar onChange={onChange} value={inputDate} className="datcont" />
        )}
      </div>
    </>
  );
};

export default InputDate;

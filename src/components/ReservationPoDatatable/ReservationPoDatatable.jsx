import React, { useState, useEffect } from "react";
import InputDate from "../../elements/InputDate/InputDate";
import ScreenLoader from "../../elements/screenLoader/ScreenLoader";
import "./reservationPoCont.css";
import {
  FaCopy,
  FaSearch,
  FaFilter,
  FaPrint,
  FaFileExport,
  FaFileImport,
  FaPaperclip,
  FaCertificate,
  FaPlus,
  FaTrash,
} from "react-icons/fa";
import { filter, forEach } from "lodash";

const ReservationPoDatatable = (props) => {
  const { title } = props;
  const [color, setColor] = useState("#8d8d91");

  const handleColor = () => {
    setColor("#383737");
  };
  const removeColor = () => {
    setColor("#8d8d91");
  };

  const [selectedForDelete, setSelectedForDelete] = useState([]);

  const [arrayItem, setArrayItem] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const addRow = () => {
    const index = arrayItem.length -1
    setArrayItem((item) => {
      return [...item, arrayItem[index] + 1];
    });
  };

  const handleSelectedRow = (item) => {
    if (selectedForDelete.indexOf(item) !== -1) {
      const filterData = selectedForDelete.filter((itmm) => itmm !== item);
      setSelectedForDelete(filterData);
    } else {
      setSelectedForDelete((itm) => {
        return [...itm, item];
      });
    }
  };

  const deleteItem = () => {
    for (var i = 0; i < selectedForDelete.length; i++) {
      const index = arrayItem.indexOf(selectedForDelete[i]);
      arrayItem.splice(index, 1);
    }
    setSelectedForDelete([]);
  };

  const selectAllForDelete = (e) => {
    const value = e.target.checked;
    if (value) {
      setSelectedForDelete([...arrayItem]);
    } else {
      setSelectedForDelete([]);
    }
  };


  return (
    <>
      <div className="rsv">
        <div className="rsv_header">
          <h4>{title}</h4>
          <div className="rsv_icons">
            <div
              className="rsv_icons_box"
              onMouseOver={handleColor}
              onMouseOut={removeColor}
            >
              <FaCopy size={18} color={color} />
              <span className="rsv_text" style={{ color: color }}>
                Copy
              </span>
            </div>
            <div
              className="rsv_icons_box"
              onMouseOver={handleColor}
              onMouseOut={removeColor}
              onClick={deleteItem}
            >
              <FaTrash size={18} color={color} />
              <span className="rsv_text" style={{ color: color }}>
                Delete
              </span>
            </div>
            <div
              className="rsv_icons_box"
              onMouseOver={handleColor}
              onMouseOut={removeColor}
            >
              <FaSearch size={18} color={color} />
              <span className="rsv_text" style={{ color: color }}>
                Search
              </span>
            </div>
            <div
              className="rsv_icons_box"
              onMouseOver={handleColor}
              onMouseOut={removeColor}
            >
              <FaFilter size={18} color={color} />
              <span className="rsv_text" style={{ color: color }}>
                Filter
              </span>
            </div>

            <div
              className="rsv_icons_box"
              onMouseOver={handleColor}
              onMouseOut={removeColor}
            >
              <FaPrint size={18} color={color} />
              <span className="rsv_text" style={{ color: color }}>
                Print
              </span>
            </div>
            <div
              className="rsv_icons_box"
              onMouseOver={handleColor}
              onMouseOut={removeColor}
            >
              <FaFileExport size={18} color={color} />
              <span className="rsv_text" style={{ color: color }}>
                Export
              </span>
            </div>
            <div
              className="rsv_icons_box"
              onMouseOver={handleColor}
              onMouseOut={removeColor}
            >
              <FaFileImport size={18} color={color} />
              <span className="rsv_text" style={{ color: color }}>
                Import
              </span>
            </div>
            <div
              className="rsv_icons_box"
              onMouseOver={handleColor}
              onMouseOut={removeColor}
            >
              <FaPaperclip size={18} color={color} />
              <span className="rsv_text" style={{ color: color }}>
                Attach
              </span>
            </div>
            <div
              className="rsv_icons_box"
              onMouseOver={handleColor}
              onMouseOut={removeColor}
            >
              <FaCertificate size={18} color={color} />
              <span className="rsv_text" style={{ color: color }}>
                Catelogue
              </span>
            </div>

            <div
              className="rsv_icons_box"
              onMouseOver={handleColor}
              onMouseOut={removeColor}
              onClick={addRow}
            >
              <FaPlus size={18} color={color} />
              <span className="rsv_text" style={{ color: color }}>
                Plus
              </span>
            </div>
          </div>
        </div>
        <div className="rsv_2nd">
          <div className="rsv_2nd_box">
            <h6>Supplying Plant :</h6>
            <input type="text" readOnly={true} disabled={true} />
          </div>
          <div className="rsv_2nd_box">
            <h6>Storage Location :</h6>
            <input type="text" readOnly={true} disabled={true} />
          </div>
          <div className="rsv_2nd_box">
            <h6>Customer Po Number :</h6>
            <input type="text" />
          </div>
          <div className="rsv_2nd_box">
            <h6>Delivery Date :</h6>
            <input type="date" />
          </div>
        </div>

        <div className="rsv_table_cont">
          <table className="rsv_table">
            <tr>
              <th>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onChange={(e) => selectAllForDelete(e)}
                />
              </th>
              <th>Customer Code</th>
              <th>Nupco Generic</th>
              <th>Nupco Trade Code</th>
              <th>Description</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th>Currency</th>
              <th>Mft Name</th>
              <th>Trade Name</th>
            </tr>

            {arrayItem.map((item, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        value={item}
                        onChange={() => handleSelectedRow(item)}
                        checked={selectedForDelete.indexOf(item) !== -1}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        style={{ width: "120px" }}
                        value={item}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        style={{ width: "120px" }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        style={{ width: "140px" }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        style={{ width: "190px" }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        style={{ width: "120px" }}
                        disabled={true}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        style={{ width: "100px" }}
                        disabled={true}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        style={{ width: "100px" }}
                        disabled={true}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        style={{ width: "100px" }}
                        disabled={true}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name=""
                        id=""
                        style={{ width: "120px" }}
                        disabled={true}
                      />
                    </td>
                  </tr>
                </>
              );
            })}
          </table>
        </div>
        <button className="rsvSubmit">Submit</button>
      </div>
    </>
  );
};

export default ReservationPoDatatable;

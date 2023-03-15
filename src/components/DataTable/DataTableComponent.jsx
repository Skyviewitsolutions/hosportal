// This is the datatable Component ;

import React from "react";
import "./dataTable.css";
import {
  DatatableWrapper,
  Filter,
  Pagination,
  PaginationOptions,
  TableBody,
  TableHeader,
} from "react-bs-datatable";
import { Col, Row, Table } from "react-bootstrap";
import { FaDownload, FaEdit, FaEye, FaTrash } from "react-icons/fa";
import ReactDatatable from "@ashvin27/react-datatable";
import { IconContext } from "react-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader2 from "../../elements/loader/Loader2";

const DataTableComponent = (props) => {
  const {
    addUser,
    editUser,
    columns,
    records,
    importValue ,
    updateFile ,
    title,
    isUploading,
    file ,
    showImport,
    showDownload,
  } = props;


  const extraButtons = [
    {
      className: "btn btn-primary buttons-pdf",
      title: "Export TEst",
      children: [
        <span>
          <i
            className="glyphicon glyphicon-print fa fa-print"
            aria-hidden="true"
          ></i>
        </span>,
      ],
      onClick: (event) => {
        console.log(event);
      },
    },
    {
      className: "btn btn-primary buttons-pdf",
      title: "Export TEst",
      children: [
        <span>
          <i
            className="glyphicon glyphicon-print fa fa-print"
            aria-hidden="true"
          ></i>
        </span>,
      ],
      onClick: (event) => {
        console.log(event);
      },
      onDoubleClick: (event) => {
        console.log("doubleClick");
      },
    },
  ];

  
  return (
    <>
      <div className="firstTable">
        <div className="firstTableContainer">
          <div className="table_header">
            <div className="table_header_bx">
              <h5>{title} List : </h5>
              <button onClick={addUser}>Add New</button>
            </div>

            {showImport && (
              <div className="table_header_bx">
                <h5>Import User : </h5>
                <input type="file"  onChange={updateFile} name="file" accept=".xlsx" />
                {isUploading && <Loader2 />}
              </div>
            )}

            {/* adding the button  */}

            {showDownload && (
              <a
                href={file}
                download
                style={{ display: "flex", width: "120px" }}
              >
                <div className="downBtn">
                  <IconContext.Provider
                    value={{ color: "var(--lightBlue)", size: 15 }}
                  >
                    <div>
                      <FaDownload style={{ marginLeft: "10px" }} />
                    </div>
                  </IconContext.Provider>
                  <button>Download Import Format</button>
                </div>
              </a>
            )}
          </div>
          <div>
            <div className="datatables">
              <ReactDatatable
                // config={config}
                tHeadClassName="heading"
                records={records}
                columns={columns}
                width={1200}
                extraButtons={extraButtons}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataTableComponent;

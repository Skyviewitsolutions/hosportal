import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import ScreenLoader from "../../elements/screenLoader/ScreenLoader";
import FilterIcon from "../../assets/supplier/filter.png";
import "./supplierInvoiceListDataTable.css";
import Pagination from "../Pagination/Pagination";

const AsnPoListDatatable = (props) => {

    const { title, data, column, getList, showNextBtn, isLoading ,createInvoice } = props;

    const options = {
        confirmFilters: false,
        selectableRowsHeader: false,
        selectableRows: "none",
        responsive: true,
        tableBodyMinHeight: "50px",
        tableBodyMaxHeight: "120px",
        print: false,
        search: false,
        viewColumns: false,
        download: false,
        filter: false,
        rowsPerPage: 20,
    
        customFooter: (
          count,
          page,
          rowsPerPage,
          changeRowsPerPage,
          changePage,
          textLabels
        ) => {
          return (
            <CustomFooter
              count={count}
              page={page}
              rowsPerPage={rowsPerPage}
              changeRowsPerPage={changeRowsPerPage}
              changePage={changePage}
              textLabels={textLabels}
              {...props}
            />
          );
        },
      };
    

  return (
    <>
        <div className="supDtaTable supdtaTabless">
        <div className="supDtaTableCont supdtaHeaderss">
          <MUIDataTable
            title={
              <h5 style={{ fontFamily: "Tahoma-Bold", color: "#373757" }}>
                {title}
              </h5>
            }
            data={data}
            columns={column}
            options={options}
            getList={getList}
          />

          {isLoading && <ScreenLoader />}
        </div>
      </div>
    </>
  )
}

export default AsnPoListDatatable;

const CustomFooter = (props) => {
  
    const {
      createInvoiceBtn,
      handleCreateInvoice,
      getList,
      totalData,
      pageCount,
      showNextBtn,
      createInvoice,
      saveList , 
      submitList ,
      status
    } = props;
  
    const [listNumber, setListNumber] = useState(1);
    const pageCounts = parseInt(pageCount);
    const totalItems = parseInt(totalData);
  
    const [showBtn , setShowBtn] = useState(false)
  
  
    return (
      <>
        <div>
          <div className="customFooter">
            <div className="csmFtleft">
              {pageCount > 0 ? (
                <h6>
                  Showing {listNumber * 20 - 19} to{" "}
                  {listNumber == pageCounts ? totalData : listNumber * 20} of{" "}
                  {totalData} entries
                </h6>
              ) : (
                <h6> showing 0 to 0 of 0 entries </h6>
              )}
            </div>
            <div className="csmFtright">
  
              {pageCounts > 1 && (
                <Pagination
                  totalPages={totalItems}
                  perpageCount={20}
                  getList={getList}
                  setListNumber={setListNumber}
                />
              )}
              
            </div>
          </div>
          {createInvoiceBtn && (
            <div className="ftBtn createInvceBtn" onClick={createInvoice}>
              <button>Create Invoice</button>
            </div>
          )}
  
         {showBtn ? <div className="ftBtn" style={{ marginTop: "-66px" }}>
  
            <button style={{ margin: "6px 12px" }} onClick={saveList}>Save</button>
            <button style={{ margin: "6px 12px" }} onClick={submitList}>{status == 4 ? "Resubmit" : "Submit"} </button>
          </div> : null}
        </div>
      </>
    );
  };
  
import React, { useState } from "react";
import "./supplierDataTable.css";
import MUIDataTable from "mui-datatables";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import ScreenLoader from "../../elements/screenLoader/ScreenLoader";
import FilterIcon from "../../assets/supplier/filter.png";
import Pagination from "../Pagination/Pagination";

const SupplierDataTableComponent = (props) => {
  const {
    title,
    data,
    column,
    createInvoiceBtn,
    getList,
    showSearch,
    showNextBtn,
    handleCreateInvoice,
    showBackBtn,
    showFilter,
    isLoading,
    rowClicked,
    pageCount,
    inputValue,
    showFilterModal,
    handleSearch,
    setInputValue,
    downloadPo ,
    showSelectBox,
    groupBy,
    setGroupBy,
  } = props;

  const options = {
    confirmFilters: false,
    selectableRowsHeader: false,
    selectableRows: "none",
    // responsive: true,
    tableBodyMinHeight: "200px",
    tableBodyMaxHeight: "350px",
    print: false,
    search: false,
    viewColumns: false,
    download: false,
    filter: false,
    rowsPerPage: 20,
    
    setRowProps: (val) => ({
      onDoubleClick: (row, dataIndex) => {
        rowClicked(val);
      }
    }),
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
          pageCount={pageCount}
          {...props}
        />
      );
    },
  };

  return (
    <>
      <div className="supDtaTable">
        <div className="supDtaTableCont">
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

          {showSelectBox && (
            <div className="supDtaSelect">
              <h5>Group Invoice By : </h5>
              <select
                name=""
                id=""
                onChange={(e) => setGroupBy(e.target.value)}
              >
                <option value="material">Material Document</option>
                <option value="supplier">Supplier Ref</option>
                <option value="asn">ASN Ref</option>
              </select>
            </div>
          )}

          {showSearch && (
            <div className="dtaSearch">
              <h6>Search : </h6> &nbsp;
              <div>
                <input
                  type="text"
                  placeholder="PO NUM/SUP INV NUM/GR NUM"
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                />
                <img
                  src={require("../../assets/supplier/search.png")}
                  alt=""
                  className="searchImg"
                  onClick={handleSearch}
                />
              </div>
            </div>
          )}

          {/* creating custom filter button */}
          {showFilter && (
            <>
              <div className="filterOpt" onClick={showFilterModal}>
                <img src={FilterIcon} alt="filter icon" />
                <span>Filter</span>
              </div>
            </>
          )}

          {downloadPo && (
            <div className="dnPo">
              <button>
                Download PO
              </button>
            </div>
          )}

          {isLoading && <ScreenLoader />}
        </div>
      </div>
    </>
  );
};

export default SupplierDataTableComponent;

const CustomFooter = (props) => {
  const {
    count,
    page,
    rowsPerPage,
    changeRowsPerPage,
    changePage,
    textLabels,
    createInvoiceBtn,
    handleCreateInvoice,
    getList,
    totalData,
    handleNextBtn ,
    pageCount,
    showNextBtn,
  } = props;

  const pageCounts = parseInt(pageCount);
  const [listNumber, setListNumber] = useState(1);

  const totalItems = parseInt(totalData);

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

          {/* pagination part here  */}

          <div className="csmFtright">
            <Pagination
              totalPages={totalItems}
              perpageCount={20}
              getList={getList}
              setListNumber={setListNumber}
            />
          </div>
        </div>
        {createInvoiceBtn && (
          <div className="ftBtn createInvceBtn" onClick={handleCreateInvoice}>
            <button>Create Invoice</button>
          </div>
        )}

        {showNextBtn && (
          <div className="ftBtn" onClick={handleNextBtn}>
            <button>Next</button>
          </div>
        )}
      </div>
    </>
  );
};

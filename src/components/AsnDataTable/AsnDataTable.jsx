import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import ScreenLoader from "../../elements/screenLoader/ScreenLoader";
import "./asnDatatable.css";
import FilterIcon from "../../assets/supplier/filter.png";
import Pagination from "../Pagination/Pagination";
import { useNavigate } from "react-router-dom";


const AsnDataTable = (props) => {
  const navigate = useNavigate();
  const {
    title,
    data,
    column,
    getList,
    isLoading,
    PoBtn,
    showNextBtn ,
    rowClicked,
    pageCount,
  } = props;

  const options = {
    confirmFilters: false,
    selectableRowsHeader: false,
    selectableRows: "none",
    // responsive: true,
    tableBodyMinHeight: "300px",
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
      },
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

  const [activePo, setActivePo] = useState("nupco");

  

  useEffect(() =>{
    const selectedPoList = localStorage.getItem("selectedPoList")
    if(selectedPoList === "nupco"){
      localStorage.setItem("selectedPoList" , "nupco")
      setActivePo("nupco")
    }
    else if(selectedPoList === "customer"){
      localStorage.setItem("selectedPoList" , "customer")
      setActivePo("customer")
    }
  },[])

  const handlePoLists = (val) => {
    console.log("hello world here")
    if (val === "nupco") {
      localStorage.setItem("selectedPoList", "nupco");
      setActivePo("nupco");
      navigate("/supplier/asn/nupco-po-list");
    } else if (val === "customer") {
      localStorage.setItem("selectedPoList", "customer");
      setActivePo("customer");
      navigate("/supplier/asn/customer-po-list");
    }
  };

  const activeBtn = {
    border: "4px solid #05a12e",
  };

  return (
    <div className="supDtaTable asnTable">
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

        {PoBtn && (
          <div className="nupBtn">
            <button
              onClick={() =>handlePoLists("nupco")}
              style={activePo === "nupco" ? activeBtn : null}
            >
              Nupco PO List
            </button>
            <button
              onClick={() =>handlePoLists("customer")}
              style={activePo === "customer" ? activeBtn : null}
            >
              Customer PO List
            </button>
          </div>
        )}

        {isLoading && <ScreenLoader />}
      </div>
    </div>
  );
};

export default AsnDataTable;

const CustomFooter = (props) => {

  const navigate = useNavigate();
  const {
    count,
    page,
    rowsPerPage,
    changeRowsPerPage,
    changePage,
    textLabels,
    createInvoiceBtn,
    handleCreateAsn,
    getList,
    totalData,
    createAsnBtn,
    handleNextBtn,
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
        {createAsnBtn && (
          <div className="ftBtn createInvceBtn" onClick={handleCreateAsn}>
            <button>Create ASN</button>
          </div>
        )}

        {showNextBtn && (
          <div className="ftBtn" >
            <button style={{margin : "4px 9px" , padding : "6px 17px"}} onClick={() =>navigate(-1)}>Back</button>
            <button style={{margin : "4px 9px" , padding : "6px 17px"}} onClick={handleNextBtn}>Next</button>
          </div>
        )}
      </div>
    </>
  );
};

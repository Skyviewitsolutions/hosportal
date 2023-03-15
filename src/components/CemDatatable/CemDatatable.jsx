import React , {useState , useEffect} from 'react';
import MUIDataTable from "mui-datatables";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import ScreenLoader from "../../elements/screenLoader/ScreenLoader";
import FilterIcon from "../../assets/supplier/filter.png";
import Pagination from "../Pagination/Pagination";
import { FaFileExport, FaFilter , FaBackward } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CemDatatable = (props) => {

  const {
    title,
    data,
    column,
    getList,
    showBack ,
    showFilter,
    showExport,
    isLoading,
    rowClicked,
    pageCount,
   
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

  return (
    <>
      <div className="supDtaTable">
        <div className="supDtaTableCont rgrDtaCont">
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

          {/* creating custom filter button */}
          
          {showFilter && (
            <>
              <div className="filterOpt rgrFilt">
                {showBack && (
                  <div className="rgrFiltBox">
                    <FaBackward
                      size={18}
                      style={{ margin: "3px 0px" }}
                      color="rgb(140,142,139)"
                    />
                    <span>Back</span>
                  </div>
                )}
                {showFilter && (
                  <div className="rgrFiltBox">
                    <FaFilter
                      size={18}
                      style={{ margin: "3px 0px" }}
                      color="rgb(140,142,139)"
                    />
                    <span>Filter</span>
                  </div>
                )}
                {showExport && (
                  <div className="rgrFiltBox">
                    {
                      <FaFileExport
                        size={18}
                        style={{ margin: "3px 0px" }}
                        color="rgb(140,142,139)"
                      />
                    }
                    <span>Export</span>
                  </div>
                )}
              </div>
            </>
          )}

          {isLoading && <ScreenLoader />}
        </div>
      </div>
    </>
  )
}

export default CemDatatable

const CustomFooter = (props) => {
  const {
    createRgrBtn,
    handleCreateRgr,
    getList,
    totalData,
    handleNextBtn,
    pageCount,
    showNextBtn,
    showBackBtn,
  } = props;

  const pageCounts = parseInt(pageCount);
  const [listNumber, setListNumber] = useState(1);

  const totalItems = parseInt(totalData);

  const navigate = useNavigate();

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

        
          <div className="ftBtn " onClick={handleCreateRgr} >
            <button >Save Feedback</button>
          </div>
      

        {showNextBtn && (
          <div className="ftBtn" style={{ marginTop: "-66px" }}>
            {showNextBtn && (
              <button style={{ margin: "6px 2px" }} onClick={() => navigate(-1)}>Back</button>
            )}
            {showBackBtn && (
              <button style={{ margin: "6px 2px" }}  onClick={handleNextBtn}>Next</button>
            )}
          </div>
        )}


      </div>
    </>
  );
};

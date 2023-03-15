import React , {useState} from 'react';
import MUIDataTable from "mui-datatables";
import ScreenLoader from "../../elements/screenLoader/ScreenLoader";
import FilterIcon from "../../assets/supplier/filter.png";
import Pagination from "../Pagination/Pagination";
import "./reservationPoListDatatable.css";

const ReservationPoListDatatable = (props) => {
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
   <div className="supDtaTable supdtaTabless">
        <div className="supDtaTableCont ">
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
  )
}

export default ReservationPoListDatatable;


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
          
  
         
        </div>
      </>
    );
  };
  
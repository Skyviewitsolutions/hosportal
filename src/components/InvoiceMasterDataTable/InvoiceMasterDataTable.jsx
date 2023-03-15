import React, { useEffect, useState } from "react";
import "./InvoiceMasterDataTable.css";
import MUIDataTable from "mui-datatables";
import ScreenLoader from "../../elements/screenLoader/ScreenLoader"
import Pagination from "../Pagination/Pagination";
import AdminPagination from "../AdminPagination/AdminPagination";


const InvoiceMasterDataTable = (props) => {
  const {
    title,
    getList,
    data,
    totalData,
    column,
    children,
    arrayItems,
    setItemsInOnePage,
    ItemsInOnePage,
    searchText,
    setSearchText,placeholder,
    isLoading ,
  } = props;


  const [listNumber, setListNumber] = useState(1);
  const [showAdminPagination , setShowAdminPagination] = useState(false)

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
    rowsPerPage: 100,
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
          listNumber={listNumber}
          showAdminPagination={showAdminPagination}
          setListNumber={setListNumber}
          itemsInOnePage={ItemsInOnePage}
          // pageCount={pageCount}
          {...props}
        />
      );
    },
  };

 
  const handleItemsCount = (e) =>{
    setShowAdminPagination(!showAdminPagination)
   const value = e.target.value
    setItemsInOnePage(e.target.value);
    getList(listNumber , value);
  }

  const filterData = () =>{
    getList(listNumber)
  }

  useEffect(() =>{
    if(searchText === ""){
    getList(listNumber)
    }
  },[searchText])

  return (
    <>
      <div className="invDta">
        <div className="invCont">
          <div className="invTitle">
            <h5>{title} : </h5>
          </div>
          {children}
          <div className="invDtaCont">
            <div className="invDtaContBox">
              <div>
                <span>Show</span>
                <select
                  name=""
                  id=""
                  value={ItemsInOnePage}
                  onChange={(e) => handleItemsCount(e)}
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                <span>entries</span>
              </div>
              <div>
                <span>Search : </span>
                <div className="inptSearch">
                <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder={placeholder}/>
                <img src={require("../../assets/supplier/search.png")} alt="" style={{width : "19px"}} onClick={filterData}/>
                </div>
              </div>
            </div>
            <MUIDataTable
              data={data}
              columns={column}
              options={options}
              getList={getList}
            />

          </div>
        </div>

        {isLoading && <ScreenLoader />}
      </div>
    </>
  );
};

export default InvoiceMasterDataTable;

// here we desinging the custom footer ;

const CustomFooter = (props) => {
  const {
    count,
    page,
    rowsPerPage,
    changeRowsPerPage,
    changePage,
    textLabels,
    arrayItems,
    createInvoiceBtn,
    handleCreateInvoice,
    getList,
    ItemsInOnePage,
    showAdminPagination ,
    totalData,
    handleNextBtn,
    pageCount,
    listNumber , setListNumber,
    showNextBtn,
  } = props;

  const pageCounts = parseInt(ItemsInOnePage);
  
  const totalItems = parseInt(totalData);
 
  return (
    <>
      <div>
        <div className="customFooter">
          <div className="csmFtleft">
            
            {totalItems > 0 ? (
              <h6 className="dtaShow">
                Showing {listNumber * ItemsInOnePage - (ItemsInOnePage - 1)} to
                {arrayItems < ItemsInOnePage
                  ? totalItems
                  : listNumber * ItemsInOnePage}{" "}
                of {totalItems} entries
              </h6>
            ) : (
              <h6 className="dtaShow"> showing 0 to 0 of 0 entries </h6>
            )}

            {/* {ItemsInOnePage < 10 &&  <h6 className="dtaShow"> showing {listNumber * ItemsInOnePage - (ItemsInOnePage - 1)} to 0 of {totalItems} entries </h6>} */}
          </div>

          {/* pagination part here  */}

          <div className="csmFtright">
        
            <AdminPagination
              totalPages={totalItems}
              perpageCount={ItemsInOnePage}
              getList={getList}
              setListNumber={setListNumber}
              showAdminPagination={showAdminPagination}
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

import React , {useState , useEffect} from "react";
import "./pagination.css";
import ReactPaginate from "react-paginate";

const Pagination = (props) => {

  const { totalPages, perpageCount , getList , setListNumber } = props;
  
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(perpageCount);
  const [pageCount, setPageCount] = useState(0);

  const getData = async () => {
    setPageCount(Math.ceil(totalPages / perpageCount));
  };

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
    getList(selectedPage + 1);
    setListNumber(selectedPage + 1)
  };

  useEffect(() => {
    getData();
  }, [offset , totalPages]);

  return (
    <>
      <div className="paginationCont">
      
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={7}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
};

export default Pagination;

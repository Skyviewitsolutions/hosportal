import React, { useState, useEffect } from "react";
import { endpoints } from "../../../services/endpoints,";
import SupplierNonMedicalPoComponent from "./SupplierNonMedicalPoComponent";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../../../components/SupplierDataTable/supplierDataTable.css";


const SupplierNonMedicalPoContainer = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const users = localStorage.getItem("usersData");
  const [column, setColumn] = useState([]);
  const [data, setData] = useState([]);
  const [pageCount , setPageCount] = useState("")
  const [totalData, setTotalData] = useState("20");
  const usersData = JSON.parse(users);

  const url = endpoints.supplier.medicalPo;
  const [selectedPo , setSelectedPo] = useState("");

  const [searchText , setSearchText] = useState(null);

  const handleChange = (e , val) =>{
    setSelectedPo(val)
  }

  const NonMedicalPo = (index , Text = searchText) => {
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };

    const val = {
      HeaderId: null,
      VendorId: null,
      VendorCode: usersData.VendorCode,
      itemCount: 20,
      indexNumber: index,
      SearchText: Text,
      POType: "'NB','Z202'",
      IsActive: true,
    };
    setLoading(true);

    axios
      .post(url, val, { headers: headers })
      .then((res) => {
       
        setLoading(false);
    
        if (res.data.status === "Success") {
          const response = res.data.InvHeaders;
          const totalDatas = res.data.recordCount;
          setTotalData(totalDatas);
          setPageCount(res.data.PageCount);
          setData(response);
          const columns = [
            {
              name: "PONumber",
              label: "Select",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "70px ",
                          textAlign: "left",
                          textTransform: "capitalize",
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
                customBodyRender: (value) => {
                  return (
                    <>
                      <input type="radio" name="value" onChange={(e) => handleChange(e, value)}/>
                    </>
                  );
                },
              },
            },
            {
              name: "PONumber",
              label: "PO #",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "80px ",
                          textAlign: "left",
                          textTransform: "capitalize",
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
              },
            },
            {
              name: "Currency",
              label: "Currency",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "100px ",
                          textAlign: "left",
                          textTransform: "capitalize",
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
              },
            },
            {
              name: "Qty_Ordered",
              label: "Qty Ordered",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "100px ",
                          textAlign: "left",
                          textTransform: "capitalize",
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
              },
            },
            {
              name: "Tax_Amount",
              label: "VAT Amount",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "100px ",
                          textAlign: "left",
                          textTransform: "capitalize",
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
              },
            },
            {
              name: "Qty_Ordered",
              label: "Qty Ordered",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "100px ",
                          textAlign: "left",
                          textTransform: "capitalize",
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
              },
            },
            {
              name: "Qty_Delivered",
              label: "Qty Delivered",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "120px ",
                          textAlign: "left",
                          textTransform: "capitalize",
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
              },
            },
            {
              name: "Val_Delivered",
              label: "Value Delivered",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "120px ",
                          textAlign: "left",
                          textTransform: "capitalize",
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
              },
            },
            {
              name: "Val_Ordered",
              label: "Value Ordered",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "120px ",
                          textAlign: "left",
                          textTransform: "capitalize",
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
              },
            },
            {
              name: "Qty_Left",
              label: "Still To Be Delivered Qty",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "150px ",
                          textAlign: "left",
                          textTransform: "capitalize",
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
              },
            },
            {
              name: "Val_Left",
              label: "Still To Be Delivered Value",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "160px ",
                          textAlign: "left",
                          textTransform: "capitalize",
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
              },
            },
            {
              name: "Qty_Invoice",
              label: "Quantity Invoiced",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "150px ",
                          textAlign: "left",
                          textTransform: "capitalize",
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
              },
            },
            {
              name: "Val_Invoice",
              label: "Invoiced Value",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "150px ",
                          textAlign: "left",
                          textTransform: "capitalize",
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
              },
            },
            {
              name: "TenderCode",
              label: "Tender Number",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "150px ",
                          textAlign: "left",
                          textTransform: "capitalize",
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
              },
            },
            {
              name: "Qty_Left_Invoice",
              label: "Still To Be Invoice Left",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "150px ",
                          textAlign: "left",
                          textTransform: "capitalize",
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
              },
            },
            {
              name: "Qty_Left_Invoice",
              label: "Still To Be Invoice Qty",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "150px ",
                          textAlign: "left",
                          textTransform: "capitalize",
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
              },
            },
            {
              name: "Val_Left_Invoice",
              label: "Still To Be Invoice Value",
              options: {
                sort: true,
                customHeadLabelRender: (data) => {
                  return (
                    <>
                      <h6
                        style={{
                          width: "150px ",
                          textAlign: "left",
                          textTransform: "capitalize",
                        }}
                        className="headerTxt"
                      >
                        {data.label}
                      </h6>
                    </>
                  );
                },
              },
            },
          ];

          setColumn(columns);
        } else if (res.data.status === "Failed") {
        }
      })
      .catch((err) => {
        console.log(err, "error ");
        setLoading(false);
      });
  };

  useEffect(() => {
    const usersLogedIn = JSON.parse(users);
    if (!usersLogedIn) {
      navigate("/supplier/login");
    } else {
      NonMedicalPo(1);
    }
  }, []);

  const handleSearch = () =>{
    NonMedicalPo(1 , searchText);
  }

   useEffect(() =>{
    if(!searchText){
      NonMedicalPo(1)
    }
   },[searchText])

   const handleCreateInvoice = () =>{
    if(selectedPo){
      localStorage.setItem("selectedPo" , JSON.stringify(selectedPo))
      navigate("/supplier/invoice-list-item" )
    }
    else if(!selectedPo){
      toast("Please select one item" , {type : "warning"})
    }
  }

  return (
    <>
      <SupplierNonMedicalPoComponent
        data={data}
        column={column}
        getList={NonMedicalPo}
        totalData={totalData}
        isLoading={loading}
        handleSearch={handleSearch}
        inputValue={searchText}
        setInputValue={setSearchText}
        handleCreateInvoice={handleCreateInvoice}
        pageCount={pageCount}
      />
    </>
  );
};

export default SupplierNonMedicalPoContainer;

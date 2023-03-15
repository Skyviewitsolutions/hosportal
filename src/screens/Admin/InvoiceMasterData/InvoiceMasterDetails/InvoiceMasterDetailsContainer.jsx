import React, { useEffect, useState } from "react";
import InvoiceMasterDetailsComponent from "./InvoiceMasterDetailsComponent";
import axios from "axios";
import { endpoints } from "../../../../services/endpoints,";
import { useNavigate } from "react-router-dom";

const InvoiceMasterDetailsContainer = () => {

  const usersData = localStorage.getItem("adminUsersData");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [column, setColumn] = useState([]);
  const [totalData, setTotalData] = useState("");
  const [searchText , setSearchText] = useState(null)
  const [arrayItems ,setArrayItems] = useState("");
  const [ItemsInOnePage, setItemsInOnePage] = useState(10);

  
  const getList = (index , selectedItems =  ItemsInOnePage , text = searchText) => {

    const usersDetails = JSON.parse(usersData);
    const headers = { Authorization: `NUPCO=${usersDetails.MemberToken}` };

    const url = endpoints.admin.invoiceMasterData.invoiceMasterDetails;

    const val = {
      InvDetailId: null,
      HeaderId: null,
      PONumber: null,
      VendorId: null,
      VendorCode: null,
      PlantId: null,
      PlantCode: null,
      SlocId: null,
      SlocCode: null,
      itemCount: selectedItems,
      indexNumber: index,
      SearchText: text,
      GroupBy: null,
      poItemFrom: null,
      poItemTo: null,
      materialFrom: null,
      materialTo: null,
      CustMaterialFrom: null,
      CustMaterialTo: null,
      MaterialDocFrom: null,
      MaterialDocTo: null,
      ASNFrom: null,
      ASNTo: null,
      IsActive: true,
    };

    setLoading(true)

    axios.post(url , val , {headers : headers})
    .then((res) =>{
      console.log(res , "this is the response which we are getting here ");
      setLoading(false)
      if (res.data.status === "Success") {
        const response = res.data.InvDetails;
        setData(response);
        setTotalData(res.data.recordCount);
        setArrayItems(response.length)

        const columns = [
          { name: "SN", label: "#" },
          { name: "VendorCode", label: "Vendor No" },
          { name: "VendorName", label: "Vendor Name" },
          { name: "PlantCode", label: "Plant" },
          { name: "SlocCode", label: "SLOC" },
          { name: "ShipTo", label: "Ship To" ,  options: {
            sort: true,
            customBodyRender: (value) => {
              return (
                <>
                  <h6
                    style={{
                      width: "320px",
                      textAlign: "center",
                      width: "260px ",
                      textAlign: "center",
                      textTransform: "capitalize",
                      margin: "0px !important",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "12px",
                      color: "#858796",
                      fontWeight: "400",
                      marginBottom: "-5px",
                    }}
                  >
                    {value}
                  </h6>
                </>
              );
            },
          },},
          { name: "PONumber", label: "Nupco PO No" },
          { name: "POItem", label: "Nupco PO Item No" },
          { name: "Asn_Ref", label: "ASN Ref" },
          { name: "QtyOrdered", label: "Qty Ordered" },
          { name: "ValOrdered", label: "Val Ordered" },
          { name: "TaxAmount", label: "Tax Amount" },
          { name: "Material", label: "Nupco Material" },
          { name: "TradeCode", label: "Nupco Trade Code" },
          { name: "CustomerCode", label: "Customer Code" },
          { name: "CustMaterialCode", label: "Customer Material Code" },
          { name: "MaterialDisc", label: "Material Desc" , options: {
            sort: true,
            customBodyRender: (value) => {
              return (
                <>
                  <h6
                    style={{
                      width: "320px",
                      textAlign: "center",
                      width: "260px ",
                      textAlign: "center",
                      textTransform: "capitalize",
                      margin: "0px !important",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "12px",
                      color: "#858796",
                      fontWeight: "400",
                      marginBottom: "-5px",
                    }}
                  >
                    {value}
                  </h6>
                </>
              );
            },
          }, },
          { name: "MovementType", label: "Movement Type" },
          { name: "GrPostingDate", label: "Posting Date " },
          { name: "GrDocumentDate", label: "Document Date" },
          { name: "Batch", label: "Batch" },
          { name: "QtyInOpun", label: "Qty Opun" },
          { name: "AmountInLc", label: "Amount LC" },
          { name: "DeliveryCompleted", label: "Delivery Completed" },
          { name: "Reference", label: "Reference" },
          { name: "Ref Doc", label: "Ref Doc" },
          { name: "GR_Num ", label: "GR Num " },
          { name: "GR_Item", label: "GR Item" },
          { name: "GR_Year", label: "GR Year" },
          { name: "GR_Qty", label: "GR Qty" },
          { name: "GR_Val", label: "GR Val" },
          { name: "UOM", label: "UOM" },
          { name: "Currency", label: "Currency" },
          { name: "IR_Num", label: "IR Num" },
          { name: "IR_Item", label: "IR Item" },
          { name: "IR_Year", label: "IR Year" },
          { name: "IR_Qty", label: "IR Qty" },
          { name: "IR_Val", label: "IR Val" },
          { name: "GR_IR_Match", label: "GR IR Match" },
          { name: "Supplier_Ref", label: "Supplier Ref" },
          { name: "DocType", label: "Doc Type" },
          { name: "DocTypeName", label: "Doc Type Name" },
          { name: "CreatedAt", label: "created At" },
          { name: "UpdatedAt", label: "Updated At" },
        ];

        setColumn(columns)
      }
      else if(res.data.status === "Failed"){
        setLoading(false)
      }
   
  })
  .catch((err) =>{
    setLoading(false)
  })
}

 

  useEffect(() => {
    if (usersData) {
      getList(1);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <InvoiceMasterDetailsComponent 
      column={column}
      isLoading={loading}
      data={data}
      totalData={totalData}
      searchText={searchText}
      setSearchText={setSearchText}
      ItemsInOnePage={ItemsInOnePage}
      setItemsInOnePage={setItemsInOnePage}
      arrayItems={arrayItems}
      getList={getList} 
      placeholder="Search here..."
      />
    </>
  );
};

export default InvoiceMasterDetailsContainer;

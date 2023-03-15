import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AsnPoListItemComponent from "./AsnPoListItemComponent";
import { endpoints } from "../../../../services/endpoints,";
import {toast} from "react-toastify";

const AsnPoListItemContainer = () => {
  const users = localStorage.getItem("usersData");
  const usersData = JSON.parse(users);
  const navigate = useNavigate();
  const [loading ,setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [totalData, setTotalData] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [column , setColumn] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);

  const handleSelection = (val) => {
    const value = data[val];
    // if (selectedItem.includes(value)) {
    //   const index = selectedItem.indexOf(value);
    //   selectedItem.splice(index, 1);
    // } else {
    //   selectedItem.push(value);
    // }
    if(selectedItem.length > 0){

    // for(var i = 0 ; i < selectedItem.length ; i++ ){
      
    //   if(selectedItem[i].SN === val){
    //     selectedItem.splice(val , 1)
    //     console.log("hellow 1")
    //   }else{
    //     selectedItem.push(value)
    //     console.log("hello2")
    //   }
    // }
  }
  else {
    selectedItem.push(value)
  }
   
 
  };
  
  const [headersData, setheadersData] = useState({
    vendorCode: "",
    vendorName: "",
    region: "",
    stock: "",
    storage: "",
  });

  const updateheader = () => {
    const selectedStockVal = localStorage.getItem("selectedStockVal");
    const orgSelectedStockVal = JSON.parse(selectedStockVal);

    const selectedStorageLocation = localStorage.getItem(
      "selectedStorageLocation"
    );
    setheadersData({
      vendorCode: usersData.VendorCode,
      vendorName: usersData.VendorName,
      region: orgSelectedStockVal.region,
      stock: orgSelectedStockVal.selectedStock,
      storage: selectedStorageLocation,
    });
  };

  const getList = (index) => {

    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };
    const url = endpoints.supplier.asn.poDetails;
    const poNumberArray = localStorage.getItem("poNumberArray");
    const orgPoNumberArray = JSON.parse(poNumberArray);

   
    const val = {
      vendor_no: null,
      plant: null,
      sloc: null,
      nupco_po_no: JSON.parse(poNumberArray),
      // nupco_po_no: "'4500016003','4500001611','4500001612' ,'4500001613',",
      moh_po_no: null,
      POType: null,
      itemCount: 10,
      indexNumber: index,
      SearchText: null,
    };

    setLoading(true);

    axios.post(url , val , {headers : headers})
    .then((res) =>{
      setLoading(false)
      if(res.data.status === "Success"){
        const response = res.data.HL ;
        setData(response);
        const totalDatas = res.data.recordCount;
        setTotalData(totalDatas);
        setPageCount(res.data.PageCount);

        const columns = [
          {
            name: "SN",
            label: "Select",
            options: {
              customBodyRenderLite: (value , id) => {
               
                return (
                  <>
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      // defaultChecked={
                      //   selectedItem.indexOf(value) !== -1 ? true : false
                      // }
                      style={{ transform: "scale(1.3)" }}
                      onChange={() => {
                        handleSelection(id);
                      }}
                    />
                  </>
                );
              },
            },
          },
          { name: "nupco_po_no", label: "Nupco Po" },
          { name: "nupco_po_item", label: "Nupco Po Item" },
          { name: "nupco_material_description", label: "Item Description"  ,options : {
            customBodyRender : (value) =>{
              return (<>
                <span style={{whiteSpace : "nowrap"}}>{value}</span>
              </>)
            }
          }},
          { name: "nupco_material", label: "Nupco Gen Code" },
          { name: "trade_code", label: "Nupco Trade Code" },
          { name: "moh_po_no", label: "Customer Po" },
          { name: "cust_mat_code", label: "Cust Mate Code" },
          { name: "order_quantity", label: "Po Qty" },
          { name: "open_qty", label: "Open Qty"  },
          { name: "order_unit", label: "UOM" },
          { name: "net_order_value", label: "Net Value" },
          { name: "po_delivery_date", label: "PO Delivery Date" },
          { name: "currency", label: "Currency" },
        ];

        setColumn(columns)
      
      }
      else if(res.data.status === "Failed"){
        setLoading(false)
      }
    })
    .catch((err) =>{
      console.log(err ,"error")
      setLoading(false)
    })
  };

  useEffect(() => {
    if (!usersData) {
      navigate("/supplier/login");
    } else {
      getList(1);
      updateheader();
    }
  }, []);

  const handleNextBtn = () =>{

    navigate("/supplier/asn/asn-po-selected-item-list");
    // if(selectedItem.length > 0){

    // }
    // else {
    //   toast("Please Select Item" , {type : "warning"})
    // }
  }

  return (
    <AsnPoListItemComponent
      headersData={headersData}
      data={data}
      column={column}
      isLoading={loading}
      getList={getList}
      totalData={totalData}
      pageCount={pageCount}
      handleNextBtn={handleNextBtn}
    />
  );
};

export default AsnPoListItemContainer;

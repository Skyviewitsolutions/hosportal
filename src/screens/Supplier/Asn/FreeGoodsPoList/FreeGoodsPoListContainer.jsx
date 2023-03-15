import React , {useState , useEffect} from 'react';
import FreeGoodsPoListComponent from './FreeGoodsPoListComponent';
import { useNavigate } from "react-router-dom";

const FreeGoodsPoListContainer = () => {

    const users = localStorage.getItem("usersData");
  const usersData = JSON.parse(users);
  const navigate = useNavigate();
  const [headersData, setheadersData] = useState({
    vendorCode: "",
    vendorName: "",
    region: "",
    stock: "",
    storage: "",
  });

  const [data , setData] = useState([])
  const column = [
    {name : "Reservatio Req Id" , label :"Free Goods Po Req Id"},
    {name : "Customer PO No" , label :"Customer PO No"},
    {name : "Delivery Date" , label :"Delivery Date"},
    {name : "Created Date" , label :"Created Date"},
    {name : "Status" , label :"Status"},
  ]

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

  useEffect(() => {
    if (!usersData) {
      navigate("/supplier/login");
    } else {
      // getList(1);
      updateheader();
    }
  }, []);

  return (
    <FreeGoodsPoListComponent headersData={headersData} data={data} column={column}/>
  )
}

export default FreeGoodsPoListContainer
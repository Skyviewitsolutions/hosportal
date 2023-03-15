import React , {useState , useEffect} from 'react';
import FreeGoodsPoComponent from './FreeGoodsPoComponent';
import { useNavigate } from "react-router-dom";


const FreeGoodsPoContainer = () => {
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
    <FreeGoodsPoComponent headersData={headersData}/>
  )
}

export default FreeGoodsPoContainer;
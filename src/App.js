import React, { useState } from "react";
import LoginContainer from "./screens/Login/LoginContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import "./App.css";
import FooterComponent from "./components/Footer/FooterComponent";
import HomeContainer from "./screens/Home/HomeContainer";
import MinistryList from "./screens/Ministry/MinistryList";
import MinistryAdd from "./screens/Ministry/MinistryAdd";
import MinistryEdit from "./screens/Ministry/MinistryEdit";
import SideBarComponent from "./components/SideBar/SideBarComponent";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import CountryMasterList from "./screens/CountryMaster/CountryMasterList";
import CountryMasterEdit from "./screens/CountryMaster/CountryMasterEdit";
import CountryMasterAdd from "./screens/CountryMaster/CountryMasterAdd";
import UserTypeList from "./screens/UserType/UserTypeList";
import UserTypeEdit from "./screens/UserType/UserTypeEdit";
import UserTypeAdd from "./screens/UserType/UserTypeAdd";
import PlantList from "./screens/Plant/PlantList";
import PlantEdit from "./screens/Plant/PlantEdit";
import PlantAdd from "./screens/Plant/PlantAdd";
import UserList from "./screens/User/UserList";
import UserEdit from "./screens/User/UserEdit";
import SupplierLoginContainer from "./screens/Supplier/SupplierLogin/SupplierLoginContainer"
import UserAdd from "./screens/User/UserAdd";
import { ToastContainer } from "react-toastify";
import SupplierHomeContainer from "./screens/Supplier/SupplierHome/SupplierHomeContainer";
import SupplierInvoiceContainer from "./screens/Supplier/SupplierInvoice/SupplierInvoiceContainer";
import SupplierMedicalPoContainer from "./screens/Supplier/SupplierMedicalPo/SupplierMedicalPoContainer";
import SupplierNonMedicalPoContainer from "./screens/Supplier/SupplierNonMedicalPo/SupplierNonMedicalPoContainer";
import SupplierWasfatyPoContainer from "./screens/Supplier/SupplierWasfatyPo/SupplierWasfatyPoContainer";
import SupplierMarketPlacePoContainer from "./screens/Supplier/SupplierMarketPlacePo/SupplierMarketPlacePoContainer";
import SupplierInvoiceListItemContainer from "./screens/Supplier/SupplierInvoiceListItem/SupplierInvoiceListItemContainer";
import SupplierInvoiceDetailsContainer from "./screens/Supplier/SupplierInvoiceDetails/SupplierInvoiceDetailsContainer";
import InvoiceDetailsContainer from "./screens/Admin/InvoiceMasterData/InvoiceDetails/InvoiceDetailsContainer";
import InvoiceMasterDetailsContainer from "./screens/Admin/InvoiceMasterData/InvoiceMasterDetails/InvoiceMasterDetailsContainer";
import InvoiceMasterHeaderContainer from "./screens/Admin/InvoiceMasterData/InvoiceMasterHeader/InvoiceMasterHeaderContainer"
import NoGrLogContainer from "./screens/Admin/InvoiceMasterData/NoGrLog/NoGrLogContainer";
import InvoiceMasterLogContainer from "./screens/Admin/InvoiceMasterData/InvoiceMasterLog/InvoiceMasterLogContainer";
import InvoiceStatusLogContainer from "./screens/Admin/InvoiceMasterData/InvoiceStatusLog/InvoiceStatusLogContainer"
import InvoiceStatusLogV2Container from "./screens/Admin/InvoiceMasterData/InvoiceStatusLogV2/InvoiceStatusLogV2Container";
import InvoiceCreateLogContainer from "./screens/Admin/InvoiceMasterData/InvoiceCreateLog/InvoiceCreateLogContainer";


// asn import ;
import AsnHomeContainer from "./screens/Supplier/Asn/AsnHome/AsnHomeContainer";
import AsnSlocListContainer from "./screens/Supplier/Asn/AsnSlocList/AsnSlocListContainer";
import AsnDashboardContainer from "./screens/Supplier/Asn/AsnDashboard/AsnDashboardContainer";
import AnsNupcoPoListContainer from "./screens/Supplier/Asn/AsnNupcoPoList/AnsNupcoPoListContainer";
import AsnCustomerPoListContainer from "./screens/Supplier/Asn/AsnCustomerPoList/AsnCustomerPoListContainer"
import AsnPdfPrintContainer from "./screens/Supplier/Asn/AsnPdfPrint/AsnPdfPrintContainer";
import PodPdfPrintContainer from "./screens/Supplier/Asn/PodPdfPrint/PodPdfPrintContainer";
import AsnPoListItemContainer from "./screens/Supplier/Asn/AsnPoListItem/AsnPoListItemContainer";
import AsnPoSelectedPoItemListContainer from "./screens/Supplier/Asn/AsnPoSelectedItemList/AsnPoSelectedPoItemListContainer";
import ReservationPoContainer from "./screens/Supplier/Asn/ReservationPo/ReservationPoContainer";
import ReservationPoListContainer from "./screens/Supplier/Asn/ReservationPoList/ReservationPoListContainer"
import FreeGoodsPoContainer from  "./screens/Supplier/Asn/FreeGoodsPo/FreeGoodsPoContainer"
import FreeGoodsPoListContainer from "./screens/Supplier/Asn/FreeGoodsPoList/FreeGoodsPoListContainer";

// rgr import;
import RgrDashboardContainer from "./screens/Supplier/Rgr/RgrDashboard/RgrDashboardContainer";
import RgrPoListContainer from "./screens/Supplier/Rgr/RgrPoList/RgrPoListContainer";
import RgrPoListItemContainer from "./screens/Supplier/Rgr/RgrPoListItem/RgrPoListItemContainer";
import RgrPoSelectedItemListContainer from "./screens/Supplier/Rgr/RgrPoSelectedItemList/RgrPoSelectedItemListContainer"
import RgrItemsDetailsContainer from "./screens/Supplier/Rgr/RgrItemsDetails/RgrItemsDetailsContainer";


// cem import ;
import CemDashboardContainer from "./screens/Supplier/Cem/CemDashboard/CemDashboardContainer"


const App = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginContainer />} />
          <Route exact path="/home" element={<HomeContainer />} />
        
          <Route
            exact
            path="/countryMaster/list"
            element={<CountryMasterList />}
          />
          <Route
            exact
            path="/countryMaster/add"
            element={<CountryMasterAdd />}
          />
          <Route
            exact
            path="/countryMaster/edit"
            element={<CountryMasterEdit />}
          />

          <Route exact path="/userType/list" element={<UserTypeList />} />
          <Route exact path="/userType/add" element={<UserTypeAdd />} />
          <Route exact path="/userType/edit" element={<UserTypeEdit />} />
          <Route exact path="/ministry/list" element={<MinistryList />} />
          <Route exact path="/ministry/add" element={<MinistryAdd />} />
          <Route exact path="/ministry/edit" element={<MinistryEdit />} />
          <Route exact path="/plant/list" element={<PlantList />} />
          <Route exact path="/plant/add" element={<PlantAdd />} />
          <Route exact path="/plant/edit" element={<PlantEdit />} />
          <Route exact path="/user/list" element={<UserList />} />
          <Route exact path="/user/add" element={<UserAdd />} />
          <Route exact path="/user/edit" element={<UserEdit />} />

          {/* from here supplier routes begins */}

          <Route exact path="/supplier/login" element={<SupplierLoginContainer/>} />
          <Route exact path="/supplier/home" element={<SupplierHomeContainer />} />

          <Route exact path="/supplier/dashboard" element={<SupplierInvoiceContainer />} />
          <Route exact path="/supplier/medical-Po" element={<SupplierMedicalPoContainer />} />
          <Route exact path="/supplier/marketPlace-Po" element={<SupplierMarketPlacePoContainer/>}/>
          <Route exact path="/supplier/nonMedical-Po" element={<SupplierNonMedicalPoContainer/>}/>
          <Route exact path="/supplier/wasfaty-Po" element={<SupplierWasfatyPoContainer/>}/>
          <Route exact path="/supplier/invoice-list-item" element={<SupplierInvoiceListItemContainer/>}/>
          <Route exact path="/supplier/invoice-details" element={<SupplierInvoiceDetailsContainer />} />

          { /* Routing the admin panel part here */ }

          <Route exact path="/admin/invoiceMasterData/invoiceDetails" element={<InvoiceDetailsContainer/>} />
          <Route exact path="/admin/invoiceMasterData/invoiceMasterDetails" element={<InvoiceMasterDetailsContainer />} />
          <Route exact path="/admin/invoiceMasterData/invoiceMasterHeaders" element={<InvoiceMasterHeaderContainer />} />
          <Route exact path="/admin/invoiceMasterData/noGrLogs" element={<NoGrLogContainer/>} />
          <Route exact path="/admin/invoiceMasterData/invoiceMasterLog" element={<InvoiceMasterLogContainer/>}/>
          <Route exact path="/admin/invoiceMasterData/invoiceStatusLog" element={<InvoiceStatusLogContainer/>}/>
          <Route exact path="/admin/invoiceMasterData/invoiceStatusLogv2" element={<InvoiceStatusLogV2Container/>}/>
          <Route exact path="/admin/invoiceMasterData/invoiceCreateLog" element={<InvoiceCreateLogContainer/>}/>

          {/* Routing of the asn part in supplier portal  */}

          <Route exact path="/supplier/asn/home" element={<AsnHomeContainer/>}/>
          <Route exact path="/supplier/asn/sloc-list" element={<AsnSlocListContainer/>}/>
          <Route exact path="/supplier/asn/dashboard" element={<AsnDashboardContainer/>}/>
          <Route exact path="/supplier/asn/nupco-po-list" element={<AnsNupcoPoListContainer/>}/>
          <Route exact path="/supplier/asn/customer-po-list" element={<AsnCustomerPoListContainer/>}/>
          <Route exact path="/supplier/asn/asn-pdf-print" element={<AsnPdfPrintContainer/>}/>
          <Route exact path="/supplier/asn/pod-pdf-print" element={<PodPdfPrintContainer />}/>
          <Route exact path="/supplier/asn/asn-po-list-item" element={<AsnPoListItemContainer/>}/>
          <Route exact path="/supplier/asn/asn-po-selected-item-list" element={<AsnPoSelectedPoItemListContainer/>}/>
          <Route exact path="/supplier/asn/reservation-po" element={<ReservationPoContainer/>}/>
          <Route exact path="/supplier/asn/reservation-po-list" element={<ReservationPoListContainer />}/>
          <Route exact path="/supplier/asn/free-goods-po" element={<FreeGoodsPoContainer/>}/>
          <Route exact path="/supplier/asn/free-goods-po-list" element={<FreeGoodsPoListContainer/>}/>

          {/* Routing of the Rgr part in the supplier portal  */}
          <Route exact path="/supplier/rgr/dashboard" element={<RgrDashboardContainer/>}/>
          <Route exact path="/supplier/rgr/rgr-po-list" element={<RgrPoListContainer/>}/>
          <Route exact path="/supplier/rgr/rgr-po-list-item" element={<RgrPoListItemContainer/>}/>
          <Route exact path="/supplier/asn/rgr-po-selected-list-item" element={<RgrPoSelectedItemListContainer/>}/>
          <Route exact path="/supplier/asn/rgr-items-details" element={<RgrItemsDetailsContainer/>}/>


          {/* Routing of the Cem part in the supplier portal */}
          <Route exact path="/supplier/cem/dashboard" element={<CemDashboardContainer/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

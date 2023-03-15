import React, { useState  , useEffect} from "react";
import { useIntl } from "react-intl";
import HosLogo from "../../assets/hosLogo.png";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "./styles/App.scss";
import { useNavigate } from "react-router-dom";
import { CgChevronDoubleRight } from "react-icons/cg";
import sidebarBg from "../../assets/bg2.jpg";
import HomePgIcon from "../../assets/supplier/sidebar/homepg.svg";
import PurchaseIcon from "../../assets/supplier/sidebar/purchase.svg";
import MedicalIcon from "../../assets/supplier/sidebar/Medical.svg";
import NonMedialIcon from "../../assets/supplier/sidebar/non-medical.svg";
import WasfatyIcon from "../../assets/supplier/sidebar/wasfaty.svg";
import MarketPlaceIcon from "../../assets/supplier/sidebar/marketplace.svg";
import style from "@ashvin27/react-datatable/lib/style";


const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  const intl = useIntl();
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState("Dashboard");

  useEffect(() =>{
    const selectedSupplier = localStorage.getItem("selectedSupplier");
    if(selectedSupplier){
      setActiveMenu(selectedSupplier)
    }
    
  },[])

  const activeMedicalPo = () => {
    localStorage.setItem("selectedSupplier" , "MedicalPo");
    navigate("/supplier/medical-Po");
  };

  const activeDashboard = () =>{
    localStorage.setItem("selectedSupplier" , "Dashboard");
    navigate("/supplier/dashboard")
  };

  const activeMarketPlace = () =>{
    localStorage.setItem("selectedSupplier" , "MarketPlacePo");
    navigate("/supplier/marketPlace-Po")
  }

  const activeNonMedical = () =>{
    localStorage.setItem("selectedSupplier" , "NonMedicalPo");
    navigate("/supplier/nonMedical-Po")
  }

  const activeWasfaty = () =>{
    localStorage.setItem("selectedSupplier" , "WasfatyPo");
    navigate("/supplier/wasfaty-Po")
  }

  return (
    <div className="suppliersideBarContainer">
      <ProSidebar
        image={image ? sidebarBg : false}
        rtl={rtl}
        collapsed={collapsed}
        toggled={toggled}
        className="sideBarContianer"
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              paddingLeft: "40px",
              fontWeight: "bold",
              fontSize: 14,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              display: "flex",
              background: "#4e536d",
              alignItems: "center",
              borderBottom: "1px solid @4e536d",
            }}
          >
            <img
              src={require("../../assets/loginHeader/logo.png")}
              style={{ width: "58px", marginRight: "20px" }}
            />
            <span className="headerTitle">Supplier Portal</span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu>
            <MenuItem
              icon={<img src={HomePgIcon} style={{ width: "23px" }} />}
              active={activeMenu === "Home"}
              onClick={() => navigate('/supplier/home')}
            >
              <span className="spmnText">Home</span>
            </MenuItem>

            {/* adding submenu */}
            <SubMenu
              title={<span style={{ color: "white" }}>Purchase order</span>}
              icon={<img src={PurchaseIcon} style={{ width: "23px" }} />}
              className="spsbmnText"
              open={true}
            >
              <MenuItem
                icon={<img src={HomePgIcon} style={{ width: "23px" }} />}
                active={activeMenu === "Dashboard"}
                onClick={activeDashboard}
              >
                <span className="spmnText">Dashboard</span>
              </MenuItem>

              <MenuItem
                icon={<img src={MedicalIcon} style={{ width: "23px" }} />}
                active={activeMenu === "MedicalPo"}
                onClick={activeMedicalPo}
              >
                <span className="spmnText">Medical PO</span>
              </MenuItem>

              <MenuItem
                icon={<img src={MarketPlaceIcon} style={{ width: "23px" }} />}
                active={activeMenu === "MarketPlacePo"}
                onClick={activeMarketPlace}
              >
                <span className="spmnText">Market Place PO</span>
              </MenuItem>

              <MenuItem
                icon={<img src={NonMedialIcon} style={{ width: "23px" }} />}
                active={activeMenu === "NonMedicalPo"}
                onClick={activeNonMedical}
              >
                <span className="spmnText">Non Medical PO</span>
              </MenuItem>

              <MenuItem
                icon={<img src={WasfatyIcon} style={{ width: "23px" }} />}
                active={activeMenu === "WasfatyPo"}
                onClick={activeWasfaty}
              >
                <span className="spmnText">Wasfaty PO</span>
              </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

export default Aside;

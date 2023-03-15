import React, { useState, useEffect } from "react";
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
import { FaHome, FaTachometerAlt, FaListUl, FaPills } from "react-icons/fa";
import sidebarBg from "../../assets/bg2.jpg";

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  const intl = useIntl();
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState("Dashboard");

  useEffect(() => {
    const selectedSupplier = localStorage.getItem("selectedSupplier");
    if (selectedSupplier) {
      setActiveMenu(selectedSupplier);
    }
  }, []);

  const activeAsnPo = () => {
    localStorage.setItem("selectedSupplier", "AsnPo");
    navigate("/supplier/asn/nupco-po-list");
  };

  const activeDashboard = () => {
    localStorage.setItem("selectedSupplier", "Dashboard");
    navigate("/supplier/asn/dashboard");
  };


  const activeRequestPo = () =>{
    localStorage.setItem("selectedSupplier", "requestReservation");
    navigate("/supplier/asn/reservation-po");
  }

  const activeRequestPoList = () =>{
    localStorage.setItem("selectedSupplier", "requestReservationList");
    navigate("/supplier/asn/reservation-po-list");
  }

  const activeFreeGoodsPo = () =>{
    localStorage.setItem("selectedSupplier", "freeGoodsPo");
    navigate("/supplier/asn/free-goods-po");
  }

  const activeFreeGoodsPoList = () =>{
    localStorage.setItem("selectedSupplier", "freeGoodsPoList");
    navigate("/supplier/asn/free-goods-po-list");
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
              icon={<FaHome size={20} />}
              active={activeMenu === "Home"}
              onClick={() => navigate("/supplier/home")}
            >
              <span className="spmnText">Home</span>
            </MenuItem>
            <MenuItem
              icon={<FaTachometerAlt size={20} />}
              active={activeMenu === "Home"}
              onClick={() => navigate("/supplier/home")}
            >
              <span className="spmnText">ASN Home</span>
            </MenuItem>

            {/* adding submenu */}
            <SubMenu
              title={<span style={{ color: "white" }}>ASN</span>}
              icon={<FaListUl size={20} />}
              className="spsbmnText"
             
            >
              <MenuItem
                icon={<FaTachometerAlt size={20} />}
                active={activeMenu === "Dashboard"}
                onClick={activeDashboard}
              >
                <span className="spmnText">Dashboard</span>
              </MenuItem>

              <MenuItem
                icon={<FaPills size={20} />}
                active={activeMenu === "AsnPo"}
                onClick={activeAsnPo}
              >
                <span className="spmnText">ASN PO List</span>
              </MenuItem>
            </SubMenu>

            {/* 2nd here */}

            <SubMenu
              title={<span style={{ color: "white" }}>Request PO</span>}
              icon={<FaListUl size={20} />}
              className="spsbmnText"
            >
              <MenuItem
                icon={<FaPills size={20} />}
                active={activeMenu === "requestReservation"}
                onClick={activeRequestPo}
                
              >
                <span className="spmnText" style={{fontSize : "12px" , wordWrap :"wrap"}}>Request Reservation </span>
              </MenuItem>

              <MenuItem
                icon={<FaPills size={20} />}
                active={activeMenu === "requestReservationList"}
                onClick={activeRequestPoList}
              >
                <span className="spmnText" style={{fontSize : "12px" , wordWrap :"wrap"}}>Request Reservation List</span>
              </MenuItem>
            </SubMenu>

           
            <SubMenu
              title={<span style={{ color: "white" }}>Free Goods PO</span>}
              icon={<FaListUl size={20} />}
              className="spsbmnText"
            >
              <MenuItem
                icon={<FaPills size={20} />}
                active={activeMenu === "freeGoodsPo"}
                onClick={activeFreeGoodsPo}
              >
                <span className="spmnText" style={{fontSize : "12px" , wordWrap :"wrap"}}>Request For Free Goods PO</span>
              </MenuItem>

              <MenuItem
                icon={<FaPills size={20} />}
                active={activeMenu === "freeGoodsPoList"}
                onClick={activeFreeGoodsPoList}
              >
                <span className="spmnText" style={{fontSize : "12px" , wordWrap :"wrap"}}>Request For Free Goods PO List</span>
              </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

export default Aside;

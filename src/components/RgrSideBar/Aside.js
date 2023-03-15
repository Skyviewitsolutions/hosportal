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

  const activeRgrPo = () => {
    localStorage.setItem("selectedSupplier", "RgrPo");
    navigate("/supplier/rgr/rgr-po-list");
  };

  const activeDashboard = () => {
    localStorage.setItem("selectedSupplier", "Dashboard");
    navigate("/supplier/rgr/dashboard");
  };


  
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
           

            {/* adding submenu */}
            <SubMenu
              title={<span style={{ color: "white" }}>RGR</span>}
              icon={<FaListUl size={20} />}
              className="spsbmnText"
              open={true}
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
                active={activeMenu === "RgrPo"}
                onClick={activeRgrPo}
              >
                <span className="spmnText">RGR PO List</span>
              </MenuItem>
            </SubMenu>

            {/* 2nd here */}

            
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

export default Aside;

import React, { useEffect, useState } from "react";
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

import {
  FaTachometerAlt,
  FaGem,
  FaBalanceScale,
  FaList,
  FaRunning,
  FaServer,
  FaGithub,
  FaKey,
  FaUsers,
  FaGlobe,
  FaBars,
  FaCubes,
  FaInfoCircle,
  FaDumpster,
  FaAngleDoubleRight,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { CgChevronDoubleRight } from "react-icons/cg";
import sidebarBg from "../../assets/bg2.jpg";


const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  const intl = useIntl();
  const navigate = useNavigate();

  const [submenu, setSubmenu] = useState("");
  const [activeSubmenuItem , setActiveSubMenuItem] = useState("");

  const updateSubmenu = (val) => {
   
    if (submenu !== val) {
      localStorage.setItem("selectedAdminMenu", JSON.stringify(val));
      setSubmenu(val);
    } else if (submenu === val) {
      setSubmenu("");
    }
  };


  const handleActiveMenu = (url , val) =>{
    navigate(url);
    setActiveSubMenuItem(val)
    localStorage.setItem("activeMenuItem" , JSON.stringify(val))
  }

  const activeMenu = {
    background : "#99b6d9"
  }

  useEffect(() => {
    const selectedAdminMenu = localStorage.getItem("selectedAdminMenu");
    setSubmenu(JSON.parse(selectedAdminMenu));

    const selectedActiveMenuItem = localStorage.getItem("activeMenuItem")
    setActiveSubMenuItem(JSON.parse(selectedActiveMenuItem))

    console.log(selectedActiveMenuItem , "selectedACitvemenu item")
    console.log(selectedAdminMenu , "second")
  }, []);

  

  return (
    <div className="sideBarContainer">
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
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              display: "flex",
              background: "#1d2445",
              alignItems: "center",
            }}
          >
            <img src={HosLogo} style={{ width: "60px", marginRight: "20px" }} />
            {intl.formatMessage({ id: "sidebarTitle" })}
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            {/* first menu */}
            <MenuItem icon={<FaTachometerAlt />}>
              <span className="submenuText">Dashboard</span>
            </MenuItem>

            {/* second menu */}
            <SubMenu
              title={<span className="submenuText">User</span>}
              icon={<FaUsers />}
              open={submenu === "user"}
              onClick={() => updateSubmenu("user")}
            >
              <MenuItem
                icon={<CgChevronDoubleRight />}
                onClick={() => handleActiveMenu("/user/list" , "ibdUsers")}
                style={activeSubmenuItem === "ibdUsers" ?activeMenu : null}
                
              >
                <span className="submenuText">IBD Users</span>
              </MenuItem>
             
            </SubMenu>

            {/* Main customer */}
            <SubMenu
              title={<span className="submenuText">Master Collection</span>}
              icon={<FaUsers />}
              open={submenu === "masterCollection"}
              onClick={() => updateSubmenu("masterCollection")}
            >
              <MenuItem
                icon={<CgChevronDoubleRight />}
                onClick={() => handleActiveMenu("/countryMaster/list" , "CountryMaster")}
                style={activeSubmenuItem === "CountryMaster" ?activeMenu : null}
              >
                <span className="submenuText">Country Master</span>
              </MenuItem>
              <MenuItem
                icon={<CgChevronDoubleRight />}
                onClick={() => handleActiveMenu("/plant/list" , "plant")}
                style={activeSubmenuItem === "plant" ?activeMenu : null}
              >
                <span className="submenuText">Plant</span>
              </MenuItem>
              <MenuItem
                icon={<CgChevronDoubleRight />}
                onClick={() => handleActiveMenu("/userType/list" , "userType")}
                style={activeSubmenuItem === "userType" ?activeMenu : null}
              >
                <span className="submenuText">User Type</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Storage Location</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">User Category</span>
              </MenuItem>
              <MenuItem
                icon={<CgChevronDoubleRight />}
                onClick={() => navigate("/ministry/list")}
              >
                <span className="submenuText">Ministry</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Vendor</span>
              </MenuItem>
            </SubMenu>

            {/* third & fourth menu */}
            <MenuItem icon={<FaCubes />}>
              <span className="submenuText">Stock</span>
            </MenuItem>
            <MenuItem icon={<FaCubes />}>
              <span className="submenuText">Stock Log</span>
            </MenuItem>

            {/* fifth menu */}
            <SubMenu
              title={<span className="submenuText">Master Data</span>}
              icon={<FaDumpster />}
              open={submenu === "masterData"}
              onClick={() => updateSubmenu("masterData")}
            >
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Add Material List</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Material Master Log</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Material Category Master</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Reservation List</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Reservation Log</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">PD Detail List</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">PD Detail Log</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Customer Category</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Sales Order Status</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Sales Order Status Log</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Sales Order Create</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Sales Order Create</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">PO Download</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Vendor Master List</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Vendor Master Log</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Hss Master</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Hss Master Log</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">AUOM</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">AUOM Logs</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">GTIN</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span>GTIN Logs</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Storage Location</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Storage Location Logs</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Plant</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Plant Logs</span>
              </MenuItem>
            </SubMenu>

            {/* sixth menu */}
            <SubMenu
              title={<span className="submenuText">Invoice Master Data</span>}
              icon={<FaDumpster />}
              open={submenu === "invoiceMasterData"}
              onClick={() => updateSubmenu("invoiceMasterData")}
            >
              <MenuItem icon={<CgChevronDoubleRight />} 
               onClick={() => handleActiveMenu("/admin/invoiceMasterData/invoiceDetails" , "invoiceDetails")}
               style={activeSubmenuItem === "invoiceDetails" ?activeMenu : null}
              >
                <span className="submenuText">Invoice Details</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}
               onClick={() => handleActiveMenu("/admin/invoiceMasterData/invoiceMasterDetails" , "invoiceMasterDetails")}
               style={activeSubmenuItem === "invoiceMasterDetails" ?activeMenu : null}
              >
                <span className="submenuText">Invoice Master Details</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />} 
               onClick={() => handleActiveMenu("/admin/invoiceMasterData/invoiceMasterHeaders" , "invoiceMasterHeaders")}
               style={activeSubmenuItem === "invoiceMasterHeaders" ?activeMenu : null}
              >
                <span className="submenuText">Invoice Master Headers</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />} 
               onClick={() => handleActiveMenu("/admin/invoiceMasterData/noGrLogs" , "noGrPo")}
               style={activeSubmenuItem === "noGrPo" ?activeMenu : null}
              >
                <span className="submenuText">No GR PO's Log</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />} 
               onClick={() => handleActiveMenu("/admin/invoiceMasterData/invoiceMasterLog" , "invoiceMasterLog")}
               style={activeSubmenuItem === "invoiceMasterLog" ?activeMenu : null}
              >
                <span className="submenuText">Invoice Master Log</span>
              </MenuItem>
              {/* <MenuItem icon={<CgChevronDoubleRight /> } 
               onClick={() => handleActiveMenu("/admin/invoiceMasterData/invoiceStatusLog" , "invoiceStatusLog")}
               style={activeSubmenuItem === "invoiceStatusLog" ?activeMenu : null}
              >
                <span className="submenuText">Invoice Status Log</span>
              </MenuItem> */}
              <MenuItem icon={<CgChevronDoubleRight />} 
               onClick={() => handleActiveMenu("/admin/invoiceMasterData/invoiceStatusLogv2" , "invoiceStatusLogv2")}
               style={activeSubmenuItem === "invoiceStatusLogv2" ?activeMenu : null}
              >
                <span className="submenuText">Invoice Status Log V2</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />} 
               onClick={() => handleActiveMenu("/admin/invoiceMasterData/invoiceCreateLog" , "invoiceCreateLog")}
               style={activeSubmenuItem === "invoiceCreateLog" ?activeMenu : null}
              >
                <span className="submenuText">Invoice Create Log</span>
              </MenuItem>
            </SubMenu>

            {/* seventh menu */}
            <SubMenu
              title={<span className="submenuText">Free Goods Req</span>}
              icon={<FaDumpster />}
              open={submenu === "freeGoodsReq"}
              onClick={() => updateSubmenu("freeGoodsReq")}
            >
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Free Goods</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Free Goods Header</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Free Goods Log</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Free Goods Item Log</span>
              </MenuItem>
            </SubMenu>

            {/* Eight menu */}
            <SubMenu
              title={<span className="submenuText">Ministry</span>}
              icon={<FaBalanceScale />}
              open={submenu === "ministry"}
              onClick={() => updateSubmenu("ministry")}
            >
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">View List</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Add Ministry</span>
              </MenuItem>
            </SubMenu>

            {/* Ninth menu */}
            <SubMenu
              title={<span className="submenuText">Storage Type</span>}
              icon={<FaBalanceScale />}
              open={submenu === "storageType"}
              onClick={() => updateSubmenu("storageType")}
            >
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">View List</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Add Storage Type</span>
              </MenuItem>
            </SubMenu>

            {/* tenth menu */}
            <SubMenu
              title={<span className="submenuText">PGI Detail</span>}
              icon={<FaInfoCircle />}
              open={submenu === "pgiDetail"}
              onClick={() => setSubmenu("pgiDetail")}
            >
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText"> List</span>
              </MenuItem>
            </SubMenu>

            {/* Eleventh menu */}
            <SubMenu
              title={<span className="submenuText">ASN GR Detail</span>}
              icon={<FaInfoCircle />}
              open={submenu === "asnGrDetail"}
              onClick={() => updateSubmenu("asnGrDetail")}
            >
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText"> List</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">GR Log List</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">GR Item Log List</span>
              </MenuItem>
            </SubMenu>

            {/* 12th menu */}
            <SubMenu
              title={<span className="submenuText">ASN GR Detail</span>}
              icon={<FaCubes />}
              open={submenu === "dashboard"}
              onClick={() => updateSubmenu("dashboard")}
            >
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText"> List</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">GR Log List</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">GR Item Log List</span>
              </MenuItem>
            </SubMenu>

            {/* 13th menu */}
            <MenuItem icon={<FaCubes />}>
              <span className="submenuText">Enable RGR</span>
            </MenuItem>

            {/* 14th menu */}
            <MenuItem icon={<FaCubes />}>
              <span className="submenuText">IBD ASN Detail Report</span>
            </MenuItem>

            {/* 15th menu */}
            <SubMenu
              title={
                <span className="submenuText"> Reservation Req Detail</span>
              }
              icon={<FaInfoCircle />}
              open={submenu === "reservationReqDetail"}
              onClick={() => updateSubmenu("reservationReqDetail")}
            >
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">List</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Reservation Log List</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Reservation Item Log List</span>
              </MenuItem>
            </SubMenu>

            {/* 16th menu */}
            <SubMenu
              title={<span className="submenuText">Sales Org</span>}
              icon={<FaBalanceScale />}
              open={submenu === "salesOrg"}
              onClick={() => updateSubmenu("salesOrg")}
            >
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">View List</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Add Sales</span>
              </MenuItem>
            </SubMenu>

            {/* 17th menu */}
            <SubMenu
              title={<span className="submenuText">Vaccine BOM</span>}
              icon={<FaBalanceScale />}
              open={submenu === "vaccineBom"}
              onClick={() => updateSubmenu("vaccineBom")}
            >
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">View List</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Add Vaccine BOM</span>
              </MenuItem>
            </SubMenu>

            {/* 18th menu */}
            <SubMenu
              title={<span className="submenuText">BOM Assignment</span>}
              icon={<FaBalanceScale />}
              open={submenu === "bomAssignment"}
              onClick={() => updateSubmenu("bomAssignment")}
            >
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">View List</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Add BOM Assignment</span>
              </MenuItem>
            </SubMenu>

            {/* 19th menu */}
            <MenuItem icon={<FaGlobe />}>
              <span className="submenuText">Supplying Plant</span>
            </MenuItem>
            <MenuItem icon={<FaBars />}>
              <span className="submenuText">Sales Order Log</span>
            </MenuItem>
            <MenuItem icon={<FaBars />}>
              <span className="submenuText">Vaccine GR GI</span>
            </MenuItem>

            {/* 20th menu */}
            <SubMenu
              title={
                <span className="submenuText">Replenishment Planning</span>
              }
              icon={<FaBalanceScale />}
              open={submenu === "replenishmentPlanning"}
              onClick={() => updateSubmenu("replenishmentPlanning")}
            >
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Planning Master</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Add Planning</span>
              </MenuItem>
            </SubMenu>

            {/* 21th menu */}
            <SubMenu
              title={<span className="submenuText">Assortment</span>}
              icon={<FaBalanceScale />}
              open={submenu === "assortment"}
              onClick={() => updateSubmenu("assortment")}
            >
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Assortment Master</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Assortment List</span>
              </MenuItem>
            </SubMenu>

            {/* 22th menu */}
            <MenuItem icon={<FaRunning />}>
              <span className="submenuText">Planning Status</span>
            </MenuItem>

            {/* 23th menu */}
            <MenuItem icon={<FaRunning />}>
              <span className="submenuText">Planning Run</span>
            </MenuItem>

            {/* 24th menu */}
            <MenuItem icon={<FaRunning />}>
              <span className="submenuText">Planning Reports</span>
            </MenuItem>

            {/* 25th menu */}
            <SubMenu
              title={<span className="submenuText">Talend Webservices</span>}
              icon={<FaServer />}
              open={submenu === "talendWebServices"}
              onClick={() => updateSubmenu("talendWebServices")}
            >
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Add Talend Webservices</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">Talend Webservices Index</span>
              </MenuItem>
            </SubMenu>

            {/* 26th menu */}
            <SubMenu
              title={<span className="submenuText">Reversal</span>}
              icon={<FaKey />}
              open={submenu === "reversal"}
              onClick={() => updateSubmenu("reversal")}
            >
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">GI Order</span>
              </MenuItem>
              <MenuItem icon={<CgChevronDoubleRight />}>
                <span className="submenuText">RHD GI Order</span>
              </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

export default Aside;

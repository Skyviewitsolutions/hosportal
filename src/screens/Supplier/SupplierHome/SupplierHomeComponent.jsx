import React from "react";
import SupplierWelcome from "../../../components/SupplierWelcome/SupplierWelcome";
import SupplierHeaderContainer from "../../../components/SupplierHeader/SupplierHeaderContainer";
import "./supplierHome.css";
import SupplierCardContainer from "../../../components/SupplierCard/SupplierCardContainer";
import Bill from "../../../assets/supplier/bill.svg";
import TimeManagement from "../../../assets/supplier/time-management2.svg";
import AdvancedShiping from "../../../assets/supplier/advancedShipping.svg";
import Reports from "../../../assets/supplier/report2.svg";
import { useNavigate } from "react-router-dom";

const SupplierHomeComponent = (props) => {

  const {openDashboard} = props
  const navigate = useNavigate();

  return (
    <>
      <div className="suphome">
        <SupplierWelcome />
        <SupplierHeaderContainer />
        <div className="supHomeCont">
          <svg
            viewBox="0 0 12 1.2"
            classname="__web-inspector-hide-shortcut__ svgtext"
          >
            <text
              classname="fa_tahoma"
              x={0}
              y={1}
              textAnchor="start"
              fontSize="0.7"
              fill="none"
              strokeWidth=".015"
              stroke="#e06e0e"
              fontFamily="sans-serif"
              width="100%"
              height="100%"
            >
              OUR SERVICES
            </text>
          </svg>

          <p
            className="mt-2 px-2"
            style={{ fontSize: "21px", lineHeight: "26px" }}
          >
            <b>
              Welcome to Supplier Portal, <br /> please select one of the
              services below:
            </b>
          </p>

          {/* here we are adding card  */}
          <div className="suppCard">
            <SupplierCardContainer
              image={AdvancedShiping}
              text1="Advanced Shipping"
              text2="Notification (ASN)"
              onclick={() => navigate("/supplier/asn/home")}
            />
            <SupplierCardContainer
              image={TimeManagement}
              text1="Request for GR"
              text2="(RGR)"
              onclick={()=> navigate("/supplier/rgr/dashboard")}
            />
            <SupplierCardContainer image={Reports} text1="NUPCO CARE" />
            <SupplierCardContainer
              image={Bill}
              text1="Supplier Invoice"
              onclick={openDashboard}
            />
            <SupplierCardContainer
              image={TimeManagement}
              text1="Contract Expediting"
              text2="Management (CMS)"
              onclick={() => navigate("/supplier/cem/dashboard")}
            />
            <SupplierCardContainer image={Reports} text1="Reports" />
          </div>

          <div className="faq">
            <h6>FAQ</h6>
          </div>
          <div className="guide">
            <h6>Supplier's Journey Guide</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupplierHomeComponent;

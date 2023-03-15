import React , {useState ,useEffect} from "react";
import CemHeaderComponent from "./CemHeaderComponent";
import { endpoints } from "../../services/endpoints,";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const CemHeaderContainer = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const users = localStorage.getItem("usersData");
  const usersData = JSON.parse(users);

  const logoutUrl = endpoints.supplier.logOut;

  const logout = () => {
    const headers = { Authorization: `NUPCO=${usersData.MemberToken}` };
    setLoading(true);
    const val = {
      UserId: usersData.UserId,
      AcceessToken: usersData.MemberToken,
    };

    axios
      .post(logoutUrl, val, { headers: headers })
      .then((res) => {
        setLoading(false);
        if (res.data.status === "Success") {
          localStorage.removeItem("usersData");
          localStorage.removeItem("selectedSupplier");
          navigate("/supplier/login");
        } else if (res.data.status === "Failed") {
          toast(res.data.statusText, { type: "error" });
        }
      })
      .catch((err) => {
        setLoading(false);
        toast("Something went wrong", { type: "error" });
      });
  };
  return (
    <>
      <CemHeaderComponent
        logout={logout}
        vendorCode={usersData && usersData.VendorCode}
        name={usersData && usersData.FullName}
      />
      <ToastContainer />
    </>
  );
};

export default CemHeaderContainer;

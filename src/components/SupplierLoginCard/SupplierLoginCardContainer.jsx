import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SupplierLoginCardComponent from "./SupplierLoginCardComponent";
import axios from "axios";
import { endpoints } from "../../services/endpoints,";

const SupplierLoginCardContainer = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const url = endpoints.supplier.login;

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const submit = (event) => {
    
    event.preventDefault();
    if (data.email.length < 1) {
      setErrors({ email: "Vendor ID must not be blank" });
    } else if (data.password.length < 1) {
      setErrors({ password: "Password must not be blank ." });
    } else if (data.password.length < 3) {
      setErrors({ password: "Password must be greater than 2 char *" });
    } else {
      setErrors({});
      setLoading(true);

      const val = {
        UserName: data.email,
        Password: data.password,
        IPAddress: "1.1.1.1",
        Longitude: "0.00000",
        Latitude: "0.0000",
      };

      axios
        .post(url, val)
        .then((res) => {
          setLoading(false);
          console.log(res , "this is the response which we are getting here")
          if (res.data.status === "Success") {
            setErrors({});
            const usersData = res.data.User;
            localStorage.setItem("usersData", JSON.stringify(usersData));
            navigate("/supplier/home");
          } else if (res.data.status === "Failed") {
            setErrors({ password: "Invalid Credentials !" });
          } else {
            setErrors({});
          }
        })
        .catch((error) => {
          setLoading(false);
        });
    }
  };
  return (
    <>
      <SupplierLoginCardComponent
        data={data}
        setData={setData}
        submit={submit}
        errors={errors}
        loading={loading}
      />
    </>
  );
};

export default SupplierLoginCardContainer;

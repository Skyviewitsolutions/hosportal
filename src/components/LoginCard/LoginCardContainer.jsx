// This is the loginCardContainer ;

import React, { useState } from "react";
import LoginCardComponent from "./LoginCardComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { endpoints } from "../../services/endpoints,";

const LoginCardContainer = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const url = endpoints.admin.login;
  
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const submit = (event) => {
    event.preventDefault();
    if (data.email.length < 1) {
      setErrors({ email: "E-mail must not be blank" });
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)
    ) {
      setErrors({ email: "Please enter valid email" });
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
          
          if (res.data.status === "Success") {
            setErrors({});
            const usersData = res.data.User;
            localStorage.setItem("adminUsersData" , JSON.stringify(usersData));
            navigate("/home")
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
      <LoginCardComponent
        data={data}
        setData={setData}
        submit={submit}
        errors={errors}
        loading={loading}
      />
    </>
  );
};

export default LoginCardContainer;

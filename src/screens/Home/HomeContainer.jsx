import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import { useNavigate } from "react-router-dom";

const HomeContainer = () => {
  const navigate = useNavigate();
  const users = localStorage.getItem("adminUsersData");
  const usersData = JSON.parse(users);

  useEffect(() => {
    if (!users) {
        navigate("/");
    }
  }, []);
  return (
    <>
      <HomeComponent />
    </>
  );
};

export default HomeContainer;

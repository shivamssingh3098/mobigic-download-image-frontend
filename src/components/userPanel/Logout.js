import React, { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Logout = (props) => {
  const navigate = useNavigate();
  const logout = async () => {
    await axios.post("/api/v1/users/logout");
    localStorage.clear();
    props.handleLogin();
    navigate("/");
  };
  useEffect(() => {
    logout();
  }, []);
};

export default Logout;

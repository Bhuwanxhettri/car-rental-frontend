import React, { useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Signout = () => {
  const history = useNavigate();

  useEffect(() => {
    localStorage.removeItem("User");
    localStorage.removeItem("token");
    history("/");
    window.location.reload();
  });

  return (
    <>
      <h1>Log Out</h1>
    </>
  );
};

export default Signout;

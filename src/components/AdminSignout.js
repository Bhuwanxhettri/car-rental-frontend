import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminSignout = () => {
  const URL = process.env.REACT_APP_BASE_URL;

  const history = useNavigate();

  useEffect(() => {
    fetch(`${URL}/adminsignout`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        localStorage.removeItem("Admin");
        history("/");
        if (res.status != 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>Log Out</h1>
    </>
  );
};

export default AdminSignout;

import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AdminContext } from "../App";

const AdminSignin = () => {
  const { adminstate, dispatchadmin } = useContext(AdminContext);
  const URL = process.env.REACT_APP_BASE_URL;
  const adminHistory = useNavigate();
  const [adminName, setAdminName] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signinAdmin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(`${URL}/signinAdmin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          adminName,
          adminPassword,
        }),
      });

      const data = await res.json();

      if (res.status === 400 || !data) {
        toast.error("Invalid Credentials");
      } else {
        dispatchadmin({ type: "ADMIN", payload: true });
        toast.success("Signin Successful");
        adminHistory("/dashboard");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <>
      <header className="header">
        <div id="menu-btn" className="fas fa-bars"></div>

        <a href="#" className="logo">
          {" "}
          <span>Vehicle</span>Book{" "}
        </a>

        <nav className="navbar">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <a href="/#contact">Contact</a>
        </nav>

        <div id="login-btn">
          <button className="btn">
            <NavLink className="nav-link" to="/signin">
              login
            </NavLink>
          </button>
        </div>
      </header>

      <div className="maincontainer">
        <div className="firstcontainer">
          <div className="titled"></div>

          <div id="adminsignin" className="content">
            <h2>Signin As Admin</h2>
            <form method="POST">
              <div className="user-details">
                <div className="input-box">
                  <span className="details">User Name</span>
                  <input
                    type="text"
                    value={adminName}
                    onChange={(e) => setAdminName(e.target.value)}
                    placeholder="Enter your user name"
                  />
                </div>

                <div className="input-box">
                  <span className="details">Password</span>
                  <input
                    type="password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div className="button">
                <button type="submit" className="bg-blue-400 w-full text-3xl py-3 text-white" onClick={signinAdmin}>
                  {isLoading ? (
                    <>
                      Loading...
                    </>
                  ) : (
                    "Signin"
                  )}
                </button>
              </div>
            </form>
            <button className="btn">
              <NavLink className="nav-link" to="/signin">
                Signin As User
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSignin;

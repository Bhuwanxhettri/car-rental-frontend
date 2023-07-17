import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";

import { AdminContext } from "../../App";

const Rentbikereports = () => {
  const { adminState, dispatchadmin } = useContext(AdminContext);

  const [income, setIncome] = useState([]);
  let allsoldItems = [];
  const URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";
  const getrentbikeincome = async () => {
    try {
      const res = await fetch(`${URL}/getRentCar`, {
        method: "GET",
      });
      const data = await res.json();
      setIncome(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getrentbikeincome();
  }, []);

  const Loginbutton = () => {
    if (adminState) {
      return (
        <div>
          <button className="logoutbtnDash">
            <NavLink className="nav-link" to="/">
              logout
            </NavLink>
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button className="logoutbtnDash">
            <NavLink className="nav-link" to="/signin">
              login
            </NavLink>
          </button>
        </div>
      );
    }
  };

  return (
    <>
      <div className="sidebar">
        <div className="logo-details">
          <i className=""></i>
          <span className="text-red-500 text-3xl px-2">Vehicles</span>
          <span className="logo_name">Book</span>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink className="dashlinks" to="/dashboard">
              <i className="bx bx-grid-alt"></i>
              <span className="allLinks_name">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="dashlinks" to="/addbikes">
              <i className="fa-sharp fa-solid fa-square-plus"></i>
              <span className="allLinks_name">Add Bikes</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="dashlinks" to="/getrentbikesforadmin">
              <i className="fa-sharp fa-solid fa-motorcycle"></i>
              <span className="allLinks_name">Available Rent Vehicles</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="dashlinks" to="/rentbikesreports">
              <i className="fa-solid fa-sack-dollar"></i>
              <span className="allLinks_name">Rent Vehicles Income</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="dashlinks" to="/availableusers">
              <i className="fa-solid fa-users"></i>
              <span className="allLinks_name">Available Users</span>
            </NavLink>
          </li>
        </ul>

        <div className="logoutbtnDashDiv">
          <Loginbutton />
        </div>
      </div>

      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <span className="dashboard">Dashboard</span>
          </div>

          <div className="profile-details">
            <span className="admin_name">Admin</span>
          </div>
        </nav>

        <div className="salecartableDiv">
          <h1 className="heading">
            <span>Rented Bikes Income Report</span>
          </h1>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr >
                  <th className="px-6 py-3 bg-gray-50 text-left text-3xl leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    BRAND
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-3xl leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    MODEL
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-3xl leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    REQUIRED HOURS
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-3xl leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    RENT PER HOUR
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-3xl leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    TOTAL BILL
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {income?.map((data) => {
                  return (
                    <>
                      {data?.cartItems.map((item) => {
                        return (
                          <tr key={item._id}>
                            <td className="px-6 py-4 whitespace-no-wrap">{item.brand}</td>
                            <td className="px-6 py-4 whitespace-no-wrap">{item.model}</td>
                            <td className="px-6 py-4 whitespace-no-wrap">{item.requiredhours}</td>
                            <td className="px-6 py-4 whitespace-no-wrap">{item.rentperhour}</td>
                            <td className="px-6 py-4 whitespace-no-wrap">{item.totalbill}</td>
                          </tr>
                        );
                      })}
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>



        </div>
      </section>
    </>
  );
};

export default Rentbikereports;

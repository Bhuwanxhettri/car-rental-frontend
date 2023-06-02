import React, { createContext, useReducer } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import AdminSignin from "./components/AdminSignin";
import AdminSignout from "./components/AdminSignout";
import Addbikes from "./components/dashboardComponents/Addbikes";
import Rentbikereports from "./components/dashboardComponents/Rentbikereports";
import Availableusers from "./components/dashboardComponents/Availableusers";
import Getrentbikes from "./components/dashboardComponents/Getrentbikes";
import Mycart from "./components/Mycart";
import Rentabike from "./components/Rentabike";
import Rentbikecart from "./components/Rentbikecart";
import Rentbikereviews from "./components/Rentbikereviews";
import Signout from "./components/Signout";
import ExploreRentBike from "./components/ExploreRentBike";

import { initialState, reducer } from "../src/reducer/UseReducer";
import {
  adminInitialState,
  adminreducer,
} from "../src/reducer/UseReducerAdmin";
// import dotenv from "dotenv";
// dotenv.config();


export const UserContext = createContext();
export const AdminContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [adminState, dispatchadmin] = useReducer(
    adminreducer,
    adminInitialState
  );

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signout" element={<Signout />} />
          <Route path="/mycart" element={<Mycart />} />
          <Route path="/rentbike" element={<Rentabike />} />
          <Route path="/rentbikecart" element={<Rentbikecart />} />
          <Route path="/rentbikereviews" element={<Rentbikereviews />} />
          <Route path="/exploreRentBikes" element={<ExploreRentBike />} />
        </Routes>
      </UserContext.Provider>
      <AdminContext.Provider value={{ adminState, dispatchadmin }}>
        <Routes>
          <Route path="/adminsignin" element={<AdminSignin />} />
          <Route path="/adminsignout" element={<AdminSignout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addbikes" element={<Addbikes />} />
          <Route path="/rentbikesreports" element={<Rentbikereports />} />
          <Route path="/availableusers" element={<Availableusers />} />
          <Route path="/getrentbikesforadmin" element={<Getrentbikes />} />
        </Routes>
      </AdminContext.Provider>
    </>
  );
};

export default App;

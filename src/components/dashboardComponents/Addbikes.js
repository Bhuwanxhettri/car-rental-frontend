import React, { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { AdminContext } from "../../App";

const Addbikes = () => {
  const { adminState, dispatchadmin } = useContext(AdminContext);
  const URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

  const history = useNavigate();
  const [file, setFile] = useState();
  const [bike, setBike] = useState({
    brand: "",
    model: "",
    year: "",
    color: "",
    enginecc: "",
    maxpower: "",
    airbags: "",
    rearcamera: "",
    price: "",
    retailprice: "",
    quantity: "",
  });

  let name, value;

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setBike({ ...bike, [name]: value });
  };

  const handleFile = (e) => {
    const myfile = e.target.files[0];
    setFile({ ...bike, myfile });
  };

  const postData = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("brand", file.brand);
    formData.append("model", file.model);
    formData.append("year", file.year);
    formData.append("color", file.color);
    formData.append("enginecc", file.enginecc);
    formData.append("maxpower", file.maxpower);
    formData.append("airbags", file.airbags);
    formData.append("rearcamera", file.rearcamera);
    formData.append("price", file.price);
    formData.append("retailprice", file.retailprice);
    formData.append("quantity", file.quantity);
    formData.append("myfile", file.myfile);

    const res = await fetch(`${URL}/addbikes`, {
      method: "POST",
      body: formData,
    });
  };

  const [rentFile, setRentFile] = useState();
  const [rentbike, setRentBike] = useState({
    brand: "",
    model: "",
    year: "",
    color: "",
    seats: "",
    price: "",
    rent: "",
  });

  let rentName, rentValue;

  const handleRentInputs = (e) => {
    rentName = e.target.name;
    rentValue = e.target.value;

    setRentBike({ ...rentbike, [rentName]: rentValue });
  };

  const handleRentFile = (e) => {
    const myrentfile = e.target.files[0];
    setRentFile({ ...rentbike, myrentfile });
  };

  const postRentData = async (e) => {
    e.preventDefault();
    let rentData = new FormData();
    rentData.append("brand", rentFile.brand);
    rentData.append("model", rentFile.model);
    rentData.append("year", rentFile.year);
    rentData.append("color", rentFile.color);
    rentData.append("seats", rentFile.seats);
    rentData.append("price", rentFile.price);
    rentData.append("rent", rentFile.rent);
    rentData.append("myrentfile", rentFile.myrentfile);
    const res = await fetch(`${URL}/addrentbikes`, {
      method: "POST",
      body: rentData,
    });

    if (res.status === 201) {
      setRentBike({
        brand: "",
        model: "",
        year: "",
        color: "",
        seats: "",
        price: "",
        rent: "",
      })
    }
  };



  const Loginbutton = () => {
    if (adminState) {
      return (
        <div>
          <button className="logoutbtnDash">
            <NavLink className="nav-link" to="/adminsignout">
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

  useEffect(() => {
   
  }, [rentbike])

  return (
    <>
      <div className="sidebar">
        <div className="logo-details">
          <i className=""></i>
          <span className="logo_name1">Bike</span>
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
              <i class="fa-sharp fa-solid fa-square-plus"></i>
              <span className="allLinks_name">Add Bikes</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="dashlinks" to="/getrentbikesforadmin">
              <i class="fa-sharp fa-solid fa-motorcycle"></i>
              <span className="allLinks_name">Available Rent Vheciles</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="dashlinks" to="/rentbikesreports">
              <i class="fa-solid fa-sack-dollar"></i>
              <span className="allLinks_name">Rent Vheciles Income</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="dashlinks" to="/availableusers">
              <i class="fa-solid fa-users"></i>
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
        <div className="home-content ">
          <div className="sales-boxes">
            {/* Rent File */}
            <div className="recent-sales box">
              <h1 className="text-3xl py-8">
                <span>Add Bikes For Rent</span>
              </h1>
              <form
                method="POST"
                className="grid grid-cols-2 gap-6"
                name="rentform"
                id="myrentform"
              >
                <div className="mb-4">
                  <label htmlFor="brand" className="block text-3xl font-medium text-gray-700">
                    Brand:
                  </label>
                  <input
                    type="text"
                    name="brand"
                    id="brand"
                    value={rentbike.brand}
                    onChange={handleRentInputs}
                    placeholder="Enter Bike Brand"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-3xl border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="model" className="block text-3xl font-medium text-gray-700">
                    Model:
                  </label>
                  <input
                    type="text"
                    name="model"
                    id="model"
                    value={rentbike.model}
                    onChange={handleRentInputs}
                    placeholder="Enter Bike Model"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-3xl border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="year" className="block text-3xl font-medium text-gray-700">
                    Year:
                  </label>
                  <input
                    type="text"
                    name="year"
                    id="year"
                    value={rentbike.year}
                    onChange={handleRentInputs}
                    placeholder="Manufacturing Year"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-3xl border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="color" className="block text-3xl font-medium text-gray-700">
                    Color:
                  </label>
                  <input
                    type="text"
                    name="color"
                    id="color"
                    value={rentbike.color}
                    onChange={handleRentInputs}
                    placeholder="Enter Bike Color"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-3xl border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="seats" className="block text-3xl font-medium text-gray-700">
                    Seats:
                  </label>
                  <input
                    type="text"
                    name="seats"
                    id="seats"
                    value={rentbike.seats}
                    onChange={handleRentInputs}
                    placeholder="Enter Bike Seats"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-3xl border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="price" className="block text-3xl font-medium text-gray-700">
                    Bike Price:
                  </label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    value={rentbike.price}
                    onChange={handleRentInputs}
                    placeholder="Enter bike price"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-3xl border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="rent" className="block text-3xl font-medium text-gray-700">
                    Bike Rent:
                  </label>
                  <input
                    type="text"
                    name="rent"
                    id="rent"
                    value={rentbike.rent}
                    onChange={handleRentInputs}
                    placeholder="Enter rent per hour"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-3xl border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="image" className="block text-3xl font-medium text-gray-700">
                    Picture:
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    onChange={handleRentFile}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-3xl border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <button
                    type="submit"
                    name="submit"
                    onClick={postRentData}
                    className="inline-flex w-full justify-center py-2 px-4 border border-transparent shadow-sm text-3xl font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Addbikes;

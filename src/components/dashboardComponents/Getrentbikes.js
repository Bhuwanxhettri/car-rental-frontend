import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";

import { AdminContext } from "../../App";
const CAR_DATA = [
  {
    "_id": { "$oid": "647a0ef401bf515ecf492852" },
    "availability": "Available for rent",
    "bookedHours": { "$numberInt": "0" },
    "brand": "Toyota",
    "model": "Corolla",
    "year": "2022",
    "color": "Silver",
    "seats": "5",
    "price": "250",
    "rent": "30",
    "fileName": "Toyota-Corolla-2022.jpg",
    "filePath": "https://www.toyota.com/imgix/responsive/images/mlp/colorizer/2022/corolla/1G3/1.png?bg=fff&fm=webp&w=930",
    "fileType": "image/jpeg",
    "fileSize": "61350",
    "createdAt": { "$date": { "$numberLong": "1685720820293" } },
    "updatedAt": { "$date": { "$numberLong": "1685720820293" } },
    "__v": { "$numberInt": "0" }
  },
  {
    "_id": { "$oid": "647a0ef401bf515ecf492853" },
    "availability": "Available for rent",
    "bookedHours": { "$numberInt": "0" },
    "brand": "Honda",
    "model": "CBR600RR",
    "year": "2023",
    "color": "Red",
    "price": "350",
    "rent": "25",
    "fileName": "Honda-CBR600RR-2023.jpg",
    "filePath": "https://www.hondaprokevin.com/wp-content/uploads/2022/09/2023-Honda-CBR600RR-Sport-Bike-Motorcycle-USA-Top-Speed-Review-CBR.jpg",
    "fileType": "image/jpeg",
    "fileSize": "57890",
    "createdAt": { "$date": { "$numberLong": "1685720820293" } },
    "updatedAt": { "$date": { "$numberLong": "1685720820293" } },
    "__v": { "$numberInt": "0" }
  },
  {
    "_id": { "$oid": "647a0ef401bf515ecf492854" },
    "availability": "Available for rent",
    "bookedHours": { "$numberInt": "0" },
    "brand": "Chevrolet",
    "model": "Camaro",
    "year": "2022",
    "color": "Yellow",
    "seats": "4",
    "price": "350",
    "rent": "30",
    "fileName": "Chevrolet-Camaro-2022.jpg",
    "filePath": "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2022/performance/camaro/mov/01-images/2022-chevrolet-camaro-premier-coupe.jpg?imwidth=960",
    "fileType": "image/jpeg",
    "fileSize": "67820",
    "createdAt": { "$date": { "$numberLong": "1685720820293" } },
    "updatedAt": { "$date": { "$numberLong": "1685720820293" } },
    "__v": { "$numberInt": "0" }
  },
  {
    "_id": { "$oid": "647a0ef401bf515ecf492855" },
    "availability": "Available for rent",
    "bookedHours": { "$numberInt": "0" },
    "brand": "Kawasaki",
    "model": "Ninja 650",
    "year": "2023",
    "color": "Green",
    "price": "300",
    "rent": "25",
    "fileName": "Kawasaki-Ninja-650-2023.jpg",
    "filePath": "https://images.carandbike.com/bike-images/big/kawasaki/ninja-650/kawasaki-ninja-650.jpg?v=9",
    "fileType": "image/jpeg",
    "fileSize": "59234",
    "createdAt": { "$date": { "$numberLong": "1685720820293" } },
    "updatedAt": { "$date": { "$numberLong": "1685720820293" } },
    "__v": { "$numberInt": "0" }
  },
  {
    "_id": { "$oid": "647a0ef401bf515ecf492856" },
    "availability": "Available for rent",
    "bookedHours": { "$numberInt": "0" },
    "brand": "BMW",
    "model": "3 Series",
    "year": "2021",
    "color": "Blue",
    "seats": "5",
    "price": "300",
    "rent": "25",
    "fileName": "BMW-3-Series-2021.jpg",
    "filePath": "https://www.bmwusa.com/content/dam/bmwusa/images/2-series-gran-coupe/2022/exterior/colorizer/BMW-2-Series-Gran-Coupe-Brochure-BMWD-EDM-Spotlight-Final-Edition-July2021-380x230.png",
    "fileType": "image/jpeg",
    "fileSize": "59560",
    "createdAt": { "$date": { "$numberLong": "1685720820293" } },
    "updatedAt": { "$date": { "$numberLong": "1685720820293" } },
    "__v": { "$numberInt": "0" }
  },
  {
    "_id": { "$oid": "647a0ef401bf515ecf492857" },
    "availability": "Available for rent",
    "bookedHours": { "$numberInt": "0" },
    "brand": "Yamaha",
    "model": "MT-09",
    "year": "2023",
    "color": "Black",
    "price": "400",
    "rent": "35",
    "fileName": "Yamaha-MT-09-2023.jpg",
    "filePath": "https://www.yamaha-motor.com.au/wp-content/uploads/2021/09/MT-09-1.jpg",
    "fileType": "image/jpeg",
    "fileSize": "52790",
    "createdAt": { "$date": { "$numberLong": "1685720820293" } },
    "updatedAt": { "$date": { "$numberLong": "1685720820293" } },
    "__v": { "$numberInt": "0" }
  },
  {
    "_id": { "$oid": "647a0ef401bf515ecf492859" },
    "availability": "Available for rent",
    "bookedHours": { "$numberInt": "0" },
    "brand": "Harley-Davidson",
    "model": "Street Glide Special",
    "year": "2023",
    "color": "Black",
    "price": "500",
    "rent": "40",
    "fileName": "Harley-Davidson-Street-Glide-Special-2023.jpg",
    "filePath": "https://www.harley-davidson.com/content/dam/h-d/images/bikes/motorcycle-pages/2023/FLHXS/22-Family-Hero/22-CO-Family-Hero-FLHXS-1300x731.jpg?impolicy=myresize&rw=990&rh=557",
    "fileType": "image/jpeg",
    "fileSize": "80987",
    "createdAt": { "$date": { "$numberLong": "1685720820293" } },
    "updatedAt": { "$date": { "$numberLong": "1685720820293" } },
    "__v": { "$numberInt": "0" }
  },
  {
    "_id": { "$oid": "647a0ef401bf515ecf49285a" },
    "availability": "Available for rent",
    "bookedHours": { "$numberInt": "0" },
    "brand": "Ford",
    "model": "Mustang",
    "year": "2022",
    "color": "Yellow",
    "seats": "4",
    "price": "350",
    "rent": "30",
    "fileName": "Ford-Mustang-2022.jpg",
    "filePath": "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2022/collections/gallery/desktop/mustang-gallery-2022-gt-performance-1.jpg/_jcr_content/renditions/cq5dam.web.768.768.jpeg",
    "fileType": "image/jpeg",
    "fileSize": "69814",
    "createdAt": { "$date": { "$numberLong": "1685720820293" } },
    "updatedAt": { "$date": { "$numberLong": "1685720820293" } },
    "__v": { "$numberInt": "0" }
  },
  {
    "_id": { "$oid": "647a0ef401bf515ecf49285b" },
    "availability": "Available for rent",
    "bookedHours": { "$numberInt": "0" },
    "brand": "Ducati",
    "model": "Panigale V4",
    "year": "2023",
    "color": "Red",
    "price": "450",
    "rent": "35",
    "fileName": "Ducati-Panigale-V4-2023.jpg",
    "filePath": "https://www.ducati.com/bikes/panigale/panigale-v4/gallery/gallery-03.jpg",
    "fileType": "image/jpeg",
    "fileSize": "62475",
    "createdAt": { "$date": { "$numberLong": "1685720820293" } },
    "updatedAt": { "$date": { "$numberLong": "1685720820293" } },
    "__v": { "$numberInt": "0" }
  },
  {
    "_id": { "$oid": "647a0ef401bf515ecf49285c" },
    "availability": "Available for rent",
    "bookedHours": { "$numberInt": "0" },
    "brand": "BMW",
    "model": "X5",
    "year": "2022",
    "color": "White",
    "seats": "7",
    "price": "400",
    "rent": "30",
    "fileName": "BMW-X5-2022.jpg",
    "filePath": "https://www.bmwusa.com/content/dam/bmwusa/images/2-models/2-sav/x5/2022/overview/bmw-x5-model-overview-sporty-driving-dynamic-in-white.jpg",
    "fileType": "image/jpeg",
    "fileSize": "54683",
    "createdAt": { "$date": { "$numberLong": "1685720820293" } },
    "updatedAt": { "$date": { "$numberLong": "1685720820293" } },
    "__v": { "$numberInt": "0" }
  },
  {
    "_id": { "$oid": "647a0ef401bf515ecf49285e" },
    "availability": "Available for rent",
    "bookedHours": { "$numberInt": "0" },
    "brand": "Mercedes-Benz",
    "model": "C-Class",
    "year": "2022",
    "color": "Gray",
    "seats": "5",
    "price": "300",
    "rent": "25",
    "fileName": "Mercedes-Benz-C-Class-2022.jpg",
    "filePath": "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my21/c-class/sedan/c-class-1260x568.jpg",
    "fileType": "image/jpeg",
    "fileSize": "68293",
    "createdAt": { "$date": { "$numberLong": "1685720820293" } },
    "updatedAt": { "$date": { "$numberLong": "1685720820293" } },
    "__v": { "$numberInt": "0" }
  },
  {
    "_id": { "$oid": "647a0ef401bf515ecf49285f" },
    "availability": "Available for rent",
    "bookedHours": { "$numberInt": "0" },
    "brand": "Suzuki",
    "model": "GSX-R1000",
    "year": "2023",
    "color": "Blue",
    "price": "400",
    "rent": "30",
    "fileName": "Suzuki-GSX-R1000-2023.jpg",
    "filePath": "https://www.suzukicycles.com/Images/Models/2023/GSXR1000/landing/00.jpg",
    "fileType": "image/jpeg",
    "fileSize": "70348",
    "createdAt": { "$date": { "$numberLong": "1685720820293" } },
    "updatedAt": { "$date": { "$numberLong": "1685720820293" } },
    "__v": { "$numberInt": "0" }
  },
  {
    "_id": { "$oid": "647a0ef401bf515ecf492860" },
    "availability": "Available for rent",
    "bookedHours": { "$numberInt": "0" },
    "brand": "Audi",
    "model": "Q7",
    "year": "2021",
    "color": "Black",
    "seats": "7",
    "price": "350",
    "rent": "30",
    "fileName": "Audi-Q7-2021.jpg",
    "filePath": "https://www.audiusa.com/content/dam/audiusa/en/legacy/2021/Q7/overview/2021-audi-q7-gallery-header.png?imwidth=1920",
    "fileType": "image/jpeg",
    "fileSize": "65204",
    "createdAt": { "$date": { "$numberLong": "1685720820293" } },
    "updatedAt": { "$date": { "$numberLong": "1685720820293" } },
    "__v": { "$numberInt": "0" }
  },
  {
    "_id": { "$oid": "647a0ef401bf515ecf492861" },
    "availability": "Available for rent",
    "bookedHours": { "$numberInt": "0" },
    "brand": "KTM",
    "model": "1290 Super Duke R",
    "year": "2023",
    "color": "Orange",
    "price": "450",
    "rent": "35",
    "fileName": "KTM-1290-Super-Duke-R-2023.jpg",
    "filePath": "https://www.ktm.com/contentassets/6e60e8bb5426496cb0ad482ac98f5a99/0a_ktm1290superduker.jpg?w=1920",
    "fileType": "image/jpeg",
    "fileSize": "74351",
    "createdAt": { "$date": { "$numberLong": "1685720820293" } },
    "updatedAt": { "$date": { "$numberLong": "1685720820293" } },
    "__v": { "$numberInt": "0" }
  }
]
const Getrentbikes = () => {
  const { adminState, dispatchadmin } = useContext(AdminContext);

  const [getBikes, setGetBikes] = useState([]);
  const URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

  const getallrenttbikes = async () => {
    try {
      const res = await fetch(`${URL}/getAvailableRentBikes`, {
        method: "GET",
      });


      const data = await res.json();
      setGetBikes(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getallrenttbikes();
  }, []);

  let bikeIdFromDashBoard;
  const deleteUser = (e) => {
    bikeIdFromDashBoard = e.target.id;

    return fetch(`${URL}/deleteRentBikeFromDashboard`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bikeIdFromDashBoard,
      }),
    });
  };

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
          <span className="logo_name1">Vheciles</span>
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

        <div className="salecartableDiv">
          <h1 className="heading">
            <span>Available Rent Vheciles</span>
          </h1>

          <table className="salecartable">
            <thead>
              <tr>
                <th>BRAND </th>
                <th>MODEL </th>
                <th>RENT </th>
                <th>PRICE </th>
                <th>AVAILABILITY </th>
                <th>DELETE </th>
              </tr>
            </thead>

            {getBikes.map((getBikes) => (
              <tbody key={getBikes._id}>
                <tr>
                  <td>{getBikes.brand}</td>
                  <td>{getBikes.model}</td>
                  <td>{getBikes.rent}</td>
                  <td>{getBikes.price} Taka</td>
                  <td>{getBikes.availability} hours</td>
                  <td>
                    <button
                      id={getBikes._id}
                      onClick={deleteUser}
                      className="btn" 
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}

            {CAR_DATA.map((getBikes) => (
              <tbody key={getBikes._id}>
                <tr>
                  <td>{getBikes.brand}</td>
                  <td>{getBikes.model}</td>
                  <td>{getBikes.rent}</td>
                  <td>{getBikes.price} Taka</td>
                  <td>{getBikes.availability} hours</td>
                  <td>
                    <button
                      id={getBikes._id}
                      onClick={deleteUser}
                      className="btn"
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}

          </table>
        </div>
      </section>
    </>
  );
};

export default Getrentbikes;

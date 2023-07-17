import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";

import { UserContext } from "../App";

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


const ExploreRentBike = () => {
  const { state, dispatch } = useContext(UserContext);

  const Loginbutton = () => {
    if (state) {
      return (
        <div>
          <button className="btn">
            <NavLink className="nav-link" to="/signout">
              logout
            </NavLink>
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button className="btn">
            <NavLink className="nav-link" to="/signin">
              login
            </NavLink>
          </button>
        </div>
      );
    }
  };

  const URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

  const [renttbikesData, setrenttbikesData] = useState([]);

  const exploreRentBike = async () => {
    try {
      const res = await fetch(`${URL}/exploreRentBikeData`, {
        method: "GET",
      });

      const data = await res.json();

      setrenttbikesData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    exploreRentBike();
  }, []);

  const alertDiv = document.getElementById("alertDiv");
  const handleClick = () => {
    if (alertDiv.style.display === "none") {
      alertDiv.style.display = "flex";
      window.alert("Please signin to rent the bike!");
    } else {
      alertDiv.style.display = "flex";
    }
  };

  const hideAlert = () => {
    if (alertDiv.style.display === "flex") {
      alertDiv.style.display = "none";
    } else {
      alertDiv.style.display = "none";
    }
  };
  return (
    <>
      <header className="header ">
        <div id="menu-btn" className="fas fa-bars"></div>
        <NavLink className="logo" to="/">
          {" "}
          <span>Vhecile</span>Book{" "}
        </NavLink>

        <nav className="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/rentbike">Rent Vhecile</NavLink>
        </nav>
        <div id="login-btn">
          <Loginbutton />
        </div>
      </header>
      <div id="alertDiv">
        <p>Have you liked it?</p>
        <button className="btn" onClick={hideAlert}>
          <NavLink to="/rentbike" className="nav-link">
            Rent Now
          </NavLink>
        </button>
      </div>

      <div className="exploreBikesDiv mt-[100px]">
        {renttbikesData?.map((renttbike, index) => (
          <div className="exploreBikesCard" key={renttbike._id}>
            <img
              className="bikeImage"
              src={renttbike.filePath}
              alt=""
              onClick={handleClick}
            />
            <div className="bikeDetails">
              <h4 className="brand">{renttbike.brand}</h4>
              <p className="model">{renttbike.model}</p>
            </div>
          </div>
        ))}

        {CAR_DATA.map((renttbike, index) => (
          <div className="exploreBikesCard" key={renttbike._id}>
            <img
              className="bikeImage"
              src={renttbike.filePath}
              alt=""
              onClick={handleClick}
            />
            <div className="bikeDetails">
              <h4 className="brand">{renttbike.brand}</h4>
              <p className="model">{renttbike.model}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExploreRentBike;

import React from "react";
import "./Main.css";
import { propertyData } from "../dummyData/propertyData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [location, setlocation] = useState("");
  const [price, setprice] = useState(0);
  const [propertyType, setpropertyType] = useState("");
  const [issearch, setIssearch] = useState(false);

  const navigate = useNavigate();

  function handleClick() {
    navigate("/favourite");
  }

  return (
    <div className="container_main">
      <div className="container_main">
        <div className="search_container">
          <div className="heading">
            <h1>Search Properties to Rent</h1>
          </div>
          <div>
            <input
              className="searchBar"
              placeholder="Search with SearchBar"
            ></input>
          </div>
        </div>
      </div>
      <div className="propertyData">
        <div className="filter">
          <div className="filter_container">
            <div className="box">
              <div className="inputType">Location</div>
              <input
                type="text"
                className="filter_type"
                placeholder="location"
                onChange={(e) => {
                  setlocation(e.target.value);
                }}
              ></input>
            </div>
            <div className="box">
              <div className="inputType">When</div>
              <input
                type="text"
                className="filter_type"
                placeholder="When"
              ></input>
            </div>
            <div className="box">
              <div className="inputType">Price</div>
              <input
                type="text"
                className="filter_type"
                placeholder="price"
                onChange={(e) => {
                  setprice(e.target.value);
                }}
              ></input>
            </div>
            <div className="box">
              <div className="inputType">Property Type</div>
              <input
                type="text"
                className="filter_type"
                placeholder="Property Type"
                onChange={(e) => {
                  setpropertyType(e.target.value);
                }}
              ></input>
            </div>
            <div className="box1">
              <button
                className="filter_btn"
                onClick={() => {
                  setIssearch(true);
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="propertyData__card">
          {propertyData
            .filter((item) => {
              if (issearch) {
                if (
                  item.address.toLowerCase().includes(location.toLowerCase()) ||
                  item.price < price ||
                  item.description.includes(propertyType)
                ) {
                  console.log("isSearch =", location);
                  return item;
                }
              } else {
                return item;
              }

              return item;
            })
            .map((item, index) => {
              return (
                <div key={index + item.title} className="propertyData_content">
                  <div className="propertyData__overlay">
                    <img
                      className="propertyData_overlayImg"
                      src={item.image}
                      alt="PropertyImage"
                      style={{
                        width: 300,
                        height: 250,
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                      }}
                    />
                    <div className="propertyData__overlayText ">
                      <div className="propertyData__price">
                        <p className="propertyData__price1">
                          <span className="propertyData_cost">{`$${item.price}`}</span>{" "}
                          /month
                        </p>
                        <div>
                          <img
                            src={item.favourite}
                            onClick={handleClick}
                            style={{
                              width: 20,
                              height: 20,
                            }}
                            alt="Favorite icon"
                          />
                        </div>
                      </div>
                      {/* </div> */}
                      <div className="propertyData__details">
                        <div className="propertyData__name">
                          <p className="propertyData__boldText">{item.title}</p>
                        </div>
                        <div className="propertyData__address">
                          <p className="propertyData__text">{item.address}</p>
                        </div>

                        <div className="propertyData__address">
                          <p className="propertyData__text">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Main;

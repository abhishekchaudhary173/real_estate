import React from "react";
import "./Favourite.css";
import Header from "./Header";

const Favourite = () => {
  const propertyData1 = [
    {
      title: "Palm Harbor",
      price: 2095,
      address: "2699 Green Vally, Highland Lake, FL",
      description: "3 Beds, 2 bathrooms",
      image: "./images/img1.jpeg",
      favourite: "./images/favorite.png",
    },
    {
      title: "Beverly Springfield",
      price: 3095,
      address: "2821 Lake Sevilla, Palm Harbour, TX",
      description: "4 Beds, 3 bathrooms",
      image: "./images/img2.jpeg",
      favourite: "./images/favorite.png",
    },
    {
      title: "Faulkner Ave",
      price: 4770,
      address: "909 Woodland St, Michigan, IN",
      description: "5 Beds, 3 bathrooms",
      image: "./images/img3.jpeg",
      favourite: "./images/favorite.png",
    },
    {
      title: "Adams Wille",
      price: 2700,
      address: "2545 Green Vally, Adams Wille, FL",
      description: "3 Beds, 2 bathrooms",
      image: "./images/img4.jpeg",
      favourite: "./images/favorite.png",
    },
  ];

  return (
    <div className="">
      <Header />
      <h1 className="favourite">Favourite property list</h1>
      {propertyData1.map((item, index) => {
        return (
          <div key={index + item.title} className="searchResult">
            <img src={item.image} alt="" />

            <div className="searchResult__info">
              <div className="searchResult__infoTop">
                <h3>{item.title}</h3>
                <p>{item.address}</p>
                <p>{item.description}</p>
              </div>

              <div className="searchResult__infoBottom">
                <div className="searchResults__price">
                  <h2>{`$${item.price}`}</h2>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favourite;

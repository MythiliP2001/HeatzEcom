import React from "react";
import Productsnew from "./Productsnew"; // Import your product card component
import img1 from "../assets/img1.avif"; // Ensure these paths are correct
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

// Product data with images, badges, descriptions, and prices
const products = [
  { image: img1, badge: "Best Buy", description: "Lorem Ipsum is dummy text", price: "₹2599" },
  { image: img2, badge: "Best Buy", description: "Lorem Ipsum is dummy text", price: "₹2599" },
  { image: img3, badge: "Best Buy", description: "Lorem Ipsum is dummy text", price: "₹2599" },
  { image: img2, badge: "Trending", description: "Lorem Ipsum is dummy text", price: "₹2599" },
];

const ProductList = () => {
  return (
    <div
      className="container-fluid text-white"
      style={{
        background: "black",
        padding: "20px",
      }}
    >
      <h3 className="text-center mb-4">Get Similar Products</h3>
      <div
        className="d-flex flex-row flex-nowrap justify-content-center gap-4 overflow-auto"
        style={{
          padding: "10px",
        }}
      >
        {products.map((product, index) => (
          <Productsnew key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

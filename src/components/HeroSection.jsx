import React from "react";
import "../styles/HeroSection.css";


import img1 from "../assets/img1.avif";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="content">
        <h1>Welcome to Our Store</h1>
        <p>Discover amazing products with great offers!</p>
      </div>
      <img src={img1} alt="Product" className="product-image" />
    </section>
  );
};

export default HeroSection;

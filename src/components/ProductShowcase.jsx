import React from "react";
import "../styles/ProductShowcase.css"; 
import img1 from '../assets/img1.avif'

const ProductShowcase = () => {
  return (
    <div className="product-container">
      <div className="product-text">
        <h1 className="product-title">Focus on the little things.</h1>
        <p className="product-description">
          The new Ultra Wide camera with autofocus takes incredibly sharp, detailed macro photos and videos. 
          You can also frame more expansive scenes without taking a step back. And because it has a larger 
          aperture and bigger pixels, it can capture up to 2.6x more light for higher image quality — even in low light.
        </p>
      </div>

      <div className="product-image">
        <img src={img1} alt="Headphones" className="animated-image" />
      </div>
    </div>
  );
};

export default ProductShowcase;

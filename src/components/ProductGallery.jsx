import React from "react";
import "../styles/ProductGallery.css";
 import img1 from '../assets/img1.avif'
 import img2 from '../assets/img2.jpg'
 import img3 from '../assets/img3.jpg'

const ProductGallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-content">
       
        <div className="large-image-container">
          <img src= {img1} alt="Large Product" className="large-image" />
        </div>

     
        <div className="side-images">
          <div className="side-image-container">
            <img src={img1} alt="Side Product 1" className="side-image" />
          </div>
          <div className="side-image-container">
            <img src={img2} alt="Side Product 2" className="side-image" />
          </div>
          <div className="side-image-container">
            <img src={img3} alt="Side Product 3" className="side-image" />
          </div>
          <div className="side-image-container">
            <img src={img2} alt="Side Product 4" className="side-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;

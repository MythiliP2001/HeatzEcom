import React from "react";
import "../styles/ProductDetails.css"; 

import img1 from "../assets/img1.avif";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const ProductDetails = () => {
  return (
    <section className="product-details">
      <div className="product-info">
        <h2>Stylish & Durable.</h2>
        <p>
          The new Ultra Wide camera with autofocus takes incredibly sharp, detailed macro
          photos and videos. You can also frame more expansive scenes without taking a step
          back. And because it has a larger aperture and bigger pixels, it can capture up to
          2.6x more light for higher image quality.
        </p>
      </div>

      <div className="product-selection">
        <div className="variants">
          <span>Choose Variant</span>
          <div className="variant-icons">
            <span className="variant active">
              <img src={img1 || "/placeholder.jpg"} alt="Variant 1" />
            </span>
            <span className="variant">
              <img src={img2 || "/placeholder.jpg"} alt="Variant 2" />
            </span>
            <span className="variant">
              <img src={img3 || "/placeholder.jpg"} alt="Variant 3" />
            </span>
          </div>
        </div>

        <div className="quantity">
          <span>Quantity</span>
          <div className="quantity-controls">
            <button>-</button>
            <span>20</span>
            <button>+</button>
          </div>
        </div>

        <div className="price">
          <span className="discounted-price">₹ 1999</span>
          <span className="original-price">₹ 3599</span>
        </div>

        <button className="add-to-cart">Add to Cart</button>
      </div>
    </section>
  );
};

export default ProductDetails;

import React from "react";
import "../styles/productSpecs.css"; 

const ProductSpecs = () => {
  const specs = [
    
    {
      title: "Battery",
      description:
        "The ZG28 Gaming Headset features a 3.7V, 300mAh rechargeable battery"
      },
    {
      title: "Playtime",
      description:
        "The ZG28 Gaming Headset offers up to 10 hours of playtime on a single charge, ensuring extended use for immersive gaming sessions. ",
    },
    {
      title: "Charging Time",
      description:
        "The ZG28 Gaming Headset features a fast charging time of approximately 2 hours, allowing you to quickly power up the headset for your next gaming session. ",
    },
  ];

  return (
    <section className="product-specs">
      {specs.map((spec, index) => (
        <div key={index} className="spec-item">
          <h3>{spec.title}</h3>
          <p>{spec.description}</p>
        </div>
      ))}
    </section>
  );
};

export default ProductSpecs;

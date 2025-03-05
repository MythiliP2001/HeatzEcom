import React from "react";
import { Card } from "react-bootstrap";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import "../styles/Productsnew.css"; 

const Productsnew = ({ product }) => {
  return (
    <Card className="productsnew text-center shadow-lg">
      <Card.Img variant="top" src={product.image} className="productsnew-image" />
      <Card.Body>
        <p className="productsnew-badge">{product.badge}</p>
        <Card.Text className="productsnew-description">{product.description}</Card.Text>
        <h5 className="productsnew-price">₹ {product.price}</h5>
        <div className="productsnew-icons">
          <FaHeart className="productsnew-icon heart" />
          <FaShoppingBag className="productsnew-icon bag" />
        </div>
      </Card.Body>
    </Card>
  );
};

export default Productsnew;

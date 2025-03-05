import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import products from "../data/products.json";

import ProductDetails from "../components/ProductDetails";
import ProductSpecs from "../components/ProductSpecs";
import ProductList from "../components/ProductList";
import ProductShowcase from "../components/ProductShowcase";
import ProductGallery from "../components/ProductGallery";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header/>
      <HeroSection/>
      <ProductGallery/>
      <ProductDetails/>
      <ProductSpecs/>
      <ProductShowcase/>
      <ProductList/>

      {/* Product Section */}
      <section className="product-section">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Featured Products
        </motion.h2>

        <motion.div 
          className="product-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              className="product-card-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer/>
    </div>
  );
};

export default HomePage;

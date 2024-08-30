import React from "react";
import { useGlobalContext } from "../context";

const HeroSection = () => {
  const { name, image } = useGlobalContext();

  return (
    <div>
      <div className="section-hero-data">
        <h1 className="hero-heading">{name}</h1>
        <h2 className="hero-tagline">We deliver result...</h2>
        <p>hellloo i am {name} </p>
        <button>Get In Touch</button>
      </div>
      <div className="section-hero-img">
        <picture>
          <img src={image} alt="hero image" className="hero-img" />
        </picture>
      </div>
    </div>
  );
};

export default HeroSection;

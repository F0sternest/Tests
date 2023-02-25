import React from "react";
import smallHeroImg from "../Images/sm-hero-img.jpg";
import largeHeroImg from "../Images/lg-hero-img.jpg";
import "../Styles/Hero.css";

function Hero() {
  return (
    <>
      <img className="small-hero-img" src={smallHeroImg} alt="Imagen con ropa" />
      <img className="large-hero-img" src={largeHeroImg} alt="Imagen con ropa" />
      <section className="hero-text-container">
        <div className="hero-text">
          <h1>Texto de ejemplo xD</h1>
          <h3>Una descripcion de ejemplo</h3>
          <button>Pulsa aqui</button>
          <button>O aqui</button>
        </div>
      </section>
    </>
  );
}

export default Hero;

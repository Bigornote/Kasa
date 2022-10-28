import React from "react";
import { useLocation } from "react-router-dom";

const Banner = () => {
  // Ce hook renvoie l'objet courant location. Effectuer un effet secondaire chaque fois que l'emplacement actuel change
  const { pathname } = useLocation();
  if (pathname === "/")
    return (
      <section className="banner home-banner">
        <div className="content">
          <h1>{"Chez vous,\npartout et ailleurs"}</h1>
        </div>
      </section>
    );
  if (pathname === "/about")
    return (
      <section className="banner about-banner">
        <div className="content">
          <h1 className="hidden">A propos de nous</h1>
        </div>
      </section>
    );
};

export default Banner;

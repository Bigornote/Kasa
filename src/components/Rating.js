import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  // La méthode fill() remplit tous les éléments d'un tableau entre deux index avec une valeur statique. La valeur de l'index de fin n'est pas incluse. Cette méthode renvoie le tableau modifié.
  const stars = Array(5).fill(0);
  const color = {
    red: "#ff6060",
    grey: "#E3E3E3",
  };
  return (
    <div className="stars">
      {stars.map((_, index) => {
        return (
          <FaStar
            key={index}
            className="star"
            color={rating > index ? color.red : color.grey}
          />
        );
      })}
    </div>
  );
};

export default Rating;

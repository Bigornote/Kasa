import React from "react";
import { useParams } from "react-router-dom";
import Tags from "./Tags";
import Rating from "./Rating";
import Data from "../data/logements.json";

const Profil = () => {
  const { id } = useParams();
  const details = Data.find((el) => el.id === id);

  const removeSpaceHost = details.host.name.replaceAll(" ", "\n");

  return (
    <section className="info-profil">
      <div className="left-container">
        <h1 className="title">{details.title}</h1>
        <h2 className="location">{details.location}</h2>
        <Tags tags={details.tags} />
      </div>
      <div className="right-container">
        <div className="host-info">
          <div className="host-name">{removeSpaceHost}</div>
          <img
            className="host-picture"
            alt="house"
            src={details.host.picture}
          />
        </div>
        <div className="rating">
          <Rating rating={details.rating} />
        </div>
      </div>
    </section>
  );
};

export default Profil;

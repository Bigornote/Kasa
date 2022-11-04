import React from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Error from "./Error";
import Profil from "../components/Profil";
import Accordeon from "../components/Accordeon";
import Data from "../data/logements.json";

const House = () => {
  const { id } = useParams();
  const details = Data.find((el) => el.id === id);

  if (!details) {
    return <Error />;
  }

  return (
    <div>
      <Slideshow pictures={details.pictures} />
      <Profil />

      <section>
        <Accordeon title={"Description"} content={details.description} />
        <Accordeon title={"Équipements"} content={details.equipments} />
      </section>
    </div>
  );
};

export default House;

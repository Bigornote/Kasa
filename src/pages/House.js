import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import Profil from "../components/Profil";
import Accordeon from "../components/Accordeon";
import Error from "./Error";

const House = () => {
  const [dataLogement, setDataLogement] = useState([]);

  // Récupérer les id des différents logements
  const { id } = useParams();

  // useEffect(() => {
  //   fetch("../logements.json") //J'ajoute les ../ par rapport au chemins de navigation
  //     .then((res) => res.json())
  //     .then((data) => console.log(data.logement[0]));
  // });

  useEffect(() => {
    fetch("../logements.json") //J'ajoute les ../ par rapport au chemins de navigation
      .then((res) => res.json())
      .then((data) =>
        setDataLogement(...data.logement.filter((item) => item.id === id))
      );
  }, [id]);

  const diplayHousePage = () => {
    const { description, equipments } = dataLogement;

    return (
      <main className="house">
        <div>
          {/* <Profil dataLogement={dataLogement} /> */}
          <div>
            <Accordeon title={"Description"} content={description} />
            <Accordeon title={"Équipements"} content={equipments} />
          </div>
        </div>
      </main>
    );
  };

  if (dataLogement === undefined) {
    return <Error />;
  } else {
    return diplayHousePage();
  }
};

export default House;

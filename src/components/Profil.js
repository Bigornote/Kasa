import React from "react";

const Profil = ({ dataLogement }) => {
  console.log(dataLogement.host);
  // const removeSpaceHost = dataLogement.host.name.replace(" ", "\n");
  return (
    <section className="profil">
      <div className="info-left">
        <h1 className="profil-title">{dataLogement.title}</h1>
        <h2 className="profil-location">{dataLogement.location}</h2>
        {/* ajouter les tags ici */}
      </div>
      <div className="info-right">
        <div className="profil-user">
          {/* <div>{removeSpaceHost}</div> */}
          <img
            src={dataLogement.host}
            alt={`Photographie de Profil de ${dataLogement.host}`}
          />
          {/* Ajouter le rating des étoiles */}
        </div>
      </div>
    </section>
  );
};

export default Profil;

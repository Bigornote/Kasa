import React from "react";

function Card({ cover, title }) {
  return (
    <article className="card-logement">
      <img src={cover} alt={`Photographie du logement ${title}`} />
      <h2>{title}</h2>
    </article>
  );
}

export default Card;

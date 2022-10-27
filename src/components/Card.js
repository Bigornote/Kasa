import React from "react";
import PropTypes from "prop-types";

function Card({ imgURL, imgALT, title }) {
  return (
    <article className="card-logement">
      <img src={imgURL} alt={imgALT} />
      <h2>{title}</h2>
    </article>
  );
}

Card.propTypes = {
  imgURL: PropTypes.string,
  imgALT: PropTypes.string,
  title: PropTypes.string,
};

export default Card;

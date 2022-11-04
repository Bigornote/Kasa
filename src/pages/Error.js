import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main className="error container">
      <h1>404</h1>
      <p>"Oups ! La page que vous avez demandé n'existe pas."</p>
      <div className="link">
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </main>
  );
};

export default Error;

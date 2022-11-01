import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../components/Slideshow";
// import axios from "axios";

const House = () => {
  const { id } = useParams();
  const [logementData, setLogementData] = useState([]);

  useEffect(() => {
    fetch("../logements.json")
      .then((res) => res.json())
      .then((data) => {
        setLogementData(...data.response.filter((house) => house.id === id));
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <main className="house">
      <Slideshow />
    </main>
  );
};

export default House;

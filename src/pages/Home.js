import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Card from "../components/Card";
// import axios from "axios";

const Home = () => {
  const [logementData, setLogementData] = useState([]);

  // useEffect(() => {
  //   axios.get("logements.json").then((data) => setLogementData(data.response));
  // }, []);

  useEffect(() => {
    fetch("logements.json")
      .then((res) => res.json())
      .then((data) => {
        setLogementData(data.res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="home">
      <Banner />

      {/* logement */}
      <section className="logement">
        {logementData.map((item) => (
          <Link key={item.id} to={`logement/${item.id}`}>
            <Card key={`${item.id}`} cover={item.cover} title={item.title} />
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Home;

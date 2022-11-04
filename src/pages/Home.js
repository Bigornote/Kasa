import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Data from "../data/logements.json";

const Home = () => {
  return (
    <main className="home container">
      <Banner />

      {/* logement */}
      <section className="logement">
        {Data.map((item) => (
          <Link key={item.id} to={`logement/${item.id}`}>
            <Card key={`${item.id}`} cover={item.cover} title={item.title} />
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Home;

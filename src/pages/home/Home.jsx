import Arriwals from "./arriwals/Arriwals.jsx";
import Banner from "./banner/Banner.jsx";
import Categories from "./categories/Categories.jsx";
import Hero from "./hero/Hero.jsx";
import Jean from "./jean/Jean.jsx"
import Keyboard from "./keyboard/Keyboard.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <Banner />
      <Jean />
      <Categories />
      <Arriwals />
      <Keyboard />
    </div>
  );
}

export default Home;

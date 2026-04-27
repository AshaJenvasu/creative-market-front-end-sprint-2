import Hero from "../components/Home/01_Hero";
import ScrollingText from "../components/Home/02_ScrollingText";
import Highlight from "../components/Home/03_Highlight";
import Market from "../components/Home/04_Market";
import ArtistLove from "../components/Home/05_Artist-love";
import Register from "../components/Home/06_Register";
import AboutUs from "../components/Home/07_AboutUs";

const Home = () => {
  return (
    <main>
      <Hero />
      <ScrollingText />
      <Highlight />
      <Market />
      <ArtistLove />
      <Register />
      <AboutUs />
    </main>
  );
};

export default Home;

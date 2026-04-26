import Navbar from "../components/00_Navbar";
import Hero from "../components/01_Hero";
import ScrollingText from "../components/02_ScrollingText";
import Highlight from "../components/03_Highlight";
import Market from "../components/04_Market";
import ArtistLove from "../components/05_Artist-love";
import AboutUs from "../components/07_AboutUs";
import Footer from "../components/08_Footer";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ScrollingText />
      <Highlight />
      <Market />
      <ArtistLove />
      <AboutUs />
      <Footer />
    </main>
  );
};

export default Home;

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Slider from "../components/Slider";
import Diensten from "../components/Diensten";
import Contact from "../components/Contact";

const HomePage = () => {
  return (
    <div>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <Navbar />
      <Hero />
      <Intro />
      <Diensten />
      <Slider />
      <Contact />
      <Footer />
    </div>
  );
};

export const metadata = {
  title: "Kevin Dhond",
  description:
    "Tuinaanleg Kevin Dhond voor al uw tuinonderhoud en tuinaanleg regio Limburg",
  keywords:
    "tuinaanleg, tuinonderhoud, hof, limburg, aanleg, onderhoud, lommel, overpelt, tuin",
};

export default HomePage;

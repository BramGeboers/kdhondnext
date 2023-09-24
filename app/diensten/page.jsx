import Navbar from "../../components/Navbar";
import DienstenHero from "../../components/DienstenHero";
import DienstenMain from "../../components/DienstenMain";
import Footer from "../../components/Footer";

const DienstenPage = () => {
  return (
    <div>
      <Navbar />
      <DienstenHero />
      <DienstenMain />
      <Footer />
    </div>
  );
};

export const metadata = {
  title: "Kevin Dhond | Diensten",
  description:
    "De diensten van Tuinaanleg Kevin Dhond voor al uw tuinonderhoud en tuinaanleg regio Limburg",
  keywords:
    "tuinaanleg, tuinonderhoud, hof, limburg, aanleg, onderhoud, lommel, overpelt, tuin",
};

export default DienstenPage;

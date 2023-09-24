import Navbar from "../../components/Navbar";
import ReferentiesHero from "../../components/ReferentiesHero";
import ReferentiesMain from "../../components/ReferentiesMain";
import Footer from "../../components/Footer";

const ReferentiesPage = () => {
  return (
    <div>
      <Navbar />
      <ReferentiesHero />
      <ReferentiesMain />
      <Footer />
    </div>
  );
};

export const metadata = {
  title: "Kevin Dhond | Referenties",
  description:
    "Referenties van Tuinaanleg Kevin Dhond voor al uw tuinonderhoud en tuinaanleg regio Limburg",
  keywords:
    "tuinaanleg, tuinonderhoud, hof, limburg, aanleg, onderhoud, lommel, overpelt, tuin",
};

export default ReferentiesPage;

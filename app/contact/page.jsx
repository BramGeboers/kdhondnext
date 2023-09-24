import Navbar from "../../components/Navbar";
import ContactHero from "../../components/ContactHero";
import ContactMain from "../../components/ContactMain";
import Footer from "../../components/Footer";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <ContactMain />
      <Footer />
    </div>
  );
};

export const metadata = {
  title: "Kevin Dhond | Diensten",
  description:
    "Contactegegevens van Tuinaanleg Kevin Dhond voor al uw tuinonderhoud en tuinaanleg regio Limburg",
  keywords:
    "tuinaanleg, tuinonderhoud, hof, limburg, aanleg, onderhoud, lommel, overpelt, tuin",
};

export default ContactPage;

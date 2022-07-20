import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const HeroLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default HeroLayout;
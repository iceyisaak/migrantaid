import HeroSection from "./sections/Hero/HeroSection";
import OffersSection from "./sections/Offers/OffersSection";
import BlogSection from "./sections/Blog/BlogSection";
import JoinUsSection from "./sections/JoinUs/JoinUsSection";
import SponsorsSection from "./sections/Sponsors/SponsorsSection";

const HomePage = () => {
  return (
    <article>
      <HeroSection />
      <OffersSection />
      <BlogSection />
      <JoinUsSection />
      <SponsorsSection />
    </article>
  );
};
export default HomePage;
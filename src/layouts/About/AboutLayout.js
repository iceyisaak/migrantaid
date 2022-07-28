import SponsorsSection from "../Home/sections/Sponsors/SponsorsSection";
import AboutUsSection from "./sections/AboutUs/AboutUsSection";
import DirectorSection from "./sections/Director/DirectorSection";
import HistorySection from "./sections/History/HistorySection";
import TeamSection from "./sections/Team/TeamSection";

const AboutLayout = () => {
  return (
    <article>
      <AboutUsSection />
      <HistorySection />
      <DirectorSection />
      <TeamSection />
      <SponsorsSection />
    </article>
  );
};
export default AboutLayout;
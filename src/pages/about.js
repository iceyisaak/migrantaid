import Head from 'next/head';
import AboutLayout from '../layouts/About/AboutLayout';
import SponsorsSection from '../layouts/Home/sections/Sponsors/SponsorsSection';

const About = () => {
  return (
    <>
      <Head>
        <title>MigrantAid e.V. | About Us & What We Do</title>
        <meta name="description" content="MigrantAid | About Us + What we do" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutLayout />
      <SponsorsSection />
    </>
  );
};
export default About;
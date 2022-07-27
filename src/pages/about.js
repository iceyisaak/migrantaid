import Head from 'next/head';
import AboutLayout from '../layouts/About/AboutLayout';

const About = () => {
  return (
    <>
      <Head>
        <title>MigrantAid e.V. | About Us & What We Do</title>
        <meta name="description" content="MigrantAid | About Us + What we do" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutLayout />
    </>
  );
};
export default About;
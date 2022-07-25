import Head from 'next/head';
import HeroSection from './Home/HomePage';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>MigrantAid e.V.</title>
        <meta name="description" content="MigrantAid | Peace through integration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />


    </div >
  );
}

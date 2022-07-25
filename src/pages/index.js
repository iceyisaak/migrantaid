import Head from 'next/head';
import HomeLayout from '../layouts/Home/HomeLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>MigrantAid e.V.</title>
        <meta name="description" content="MigrantAid | Peace through integration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeLayout />
    </ >
  );
}

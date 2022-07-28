import OffersLayout from "../layouts/Offers/OffersLayout";
import Head from 'next/head';

const OffersPage = () => {
  return (
    <>
      <Head>
        <title>MigrantAid e.V. | About Us & What We Do</title>
        <meta name="description" content="MigrantAid | About Us + What we do" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OffersLayout />
    </>
  );
};
export default OffersPage;
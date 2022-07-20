import Head from 'next/head';
import Footer from '../components/Footer';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Hero from './Hero';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MigrantAid e.V.</title>
        <meta name="description" content="MigrantAid | Peace through integration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Hero />
      </main>

    </div>
  );
}

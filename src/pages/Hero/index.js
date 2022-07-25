// import styles from '../../styles/Home.module.css';
import Button from '../../components/Button';
import Image from 'next/image';


const Home = () => {
  return (
    <main className="min-h-screen flex px-52 py-32 ">
      <div className="text-section w-1/3 max-h-screen">
        <h1 className="text-9xl mb-11">
          Peace through integration
        </h1>
        <div className='mb-11 text-lg'>
          At MigrantAid, we believe in the power of social integration for the betterment of society.
        </div>
        <div className='flex flex-col h-52 justify-between'>
          <Button btnText="About Us" className="" />
          <Button btnText="Our Offer" className="" />
        </div>
      </div>
      <div className="image-section w-2/3 flex px-20 py-12">
        <div className='w-3/6 mr-2'>
          <Image src="https://via.placeholder.com/320x420.png"
            alt='Hero Img 1'
            layout='responsive'
            width={320}
            height={420}
            objectFit='contain'
            priority
          />
        </div>
        <div className='w-3/6 '>
          <div className='mt-2 mb-3 block'>
            <Image src="https://via.placeholder.com/320x200.png"
              alt='Hero Img 2'
              layout='responsive'
              width={320}
              height={200}
              objectFit='contain'
              priority
            />
          </div>
          <Image src="https://via.placeholder.com/320x200.png"
            alt='Hero Img 3'
            layout='responsive'
            width={320}
            height={200}
            objectFit='contain'
            priority
          />
        </div>
      </div>
      {/* <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.js</code>
      </p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/canary/examples"
          className={styles.card}
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>
            Instantly deploy your Next.js site to a public URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
};
export default Home;
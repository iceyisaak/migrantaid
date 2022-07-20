import '../styles/globals.css';
import HeroLayout from '../layouts/HeroLayout';

function MyApp({ Component, pageProps }) {
  return (
    <HeroLayout>
      <Component {...pageProps} />
    </HeroLayout>
  );
}

export default MyApp;

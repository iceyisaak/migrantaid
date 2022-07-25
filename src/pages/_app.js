import '../styles/globals.css';
import MainLayout from '../layouts/Main/MainLayout';

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;

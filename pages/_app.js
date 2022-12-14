import { useRouter } from 'next/router';
import { ThemeContextProvider } from '../store/theme-context';
import SEO from '../components/SEO/SEO';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import '../styles/globals.css';
import { METADATA } from '../constants/constants';
import Blobs from '../components/UI/Blobs';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const pageExists = router.pathname in METADATA;

  if (pageExists) {
    return (
      <ThemeContextProvider>
        <SEO />
        <Blobs />
        <Header />
        <main
          className={`xs:mp-36 pt-26 3xs:pt-30 lg:pt-40 xl:pt-44 ${
            router.pathname === '/' && '2xl:pt-52'
          }`}
        >
          <Component {...pageProps} />
        </main>
        <Footer />
      </ThemeContextProvider>
    );
  } else {
    return (
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    );
  }
}

export default MyApp;

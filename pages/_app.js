import { useRouter } from 'next/router';
import { ThemeContextProvider } from '../store/theme-context';
import SEO from '../components/SEO/SEO';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import '../styles/globals.css';
import { METADATA } from '../constants/constants';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const pageExists = router.pathname in METADATA;

  if (pageExists) {
    return (
      <ThemeContextProvider>
        <SEO />
        <Header />
        <main
          className={`mt-24 3xs:mt-32 xs:mt-36 lg:mt-40 xl:mt-44 ${
            router.pathname === '/' && '2xl:mt-52'
          }`}
        >
          <Component {...pageProps} />
        </main>
        <Footer />
      </ThemeContextProvider>
    );
  } else {
    return <Component {...pageProps} />;
  }
}

export default MyApp;

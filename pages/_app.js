import { ThemeContextProvider } from '../store/theme-context';
import SEO from '../components/SEO/SEO';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <SEO />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeContextProvider>
  );
}

export default MyApp;

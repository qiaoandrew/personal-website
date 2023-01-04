import { useRouter } from 'next/router';
import { ThemeContextProvider } from '../store/theme-context';
import Header from '../components/navigation/Header';
import '../styles/globals.css';
import { METADATA } from '../constants/constants';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ThemeContextProvider>
      <Header />
      <main
        className={`xs:mp-36 pt-26 3xs:pt-30 lg:pt-40 xl:pt-44 ${
          router.pathname === '/' && '2xl:pt-52'
        }`}
      >
        <Component {...pageProps} />
      </main>
    </ThemeContextProvider>
  );
}

export default MyApp;

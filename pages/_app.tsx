import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import ReduxProvider from '@/components/redux/ReduxProvider';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ReduxProvider>
      <Header />
      <main
        className={`pt-28 xs:pt-36 lg:pt-40 xl:pt-44 ${
          router.pathname === '/' && '2xl:pt-48'
        }`}
      >
        <Component {...pageProps} />
      </main>
      <Footer />
    </ReduxProvider>
  );
}

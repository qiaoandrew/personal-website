import { ThemeContextProvider } from "../store/theme-context";

import Header from "../components/navigation/Header";
import Blobs from "../components/UI/Blobs";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Header />
      <Component {...pageProps} />
      <Blobs />
    </ThemeContextProvider>
  );
}

export default MyApp;

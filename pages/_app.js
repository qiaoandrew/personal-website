import { ThemeContextProvider } from "../store/theme-context";
import Header from "../components/navigation/Header";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Header />
      <Component {...pageProps} />
    </ThemeContextProvider>
  );
}

export default MyApp;

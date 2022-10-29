import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="m-0 overflow-x-hidden scroll-smooth p-0">
      <Head />
      <body className="relative overflow-hidden bg-beige dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

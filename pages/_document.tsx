import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className='dark m-0 scroll-smooth p-0'>
      <Head />
      <body className='transition-300 relative bg-beige dark:bg-black'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

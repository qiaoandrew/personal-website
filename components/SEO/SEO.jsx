import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import ThemeContext from '../../store/theme-context';
import { METADATA } from '../../constants/constants';

export default function SEO() {
  const themeContext = useContext(ThemeContext);

  const router = useRouter();
  const path = router.pathname;

  const { title, description, keywords } = METADATA[path];

  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="robots" content="index, follow" />
      <meta name="title" property="og:title" content={title} />
      <meta property="og:type" content="website" />
      {description && (
        <meta
          name="description"
          property="og:description"
          content={description}
        />
      )}
      <meta
        name="image"
        property="og:image"
        content="https://www.andrewqiao.com/img/favicons/og-image.png"
      />
      <meta name="author" content="Andrew Qiao" />
      <meta name="twitter:card" content="summary" />
      {description && <meta name="twitter:description" content={description} />}
      <meta
        name="twitter:image"
        content="https://www.andrewqiao.com/img/favicons/og-image.png"
      />
      <link rel="canonical" href={`www.andrewqiao.com${path}`} />
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/img/favicons/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/img/favicons/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/img/favicons/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/img/favicons/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/img/favicons/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/img/favicons/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/img/favicons/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/img/favicons/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/img/favicons/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/img/favicons/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/img/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/img/favicons/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/img/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/img/favicons/manifest.json" />
      <meta
        name="msapplication-TileColor"
        content={themeContext.theme === 'dark' ? '#161724' : '#F7F7F1'}
      />
      <meta
        name="msapplication-TileImage"
        content="/img/favicons/ms-icon-144x144.png"
      />
      <meta
        name="theme-color"
        content={themeContext.theme === 'dark' ? '#161724' : '#F7F7F1'}
      />
    </Head>
  );
}

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import { RootState } from '@/store/store';
import { COLORS } from '@/constants/colors';

type SEOProps = {
  title: string;
  description?: string;
  keywords?: string;
};

export default function SEO({ title, description, keywords }: SEOProps) {
  const { theme } = useSelector((state: RootState) => state.theme);

  const router = useRouter();
  const path = router.pathname;

  return (
    <Head>
      <title>{title}</title>
      {description && <meta name='description' content={description} />}
      <meta name='keywords' content={keywords} />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta charSet='UTF-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='robots' content='index, follow' />
      <meta name='title' property='og:title' content={title} />
      <meta property='og:type' content='website' />
      <meta
        name='description'
        property='og:description'
        content={description}
      />
      <meta name='image' property='og:image' content='/favicons/og-image.png' />
      <meta name='author' content='Andrew Qiao' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content='/favicons/og-image.png' />
      <link
        rel='shortcut icon'
        href='/favicons/favicon.ico'
        type='image/x-icon'
      />
      <link rel='icon' href='/favicons/favicon.ico' type='image/x-icon' />
      <link rel='canonical' href={`www.andrewqiao.com${path}`} />
      <link
        rel='apple-touch-icon'
        sizes='57x57'
        href='/favicons/apple-icon-57x57.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='60x60'
        href='/favicons/apple-icon-60x60.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='72x72'
        href='/favicons/apple-icon-72x72.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='76x76'
        href='/favicons/apple-icon-76x76.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='114x114'
        href='/favicons/apple-icon-114x114.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='120x120'
        href='/favicons/apple-icon-120x120.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='144x144'
        href='/favicons/apple-icon-144x144.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='152x152'
        href='/favicons/apple-icon-152x152.png'
      />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/favicons/apple-icon-180x180.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='192x192'
        href='/favicons/android-icon-192x192.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicons/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='96x96'
        href='/favicons/favicon-96x96.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicons/favicon-16x16.png'
      />
      <link rel='manifest' href='/favicons/manifest.json' />
      <meta
        name='msapplication-TileColor'
        content={theme === 'dark' ? COLORS.black : COLORS.beige}
      />
      <meta
        name='msapplication-TileImage'
        content='/favicons/ms-icon-144x144.png'
      />
      <meta
        name='theme-color'
        content={theme === 'dark' ? COLORS.black : COLORS.beige}
      />
    </Head>
  );
}

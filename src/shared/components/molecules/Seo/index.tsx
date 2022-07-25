import Head from 'next/head';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';

import { ISeoProps } from '@/shared/components/molecules/Seo/ISeo';
import { isDevelopment } from '@/shared/constants';

const defaultMeta = {
  title: 'M3ntorship',
  siteName: 'M3ntorship',
  description:
    'Start your software engineering career by working on real world projects with large team of software engineers',
  /** Without additional '/' on the end, e.g. https://theodorusclarence.com */
  url: 'https://m3ntorship-v2.herokuapp.com',
  type: 'website',
  robots: !isDevelopment ? 'follow, index' : 'nofollow, noindex',
  /** No need to be filled, will be populated with openGraph function */
  image: '',
};

export default function Seo({ seoData }: ISeoProps): ReactElement {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...seoData,
  };
  meta['title'] = seoData?.templateTitle
    ? `${seoData.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta name='title' content={meta.title} />
      <meta name='description' content={meta.description} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />

      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:image' name='image' content={meta.image} />
      <meta property='og:site_name' content={meta.siteName} />

      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:url' content={`${meta.url}${router.asPath}`} />
      <meta name='twitter:site' content='@th_clarence' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />

      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />
          <meta
            name='author'
            property='article:author'
            content='Theodorus Clarence'
          />
        </>
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta
        name='msapplication-TileImage'
        content='/favicon/ms-icon-144x144.png'
      />
      <meta name='theme-color' content='#ffffff' />
    </Head>
  );
}

type Favicons = {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
};

const favicons: Array<Favicons> = [
  {
    rel: 'apple-touch-icon',
    sizes: '57x57',
    href: '/favicon/apple-icon-57x57.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '60x60',
    href: '/favicon/apple-icon-60x60.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '72x72',
    href: '/favicon/apple-icon-72x72.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '76x76',
    href: '/favicon/apple-icon-76x76.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '114x114',
    href: '/favicon/apple-icon-114x114.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '120x120',
    href: '/favicon/apple-icon-120x120.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: '/favicon/apple-icon-144x144.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '152x152',
    href: '/favicon/apple-icon-152x152.png',
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-icon-180x180.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/favicon/android-icon-192x192.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: '/favicon/favicon-96x96.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  {
    rel: 'manifest',
    href: '/favicon/manifest.json',
  },
];

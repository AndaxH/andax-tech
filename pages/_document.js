import { Html, Head, Main, NextScript } from 'next/document'
import { LayoutProps } from 'nextra-theme-blog'

export default function Document() {
  const meta = {
    title: '👋 Welcome to my little corner of the internet',
    description: 'Personal website of @AndaxTech (Andrew Hammond)',
    image:
      'https://pbs.twimg.com/profile_banners/3163496882/1652674908/1500x500'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AndaxTech" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

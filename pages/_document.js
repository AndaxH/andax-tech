import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta property="og:site_name" content="Andy Hammond" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AndaxTech" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

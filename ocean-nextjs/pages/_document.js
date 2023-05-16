import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
  <Html lang="en">
    <Head>
      {/* TODO: Include SEO */}
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* TODO: Add conditional, so this only applies if the page has an image and uses correct content */}
      <meta property="og:image" content="" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://use.typekit.net/vho0gap.css" />
      <link rel="stylesheet" href="https://cdn.plyr.io/3.4.7/plyr.css" />
    </Head>

    <body class="">
      <Main class="page-content {{ site_wrapper_class }}" aria-label="Content" />
      <NextScript />
    </body>
  </Html>
  )
}

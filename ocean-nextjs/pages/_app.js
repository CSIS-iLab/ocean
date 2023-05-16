import '@/styles/globals.scss'
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="lazysizes.min.js" async="" />
    </>
  )
}

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import Router, { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import { ColorModeScript } from 'nextjs-color-mode';
import { PropsWithChildren, useEffect, useState } from 'react';
import Footer from 'components/Footer';
import { GlobalStyle } from 'components/GlobalStyles';
import Navbar from 'components/Navbar';
import NavigationDrawer from 'components/NavigationDrawer';
import NewsletterModal from 'components/NewsletterModal';
import WaveCta from 'components/WaveCta';
import { NewsletterModalContextProvider } from 'contexts/newsletter-modal.context';
import { NavItems } from 'types';
import Loader from 'components/loader';

const navItems: NavItems = [
  { title: 'About', href: '/about' },
  { title: 'Adigide', href: '/adigide' },
  { title: 'Contact', href: '/contact' },
  { title: 'References', href: '/references' },
  { title: 'Faq', href: '/faq' },
];

function MyApp({ Component, pageProps }: AppProps) {
  const standaloneMarkup = <Component {...pageProps} />;
  const [loading, SetLoading] = useState(false);

  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      SetLoading(true);
    });
    Router.events.on('routeChangeComplete', () => {
      setTimeout(() => SetLoading(false), 1000);
    });
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
        {/* <link rel="alternate" type="application/rss+xml" href={EnvVars.URL + 'rss'} title="RSS 2.0" /> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-117119829-1', 'auto');
          ga('send', 'pageview');`,
          }}
        /> */}
        {/* <script async src="https://www.google-analytics.com/analytics.js"></script> */}
      </Head>
      {loading && <Loader />}
      <ColorModeScript />
      <GlobalStyle />
      {/* <Providers> */}
      {/* <Modals /> */}
      <Navbar items={navItems} />
      {standaloneMarkup}
      {/* <WaveCta /> */}
      <Footer />
      {/* </Providers> */}
    </>
  );
}

// function Providers<T>({ children }: PropsWithChildren<T>) {
//   return (
//     <NewsletterModalContextProvider>
//       <NavigationDrawer items={navItems}>{children}</NavigationDrawer>
//     </NewsletterModalContextProvider>
//   );
// }

// function Modals() {
//   const { isModalOpened, setIsModalOpened } = useNewsletterModalContext();
//   if (!isModalOpened) {
//     return null;
//   }
//   return <NewsletterModal onClose={() => setIsModalOpened(false)} />;
// }

export default MyApp;

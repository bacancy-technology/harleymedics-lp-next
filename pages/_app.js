import { useEffect, useState } from 'react';
import Router from 'next/router';
import { css_browser_selector } from '../utils/helpers';
import dynamic from 'next/dynamic';

import 'bootstrap/dist/css/bootstrap.css';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.js');
    css_browser_selector(navigator.userAgent);
    const start = () => {
      setLoading(true);
    };

    const end = () => {
      setLoading(false);
    };

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return <Component {...pageProps} />;
}
export default MyApp;

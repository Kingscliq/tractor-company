import '../styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ delay: 500, duration: 1000, easing: 'ease', once: true });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

import Head from 'next/head';
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../styles/styles.scss';
import { Manrope } from '@next/font/google';
import useSmoothScroll from 'src/hooks/useSmoothScroll';
import Header from 'src/components/layout/Header';
import Footer from 'src/components/layout/Footer';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const manrope = Manrope({
  display: 'swap',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {

  const scroller = useSmoothScroll();
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(callback, { rootMargin: '0px 0px -99.9% 0px' });
    let targets;

    function callback(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.dataset.bg === 'dark') {
            document.querySelector('header')?.classList.add('light');
          } else {
            document.querySelector('header')?.classList.remove('light');
          }
        }
      })
    }

    function handleChangeStart() {
      targets = document.querySelectorAll('[data-bg]');
      targets?.forEach(target => observer.unobserve(target));
    }

    function handleChangeComplete() {
      targets = document.querySelectorAll('[data-bg]');
      targets?.forEach(target => observer.observe(target));
    }

    handleChangeComplete();

    router.events.on('routeChangeStart', handleChangeStart);
    router.events.on('routeChangeComplete', handleChangeComplete);

    return () => {
      targets?.forEach(target => observer.unobserve(target));
      router.events.off('routeChangeStart', handleChangeStart);
      router.events.off('routeChangeComplete', handleChangeComplete);
    }
  }, []);

  useEffect(() => {
    function handleChangeComplete() {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 1);
    }

    router.events.on('routeChangeComplete', handleChangeComplete);

    return () => router.events.off('routeChangeComplete', handleChangeComplete);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style jsx global>{`
        html {
          --ff: ${manrope.style.fontFamily};
          font-family: ${manrope.style.fontFamily};
        }
      `}
      </style>

      <Header />

      <div id="viewport">
        <div id="content">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}

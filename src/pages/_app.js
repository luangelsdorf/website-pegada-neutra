import Head from 'next/head';
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../styles/styles.scss';
import { Manrope } from '@next/font/google';
import useSmoothScroll from 'src/hooks/useSmoothScroll';
import Header from 'src/components/layout/Header';
import Footer from 'src/components/layout/Footer';
import { useEffect } from 'react';

const manrope = Manrope({
  display: 'swap',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {

  const scroller = useSmoothScroll();

  useEffect(() => {
    const callback = entries => {
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

    const observer = new IntersectionObserver(callback, { rootMargin: '0px 0px -99.9% 0px' });
    const targets = document.querySelectorAll('[data-bg]');
    targets.forEach(target => observer.observe(target))

    return () => targets.forEach(target => observer.unobserve(target));
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

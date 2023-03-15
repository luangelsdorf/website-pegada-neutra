import Head from 'next/head';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../styles/styles.scss';
import { Manrope } from "next/font/google";
import useSmoothScroll from 'src/hooks/useSmoothScroll';
import Header from 'src/components/layout/Header';
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
  }, [router.events]);

  useEffect(() => {
    function handleLinkClick(e) {
      if (!e.currentTarget.hash) return;
      e.preventDefault();
      let hash = decodeURI(e.currentTarget.hash);
      let id = hash.substring(1);
      let target = document.querySelector(hash);

      // if the hash does not exist on the current page, navigate to the <a>'s pathname and pass the hash in a query string
      if (!target) {
        router.push({ pathname: e.currentTarget.pathname, query: { hash: id } }, { pathname: e.currentTarget.pathname });
        return;
      }

      // if it does, then scroll to the corresponding element
      let scrollPosition = (target.getBoundingClientRect().top + window.scrollY) - 120;
      window.history.pushState({}, '', hash);
      scrollTo(0, scrollPosition);
    }

    let links = document.querySelectorAll(`a[href*="#"`);
    links.forEach(link => link.addEventListener('click', handleLinkClick));

    return () => links.forEach(link => link.removeEventListener('click', handleLinkClick));
  }, [router]);

  useEffect(() => {
    function handleChangeComplete() {
      setTimeout(() => {
        scrollTo(0, 0);
      }, 1);
    }

    router.events.on('routeChangeComplete', handleChangeComplete);

    return () => router.events.off('routeChangeComplete', handleChangeComplete);
  }, [router.events]);

  useEffect(() => {
    if (router.query.hash) {
      let target = document.getElementById(router.query.hash);
      if (!target) return;

      let scrollPosition = (target.getBoundingClientRect().top + window.scrollY) - 120;
      window.history.pushState({}, '', `#${router.query.hash}`);
      setTimeout(() => {
        scrollTo(0, scrollPosition);
      }, 50);
    }
  }, [router.query]);

  useEffect(() => {
    if (window.location.hash) {
      let target = document.querySelector(decodeURI(window.location.hash));
      if (!target) return;

      let scrollPosition = (target.getBoundingClientRect().top + window.scrollY) - 120;
      setTimeout(() => {
        scrollTo(0, scrollPosition);
      }, 50);
    }
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

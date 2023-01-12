import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import AboutUs from 'src/components/home/AboutUs';
import Banner from 'src/components/home/Banner';
import Header from '../components/layout/Header';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Solutions from 'src/components/home/Solutions';
import Testimonials from 'src/components/home/Testimonials';
import Partners from 'src/components/home/Partners';
import RecentPosts from 'src/components/home/RecentPosts';
import Footer from 'src/components/layout/Footer';
import fetchAPI from 'src/utils/fetch';

export default function Home({home, footer}) {
  const style = {
    position: 'relative',
    marginTop: '-80px',
    paddingTop: '120px',
    backgroundColor: 'rgb(var(--light-green))',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
    transformOrigin: 'top',
  };

  useEffect(() => {
    const containerWidth = document.querySelector('#body .container').getBoundingClientRect().width - 24;
    const vw = window.innerWidth;
    const initialScale = containerWidth / vw;
    document.getElementById('body').style.transform = `scale(${initialScale})`;
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to('#body', {
        scrollTrigger: {
          trigger: '#body',
          scrub: 0.9,
          start: 'top 85%',
          end: 'top 15%',
        },
        scale: 1,
        duration: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Head>
        <title>Pegada Neutra</title>
        <meta name="description" content="Website da Pegada Neutra" />
      </Head>

      <main>
        <Banner content={home.banner} />
        <div id="body" style={style}>
          <AboutUs content={home.about} />
        </div>
        <Solutions content={home.solutions} />
        <Testimonials content={home.testimonials} />
        <Partners content={home.partners} />
        <RecentPosts />
        <Footer content={footer} light />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const home = await fetchAPI('home');
  const footer = await fetchAPI('footer');

  return {
    props: {
      home,
      footer,
    },
    revalidate: 10,
  }
}
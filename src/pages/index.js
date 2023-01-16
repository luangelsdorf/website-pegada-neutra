import Head from 'next/head';
import { useEffect } from 'react';
import AboutUs from 'src/components/home/AboutUs';
import Banner from 'src/components/home/Banner';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Solutions from 'src/components/home/Solutions';
import Testimonials from 'src/components/home/Testimonials';
import Partners from 'src/components/home/Partners';
import RecentPosts from 'src/components/home/RecentPosts';
import Footer from 'src/components/layout/Footer';
import fetchAPI from 'src/utils/fetch';
import Section from 'src/components/common/Section';

export default function Home({ home, footer }) {
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
    const containerWidth = document.querySelector('#sobre-nos .container')?.getBoundingClientRect().width - 8;
    const vw = window.innerWidth;
    const initialScale = containerWidth / vw;
    const body = document.getElementById('sobre-nos');
    if (body) body.style.transform = `scale(${initialScale})`;
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to('#sobre-nos', {
        scrollTrigger: {
          trigger: '#sobre-nos',
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
        <Section data-bg="light" id="home">
          <Banner content={home.banner} />
        </Section>
        <Section data-bg="light" id="sobre-nos" pb="120" style={style}>
          <AboutUs content={home.about} />
        </Section>
        <Section data-bg="dark">
          <Solutions content={home.solutions} />
        </Section>
        <Section data-bg="light" pb="120" pt="120">
          <Testimonials content={home.testimonials} />
        </Section>
        <Section data-bg="light" pb="96" pt="96">
          <Partners content={home.partners} />
        </Section>
        <Section data-bg="dark" pt="96" pb="120" style={{ backgroundColor: 'rgb(var(--dark-green))' }}>
          <RecentPosts />
        </Section>
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
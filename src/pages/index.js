import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import AboutUs from 'src/components/home/AboutUs';
import Banner from 'src/components/home/Banner';
import Header from '../components/layout/Header';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function Home() {
  const style = {
    position: 'relative',
    marginTop: '-120px',
    paddingTop: '120px',
    backgroundColor: 'rgb(var(--light-green))',
    borderRadius: '16px',
    transform: 'scale(0.9)',
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('#body', {
      scrollTrigger: {
        trigger: '#body',
        scrub: 0.6,
        end: 'top 20%',
      },
      scale: 1,
      duration: 1,
    })
  }, []);

  return (
    <>
      <Head>
        <title>Pegada Neutra</title>
        <meta name="description" content="Website da Pegada Neutra" />
      </Head>

      <Header />

      <main>
        <Banner />
        <div id="body" style={style}>
          <AboutUs />
        </div>
        <div style={{ height: '600px' }} />
        <div style={{ height: '600px' }} />
        <div style={{ height: '600px' }} />
        <div style={{ height: '600px' }} />
      </main>
    </>
  )
}

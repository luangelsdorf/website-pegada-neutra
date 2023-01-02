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

export default function Home() {
  const style = {
    position: 'relative',
    marginTop: '-10%',
    paddingTop: '120px',
    backgroundColor: 'rgb(var(--light-green))',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
  };

  /* useEffect(() => {
    const containerWidth = document.querySelector('#body .container').getBoundingClientRect().width - 24;
    const vw = window.innerWidth;
    const initialScale = containerWidth / vw;
    document.getElementById('body').style.transform = `scale(${initialScale})`;
  }, []); */

  /* useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to('#body', {
        scrollTrigger: {
          trigger: '#body',
          scrub: 0.6,
          start: 'top 85%',
          end: 'top 15%',
        },
        scale: 1,
        duration: 1,
      });
    });

    return () => ctx.revert();
  }, []); */

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
        <Solutions />
        <Testimonials />
        <Partners />
        <RecentPosts />
        <Footer light />
        {/* <div style={{height: '600px', backgroundColor: 'rgb(var(--light-green))'}}>
          <Button href="/sobre" className="dark-green">
            dsa
          </Button>
        </div> */}
      </main>
    </>
  )
}

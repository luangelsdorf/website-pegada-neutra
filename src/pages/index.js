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

export default function Home() {
  const style = {
    position: 'relative',
    marginTop: '-120px',
    paddingTop: '120px',
    backgroundColor: 'rgb(var(--light-green))',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
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
        <Solutions />
        <Testimonials />
        <Partners />
        <RecentPosts />
        {/* <div style={{height: '600px', backgroundColor: 'rgb(var(--light-green))'}}>
          <Button href="/sobre" className="dark-green">
            dsa
          </Button>
        </div> */}
      </main>
    </>
  )
}

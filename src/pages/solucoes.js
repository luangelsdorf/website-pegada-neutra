import Head from 'next/head';
import React, { useEffect } from 'react';
import Section from 'src/components/common/Section';
import Banner from 'src/components/common/Banner';
import Footer from 'src/components/layout/Footer';
import fetchAPI from 'src/utils/fetch';
import RecyclingCredits from 'src/components/solutions/RecyclingCredits';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function SobreNos({ services, footer }) {

  const style = {
    position: 'relative',
    marginTop: '-80px',
    paddingTop: '120px',
    backgroundColor: 'rgb(var(--dark-green))',
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
    transformOrigin: 'top',

  };

  useEffect(() => {
    const containerWidth = document.querySelector('#créditos-de-reciclagem .container')?.getBoundingClientRect().width - 8;
    const vw = window.innerWidth;
    const initialScale = containerWidth / vw;
    const body = document.getElementById('créditos-de-reciclagem');
    if (body) body.style.transform = `scale(${initialScale})`;
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to('#créditos-de-reciclagem', {
        scrollTrigger: {
          trigger: '#créditos-de-reciclagem',
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
        <title>Soluções | Pegada Neutra</title>
        <meta name="description" content="Website da Pegada Neutra" />
      </Head>

      <main>
        <Section id="home">
          <Banner content={services.banner} solutions />
        </Section>

        <Section style={style} id="créditos-de-reciclagem" pb="96">
          <RecyclingCredits content={services.recyclingCredits} />
        </Section>

        <Section id="créditos-de-carbono">
          
        </Section>
      </main>
      <Footer content={footer} />
    </>
  )
}

export async function getStaticProps() {
  const services = await fetchAPI('service');
  const footer = await fetchAPI('footer');

  return {
    props: {
      services,
      footer,
    },
    revalidate: 10,
  }
}
import Head from 'next/head';
import React from 'react';
import AboutUs from 'src/components/about/AboutUs';
import Banner from 'src/components/about/Banner';
import Principles from 'src/components/about/Principles';
import Section from 'src/components/common/Section';
import FAQ from 'src/components/contact/FAQ';
import Footer from 'src/components/layout/Footer';
import fetchAPI from 'src/utils/fetch';

export default function SobreNos({ about, faq, info, footer }) {
  return (
    <>
      <Head>
        <title>Sobre Nós | Pegada Neutra</title>
        <meta name="description" content="Website da Pegada Neutra" />
      </Head>

      <main style={{ background: 'rgb(var(--dark-green))' }}>
        <Section data-bg="dark" id="home" style={{ position: 'relative' }}>
          <Banner content={about.banner} />
        </Section>

        <Section data-bg="light" id="sobre">
          <AboutUs content={about.aboutUs} info={footer} />
        </Section>

        <Section data-bg="dark" id="princípios" pt="120 80" pb="160 96">
          <Principles content={about.principles} />
        </Section>

        <Section className="bg-light" data-bg="light" id="faq" pt="120 80" pb="120 80">
          <FAQ light content={faq} />
        </Section>
      </main>

      <Footer info={info} content={footer} />
    </>
  )
}

export async function getStaticProps() {
  const about = await fetchAPI('about');
  const faq = await fetchAPI('faq');
  const info = await fetchAPI('info');
  const footer = await fetchAPI('footer');

  return {
    props: {
      about,
      faq,
      info,
      footer,
    },
    revalidate: 10,
  }
}
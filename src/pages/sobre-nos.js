import Head from 'next/head';
import React from 'react';
import AboutUs from 'src/components/about/AboutUs';
import Banner from 'src/components/about/Banner';
import Section from 'src/components/common/Section';
import Footer from 'src/components/layout/Footer';
import fetchAPI from 'src/utils/fetch';

export default function SobreNos({ about, footer }) {
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
          <AboutUs content={about.aboutUs} />
        </Section>
      </main>
      <Footer content={footer} light />
    </>
  )
}

export async function getStaticProps() {
  const about = await fetchAPI('about');
  const footer = await fetchAPI('footer');

  return {
    props: {
      about,
      footer,
    },
    revalidate: 10,
  }
}
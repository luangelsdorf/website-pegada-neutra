import Head from 'next/head';
import React from 'react';
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

      <main>
        <Section data-bg="dark">
          <Banner content={about.banner} />
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
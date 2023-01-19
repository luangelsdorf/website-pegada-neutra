import Head from 'next/head';
import React from 'react';
import Section from 'src/components/common/Section';
import Banner from 'src/components/home/Banner';
import Footer from 'src/components/layout/Footer';
import fetchAPI from 'src/utils/fetch';

export default function SobreNos({ services, footer }) {
  return (
    <>
      <Head>
        <title>Soluções | Pegada Neutra</title>
        <meta name="description" content="Website da Pegada Neutra" />
      </Head>

      <main>
        <Section>
          <Banner content={services.banner} solutions />
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
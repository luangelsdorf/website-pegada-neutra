import Banner from 'src/components/partners/Banner';
import Head from 'next/head';
import Header from 'src/components/layout/Header';
import React from 'react';
import Filter from 'src/components/partners/Filter';
import PartnerList from 'src/components/partners/PartnerList';
import Footer from 'src/components/layout/Footer';
import Section from 'src/components/common/Section';
import fetchAPI from 'src/utils/fetch';

export default function Parceiros({ clients, partners, info, footer }) {
  return (
    <>
      <Head>
        <title>Parceiros | Pegada Neutra</title>
        <meta name="description" content="Estas são as marcas parceiras da Pegada Neutra" />
      </Head>

      <main>
        <Section id="home" data-bg="dark" pb="120 80" pt="200 168" style={{ background: 'rgb(var(--dark-green))' }}>
          <Banner content={clients} />
        </Section>
        
        <Filter />

        <Section id="lista" data-bg="light" mt="48" pb="120">
          <PartnerList content={partners}  />
        </Section>
      </main>
      <Footer content={footer} info={info} />
    </>
  )
}

export async function getStaticProps() {
  const clients = await fetchAPI('client');
  const partners = await fetchAPI('partners');
  const info = await fetchAPI('info');
  const footer = await fetchAPI('footer');

  return {
    props: {
      clients,
      partners,
      info,
      footer,
    },
    revalidate: 10,
  }
}
import Banner from 'src/components/partners/Banner';
import Head from 'next/head';
import Header from 'src/components/layout/Header';
import React from 'react';
import Filter from 'src/components/partners/Filter';
import PartnerList from 'src/components/partners/PartnerList';
import Footer from 'src/components/layout/Footer';
import Section from 'src/components/common/Section';

export default function Parceiros() {
  return (
    <>
      <Head>
        <title>Parceiros | Pegada Neutra</title>
        <meta name="description" content="Estas são as marcas parceiras da Pegada Neutra" />
      </Head>

      <Header light />

      <main>
        <Section data-bg="dark" pb="120" pt="200" style={{ background: 'rgb(var(--dark-green))' }}>
          <Banner />
        </Section>
        
        <Filter />

        <Section data-bg="light" mt="48" pb="120">
          <PartnerList />
        </Section>
      </main>
      <Footer />
    </>
  )
}

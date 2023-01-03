import Banner from 'src/components/partners/Banner';
import Head from 'next/head';
import Header from 'src/components/layout/Header';
import React from 'react';
import Filter from 'src/components/partners/Filter';
import PartnerList from 'src/components/partners/PartnerList';
import Footer from 'src/components/layout/Footer';

export default function Parceiros() {
  return (
    <>
      <Head>
        <title>Parceiros | Pegada Neutra</title>
        <meta name="description" content="Estas são as marcas parceiras da Pegada Neutra" />
      </Head>

      <Header light />

      <main>
        <Banner />
        <Filter />
        <PartnerList />
      </main>
      <Footer />
    </>
  )
}
